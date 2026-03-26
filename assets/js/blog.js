/**
 * Blog Page - Video Marquee & In-Place Playback
 */

document.addEventListener('DOMContentLoaded', () => {
    const videoTrack = document.getElementById('videoTrack');
    const thumbnailWrappers = document.querySelectorAll('.video-thumbnail-wrapper');

    thumbnailWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const videoId = this.getAttribute('data-video-id');
            const parent = this.parentElement;
            
            // Pause the marquee animation when a video is clicked
            if (videoTrack) {
                videoTrack.style.animationPlayState = 'paused';
            }

            // Replace thumbnail with iframe
            this.className = 'video-player-active';
            this.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                </iframe>
            `;
        });
    });
});