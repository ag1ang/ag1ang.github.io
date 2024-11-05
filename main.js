onload = () =>{
        document.body.classList.remove("container");
};
const photos = document.querySelectorAll('.photo-container .photo');
let currentPhoto = 0;

function showNextPhoto() {
    photos[currentPhoto].classList.remove('active'); // Hide current photo
    currentPhoto = (currentPhoto + 1) % photos.length; // Move to next photo
    photos[currentPhoto].classList.add('active'); // Show next photo
}

setInterval(showNextPhoto, 3000); // Change every 3 seconds
