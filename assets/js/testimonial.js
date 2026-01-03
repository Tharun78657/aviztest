const academyMoments = [
  {
    id: 1,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/_r8ZVqh6AZ4?enablejsapi=1",
    videoId: "video-anniversary",
    caption: "🎉 Aviz Academy 1st Anniversary Celebration"
  },
  {
    id: 2,
    image: "assets/images/ACS02536.JPG",
    caption: "Collaborative Learning – Students Engaging in Hands-on AWS Practice",
    type: "image"
  },
  {
    id: 3,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/QyoQGtOhpgo?enablejsapi=1",
    videoId: "video-newbatch",
    caption: "📢 New Batch Starting Soon – Join the Cloud Journey!"
  },
  {
    id: 4,
    image: "assets/images/ACS02658.JPG",
    caption: "Expert Guidance – Avinash Leading Technical Discussions",
    type: "image"
  },
  {
    id: 5,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/scmCUfcfv4A?enablejsapi=1",
    videoId: "video-mlrit",
    caption: "☁️ AWS Student Annual Community Day at MLRIT"
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
    this.init();
  }

  init() {
    this.createInfiniteScroll();
    this.loadYouTubeAPI();
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
      const player = new YT.Player(iframe, {
        events: {
          'onStateChange': (event) => this.onPlayerStateChange(event)
        }
      });
      this.players.push(player);
    });
  }

  onPlayerStateChange(event) {
    // YT.PlayerState.PLAYING = 1
    // YT.PlayerState.PAUSED = 2
    // YT.PlayerState.ENDED = 0

    if (event.data === YT.PlayerState.PLAYING) {
      // Video is playing - pause the slideshow
      this.pauseSlideshow();
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
      // Video paused or ended - resume the slideshow
      this.resumeSlideshow();
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
      this.scrollTrack.style.animationPlayState = 'running';
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
