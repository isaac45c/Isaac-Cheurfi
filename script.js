// Dynamic Search Filtering
document.getElementById('searchBar').addEventListener('input', function () {
    let query = this.value.toLowerCase();
    let programmes = document.querySelectorAll('.category-card');

    programmes.forEach(function (programme) {
        let title = programme.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            programme.style.display = 'inline-block';
        } else {
            programme.style.display = 'none';
        }
    });
});

// Carousel Scrolling Logic
let carousel = document.getElementById('carousel');
setInterval(() => {
    carousel.scrollBy({ top: 0, left: 300, behavior: 'smooth' });
}, 3000);
