/**
 * Blog Page - Video Marquee & In-Place Playback
 */

document.addEventListener('DOMContentLoaded', () => {
    const videoTrack = document.getElementById('videoTrack');
    const thumbnailWrappers = document.querySelectorAll('.video-thumbnail-wrapper');
    let isVideoPlaying = false;
    let currentPlayerContainer = null;

    const pauseMarquee = () => {
        if (videoTrack) {
            videoTrack.style.animationPlayState = 'paused';
        }
    };

    const resumeMarquee = () => {
        if (videoTrack && !isVideoPlaying) {
            videoTrack.style.animationPlayState = 'running';
        }
    };

    thumbnailWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            const videoId = this.getAttribute('data-video-id');
            if (!videoId) return;
            
            // Pause the marquee animation when a video is clicked
            pauseMarquee();
            isVideoPlaying = true;
            
            // Store reference to current player container
            currentPlayerContainer = this;
            
            // Replace thumbnail with iframe
            this.classList.add('video-player-active');
            this.classList.remove('video-thumbnail-wrapper');
            
            const iframeHTML = `
                <iframe 
                    id="youtube-iframe-${videoId}"
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
                <button class="video-close-btn" aria-label="Close video">
                    <span>×</span>
                </button>
            `;
            
            this.innerHTML = iframeHTML;
            
            // Add event listener to close button
            const closeBtn = this.querySelector('.video-close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    resetVideo();
                });
            }
        });
    });

    const resetVideo = () => {
        if (currentPlayerContainer) {
            const videoId = currentPlayerContainer.getAttribute('data-video-id');
            
            // Reset the container
            currentPlayerContainer.classList.remove('video-player-active');
            currentPlayerContainer.classList.add('video-thumbnail-wrapper');
            
            // Restore the thumbnail
            const thumbnailImg = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            
            currentPlayerContainer.innerHTML = `
                <img src="${thumbnailImg}" alt="Video thumbnail">
                <div class="play-indicator"><i class="fa-solid fa-play"></i></div>
            `;
            
            // Reattach click listener to the reset element
            currentPlayerContainer.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                const resetVideoId = this.getAttribute('data-video-id');
                if (!resetVideoId) return;
                
                pauseMarquee();
                isVideoPlaying = true;
                currentPlayerContainer = this;
                
                this.classList.add('video-player-active');
                this.classList.remove('video-thumbnail-wrapper');
                
                const newIframeHTML = `
                    <iframe 
                        id="youtube-iframe-${resetVideoId}"
                        src="https://www.youtube.com/embed/${resetVideoId}?autoplay=1&rel=0&enablejsapi=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                    <button class="video-close-btn" aria-label="Close video">
                        <span>×</span>
                    </button>
                `;
                
                this.innerHTML = newIframeHTML;
                
                const newCloseBtn = this.querySelector('.video-close-btn');
                if (newCloseBtn) {
                    newCloseBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        resetVideo();
                    });
                }
            });
            
            // Reset state
            isVideoPlaying = false;
            currentPlayerContainer = null;
            resumeMarquee();
        }
    };

    // Close video when clicking outside
    document.addEventListener('click', (e) => {
        if (isVideoPlaying && currentPlayerContainer && !currentPlayerContainer.contains(e.target)) {
            resetVideo();
        }
    });

    // Handle ESC key to close video
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isVideoPlaying) {
            resetVideo();
        }
    });
});