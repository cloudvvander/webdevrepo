var images = ['mountain.jpg', 'desert.jpg', 'city.jpg', 'beach.jpg', 'cake.jpg'];
var currentIndex = 0;

var image = document.querySelector('.image-container img');

function showImage(index) {
    image.src = images[index];
}

document.querySelector('.prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

document.querySelector('.nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
showImage(currentIndex);

setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 5000);
