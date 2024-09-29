// Fetch API for YouTube Videos
function loadYouTubeVideos() {
    fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=VOTRE_CHANNEL_ID&maxResults=5&key=VOTRE_API_KEY')
        .then(response => response.json())
        .then(data => {
            const postsDiv = document.getElementById('posts');
            data.items.forEach(item => {
                const post = document.createElement('div');
                post.innerHTML = `<h3>${item.snippet.title}</h3><p>${item.snippet.description}</p><a href="https://youtube.com/watch?v=${item.id.videoId}" target="_blank">Voir la vidéo</a>`;
                postsDiv.appendChild(post);
            });
        });
}

// Fonction pour initialiser le script sur la page des posts
document.addEventListener('DOMContentLoaded', (event) => {
    if (document.getElementById('posts')) {
        loadYouTubeVideos();
    }
});
