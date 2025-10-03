document.addEventListener("DOMContentLoaded", () => {
    // الحصول على الـ ID من سمة data-video-id في <body>
    const videoId = document.body.getAttribute('data-video-id');

    if (!videoId) {
        console.error("No video ID found on the body element.");
        return;
    }

    fetch("/Match summary/Match_summary.json")
        .then(response => response.json())
        .then(data => {
            const videoContainer = document.getElementById("video-container");

            // البحث عن الفيديو المطابق للـ ID المطلوب فقط
            const targetVideo = data.videos.find(video => video.id == videoId);

            if (targetVideo && targetVideo.iframe) {
                // عرض الفيديو المطلوب فقط
                videoContainer.innerHTML = `
                    <iframe 
                          
                            src="${targetVideo.iframe}"
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                    </iframe>
                `;
            } else {
                videoContainer.innerHTML = "<p>Video not found.</p>";
            }
        })
        .catch(error => {
            console.error('There was a problem fetching the data:', error);
            document.getElementById("video-container").innerHTML = "<p>Failed to load video.</p>";
        });
});