const academyMoments = [
  // All Videos First
  {
    id: 1,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/_r8ZVqh6AZ4?enablejsapi=1",
    videoId: "video-anniversary",
    caption: "🎉 Aviz Academy 1st Anniversary Celebration"
  },
  {
    id: 2,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/QyoQGtOhpgo?enablejsapi=1",
    videoId: "video-newbatch",
    caption: "📢 New Batch Starting Soon – Join the Cloud Journey!"
  },
  {
    id: 3,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/scmCUfcfv4A?enablejsapi=1",
    videoId: "video-mlrit",
    caption: "☁️ AWS Student Annual Community Day at MLRIT"
  },
  {
    id: 7,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/gomV4wxWFI0?enablejsapi=1",
    videoId: "video-student-1",
    caption: "🚀 Hands-on Learning and Student Success"
  },
  {
    id: 8,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/16Sqtxbz2-c?enablejsapi=1",
    videoId: "video-student-2",
    caption: "✨ Amazing Moments from our AWS Community"
  },
  // All Images Second
  {
    id: 4,
    image: "assets/images/ACS02536.JPG",
    caption: "Collaborative Learning – Students Engaging in Hands-on AWS Practice",
    type: "image"
  },
  {
    id: 5,
    image: "assets/images/ACS02658.JPG",
    caption: "Expert Guidance – Avinash Leading Technical Discussions",
    type: "image"
  },
  {
    id: 6,
    image: "assets/images/ACS03096.JPG",
    caption: "Aviz Academy Family – Growing Together in the Cloud Journey",
    type: "image"
  },
];

class InfiniteScrollMoments {
  constructor(moments) {
    this.moments = moments;
    this.wrapper = document.querySelector(".testimonials-wrapper");
    this.scrollTrack = null;
    this.players = [];
    this.currentlyPlayingPlayer = null;
    this.isSlideshowPaused = false;
    this.init();
  }

  init() {
    this.createInfiniteScroll();
    this.addArrowButtons();
    this.loadYouTubeAPI();
  }

  addArrowButtons() {
    const container = this.wrapper.parentElement;

    // Create left arrow
    const leftArrow = document.createElement('button');
    leftArrow.className = 'slideshow-arrow slideshow-arrow-left';
    leftArrow.innerHTML = '&lt;';
    leftArrow.setAttribute('aria-label', 'Previous');
    leftArrow.addEventListener('click', () => this.handleLeftArrow());

    // Create right arrow
    const rightArrow = document.createElement('button');
    rightArrow.className = 'slideshow-arrow slideshow-arrow-right';
    rightArrow.innerHTML = '&gt;';
    rightArrow.setAttribute('aria-label', 'Next');
    rightArrow.addEventListener('click', () => this.handleRightArrow());

    container.appendChild(leftArrow);
    container.appendChild(rightArrow);

    this.leftArrow = leftArrow;
    this.rightArrow = rightArrow;
  }

  handleLeftArrow() {
    // Resume the slideshow if it's paused
    if (this.isSlideshowPaused) {
      this.resumeSlideshow();
      this.isSlideshowPaused = false;
    }

    // Scroll left by one card width
    const firstCard = this.wrapper.querySelector('.moment-card');
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 320; // card + 20px gap
    if (this.scrollTrack) {
      const currentTransform = this.scrollTrack.style.transform || 'translateX(0px)';
      const currentX = parseFloat(currentTransform.match(/-?\d+\.?\d*/)?.[0] || 0);
      this.scrollTrack.style.transform = `translateX(${currentX + cardWidth}px)`;
    }
  }

  handleRightArrow() {
    // Resume the slideshow if it's paused
    if (this.isSlideshowPaused) {
      this.resumeSlideshow();
      this.isSlideshowPaused = false;
    }

    // Scroll right by one card width
    const firstCard = this.wrapper.querySelector('.moment-card');
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 320; // card + 20px gap
    if (this.scrollTrack) {
      const currentTransform = this.scrollTrack.style.transform || 'translateX(0px)';
      const currentX = parseFloat(currentTransform.match(/-?\d+\.?\d*/)?.[0] || 0);
      this.scrollTrack.style.transform = `translateX(${currentX - cardWidth}px)`;
    }
  }

  loadYouTubeAPI() {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        this.initializePlayers();
      };
    } else {
      this.initializePlayers();
    }
  }

  initializePlayers() {
    const videoIframes = document.querySelectorAll('.moment-video iframe');

    videoIframes.forEach((iframe) => {
      // Only initialize YouTube Player for YouTube iframes
      if (iframe.src.includes('youtube.com')) {
        const player = new YT.Player(iframe, {
          events: {
            'onStateChange': (event) => this.onPlayerStateChange(event, player),
            'onReady': (event) => this.onPlayerReady(event, player)
          }
        });
        // Attach the iframe to the player object for easier visibility checking
        player.iframeElement = iframe;
        this.players.push(player);
      }
    });

    // Start monitoring scroll position to stop videos when out of view
    this.startScrollMonitoring();
  }

  onPlayerReady(event, player) {
    // Ensure video doesn't autoplay
    player.pauseVideo();
  }

  onPlayerStateChange(event, player) {
    // YT.PlayerState.PLAYING = 1
    // YT.PlayerState.PAUSED = 2
    // YT.PlayerState.ENDED = 0

    if (event.data === YT.PlayerState.PLAYING) {
      // Stop all other videos when one starts playing
      this.stopAllVideosExcept(player);
      this.currentlyPlayingPlayer = player;
      // Video is playing - pause the slideshow
      this.pauseSlideshow();
      this.isSlideshowPaused = true;
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
      // Video paused or ended - STOP the slideshow (don't auto-resume)
      if (this.currentlyPlayingPlayer === player) {
        this.currentlyPlayingPlayer = null;
      }
      // Keep slideshow paused when video stops
      this.pauseSlideshow();
      this.isSlideshowPaused = true;
    }
  }

  stopAllVideosExcept(exceptPlayer) {
    this.players.forEach(player => {
      if (player !== exceptPlayer) {
        try {
          player.pauseVideo();
        } catch (e) {
          // Ignore errors for players not yet ready
        }
      }
    });
  }

  stopAllVideos() {
    this.players.forEach(player => {
      try {
        player.pauseVideo();
      } catch (e) {
        // Ignore errors for players not yet ready
      }
    });
    this.currentlyPlayingPlayer = null;
    this.pauseSlideshow();
    this.isSlideshowPaused = true;
  }

  startScrollMonitoring() {
    // Check every 500ms if videos have scrolled out of view
    setInterval(() => {
      this.checkVideoVisibility();
    }, 500);
  }

  checkVideoVisibility() {
    if (!this.currentlyPlayingPlayer) return;

    const containerRect = this.wrapper.getBoundingClientRect();
    const iframe = this.currentlyPlayingPlayer.iframeElement;

    if (!iframe) return;

    const iframeRect = iframe.getBoundingClientRect();

    // Check if iframe is mostly out of view
    const isVisible = (
      iframeRect.right > containerRect.left + 50 &&
      iframeRect.left < containerRect.right - 50
    );

    if (!isVisible) {
      // Video has scrolled out of view, stop it
      try {
        this.currentlyPlayingPlayer.pauseVideo();
        this.currentlyPlayingPlayer = null;
        this.pauseSlideshow();
        this.isSlideshowPaused = true;
      } catch (e) {
        // Ignore errors
      }
    }
  }

  pauseSlideshow() {
    if (this.scrollTrack) {
      this.scrollTrack.style.animationPlayState = 'paused';
    }
  }

  resumeSlideshow() {
    if (this.scrollTrack) {
      this.scrollTrack.style.animationPlayState = 'running';
    }
  }

  createInfiniteScroll() {
    // Create two sets of images for seamless looping
    this.scrollTrack = document.createElement("div");
    this.scrollTrack.className = "scroll-track";

    // First set of images
    this.moments.forEach((moment) => {
      const momentCard = this.createMomentCard(moment);
      this.scrollTrack.appendChild(momentCard);
    });

    // Duplicate set for seamless loop
    this.moments.forEach((moment) => {
      const momentCard = this.createMomentCard(moment);
      this.scrollTrack.appendChild(momentCard);
    });

    this.wrapper.appendChild(this.scrollTrack);

    // Add pause on hover functionality
    this.scrollTrack.addEventListener('mouseenter', () => {
      this.scrollTrack.style.animationPlayState = 'paused';
    });

    this.scrollTrack.addEventListener('mouseleave', () => {
      // Only resume if not manually paused
      if (!this.isSlideshowPaused && !this.currentlyPlayingPlayer) {
        this.scrollTrack.style.animationPlayState = 'running';
      }
    });
  }

  createMomentCard(moment) {
    const card = document.createElement("div");
    card.className = "moment-card";

    if (moment.type === "video") {
      const uniqueId = `${moment.videoId}-${Math.random().toString(36).substr(2, 9)}`;
      card.innerHTML = `
        <div class="moment-image moment-video">
          <iframe 
            id="${uniqueId}"
            src="${moment.videoUrl}" 
            title="${moment.caption}"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy"
          ></iframe>
          <div class="moment-overlay">
            <p class="moment-caption">${moment.caption}</p>
          </div>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="moment-image">
          <img src="${moment.image}" alt="${moment.caption}" loading="lazy">
          <div class="moment-overlay">
            <p class="moment-caption">${moment.caption}</p>
          </div>
        </div>
      `;
    }
    return card;
  }
}

// Initialize the infinite scroll
document.addEventListener('DOMContentLoaded', () => {
  new InfiniteScrollMoments(academyMoments);
});
