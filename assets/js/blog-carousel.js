const blogVideos = [
  {
    id: 3,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/S9QrMfxYqBk?enablejsapi=1",
    videoId: "S9QrMfxYqBk",
    caption: "Real-world Infrastructure as Code Projects with Terraform",
    thumb: "https://img.youtube.com/vi/S9QrMfxYqBk/maxresdefault.jpg"
  },
  {
    id: 4,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/Z62-yLdvKNI?enablejsapi=1",
    videoId: "Z62-yLdvKNI",
    caption: "Hands-on AWS Experience for Top Tech Placements",
    thumb: "https://img.youtube.com/vi/Z62-yLdvKNI/maxresdefault.jpg"
  },
  {
    id: 5,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/jt_Pz-ymEcg?enablejsapi=1",
    videoId: "jt_Pz-ymEcg",
    caption: "Success Story - Cloud Journey Highlight",
    thumb: "https://img.youtube.com/vi/jt_Pz-ymEcg/maxresdefault.jpg"
  },
  {
    id: 6,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/Jl9hBFOEUM8?enablejsapi=1",
    videoId: "Jl9hBFOEUM8",
    caption: "Student Achievement and Placement",
    thumb: "https://img.youtube.com/vi/Jl9hBFOEUM8/maxresdefault.jpg"
  },
  {
    id: 7,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/91zwiD2s8Bc?enablejsapi=1",
    videoId: "91zwiD2s8Bc",
    caption: "AWS Learning Experience with Aviz Academy",
    thumb: "https://img.youtube.com/vi/91zwiD2s8Bc/maxresdefault.jpg"
  },
  {
    id: 8,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/gomV4wxWFI0?enablejsapi=1",
    videoId: "gomV4wxWFI0",
    caption: "Mastering AWS DevOps - From Basics to Advanced Cloud Architecture",
    thumb: "https://img.youtube.com/vi/gomV4wxWFI0/maxresdefault.jpg"
  },
  {
    id: 9,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/_r8ZVqh6AZ4?enablejsapi=1",
    videoId: "_r8ZVqh6AZ4",
    caption: "Industry Ready CI/CD Pipelines with Jenkins and GitHub Actions",
    thumb: "https://img.youtube.com/vi/_r8ZVqh6AZ4/maxresdefault.jpg"
  }
];

class BlogVideoCarousel {
  constructor(videos) {
    this.videos = videos;
    this.wrapper = document.querySelector(".testimonials-wrapper");
    this.scrollTrack = null;
    this.players = [];
    this.currentlyPlayingPlayer = null;
    this.isSlideshowPaused = false;
    this.init();
  }

  init() {
    if (!this.wrapper) return;
    this.createInfiniteScroll();
    this.loadYouTubeAPI();
  }


  loadYouTubeAPI() {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => this.initializePlayers();
    } else {
      this.initializePlayers();
    }
  }

  initializePlayers() {
    const cards = document.querySelectorAll('.moment-card.blog-video-card');
    cards.forEach((card) => {
      const trigger = card.querySelector('.video-trigger');
      const playerContainer = card.querySelector('.player-container');
      const videoId = trigger.dataset.videoId;
      const uniqueId = `player-${Math.random().toString(36).substr(2, 9)}`;

      const iframe = document.createElement('div');
      iframe.id = uniqueId;
      playerContainer.appendChild(iframe);

      const player = new YT.Player(uniqueId, {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          'autoplay': 0,
          'rel': 0,
          'enablejsapi': 1
        },
        events: {
          'onReady': () => {
            trigger.addEventListener('click', () => {
              this.stopAllVideosExcept(player);
              player.playVideo();
              card.classList.add('is-playing');
              this.currentlyPlayingPlayer = player;
              this.pauseSlideshow();
              this.isSlideshowPaused = true;
            });
          },
          'onStateChange': (event) => {
            if (event.data === YT.PlayerState.PLAYING) {
              this.stopAllVideosExcept(player);
              card.classList.add('is-playing');
              this.currentlyPlayingPlayer = player;
              this.pauseSlideshow();
              this.isSlideshowPaused = true;
            } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
              // Keep paused/paused logic
            }
          }
        }
      });
      player.card = card;
      this.players.push(player);
    });
    this.startScrollMonitoring();
  }

  stopAllVideos() {
    this.players.forEach(p => {
      try { p.pauseVideo(); } catch (e) { }
      p.card.classList.remove('is-playing');
    });
    this.currentlyPlayingPlayer = null;
  }

  stopAllVideosExcept(exceptPlayer) {
    this.players.forEach(p => {
      if (p !== exceptPlayer) {
        try { p.pauseVideo(); } catch (e) { }
        p.card.classList.remove('is-playing');
      }
    });
  }

  startScrollMonitoring() {
    setInterval(() => this.checkVideoVisibility(), 500);
  }

  checkVideoVisibility() {
    if (!this.currentlyPlayingPlayer) return;
    const containerRect = this.wrapper.getBoundingClientRect();
    const cardRect = this.currentlyPlayingPlayer.card.getBoundingClientRect();
    const isVisible = (
      cardRect.right > containerRect.left + 50 &&
      cardRect.left < containerRect.right - 50
    );
    if (!isVisible) {
      try {
        this.currentlyPlayingPlayer.pauseVideo();
        this.currentlyPlayingPlayer.card.classList.remove('is-playing');
        this.currentlyPlayingPlayer = null;
        // Keep paused until manual resume or hover
      } catch (e) { }
    }
  }

  pauseSlideshow() {
    if (this.scrollTrack) this.scrollTrack.style.animationPlayState = 'paused';
  }

  resumeSlideshow() {
    if (this.scrollTrack) this.scrollTrack.style.animationPlayState = 'running';
  }

  createInfiniteScroll() {
    this.scrollTrack = document.createElement("div");
    this.scrollTrack.className = "scroll-track";

    // Repeated videos for infinite loop
    for (let i = 0; i < 4; i++) {
      this.videos.forEach((video) => {
        const card = this.createVideoCard(video);
        this.scrollTrack.appendChild(card);
      });
    }

    this.wrapper.appendChild(this.scrollTrack);

    this.scrollTrack.addEventListener('mouseenter', () => this.pauseSlideshow());
    this.scrollTrack.addEventListener('mouseleave', () => {
      if (!this.isSlideshowPaused && !this.currentlyPlayingPlayer) this.resumeSlideshow();
    });
  }

  createVideoCard(video) {
    const card = document.createElement("div");
    card.className = "moment-card blog-video-card";

    card.innerHTML = `
      <div class="video-thumbnail-container">
        <div class="video-trigger" data-video-id="${video.videoId}">
            <img src="${video.thumb}" alt="${video.caption}">
            <div class="play-indicator-blog"></div>
        </div>
        <div class="player-container"></div>
      </div>
    `;
    return card;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector(".testimonials-wrapper")) {
    new BlogVideoCarousel(blogVideos);
  }
});
