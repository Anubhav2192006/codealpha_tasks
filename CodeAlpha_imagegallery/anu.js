let currentIndex = 0;

const images = document.querySelectorAll(".gallery-item");

function openLightbox(img){

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = img.src;

    currentIndex = Array.from(images).indexOf(img);
}

function closeLightbox(){

    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction){

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src =
        images[currentIndex].src;
}

function filterImages(category){

    images.forEach(image => {

        if(category === "all"){
            image.style.display = "block";
        }
        else if(image.classList.contains(category)){
            image.style.display = "block";
        }
        else{
            image.style.display = "none";
        }
    });
}

// Close lightbox when clicking outside image
document.getElementById("lightbox").addEventListener("click", function(e){

    if(e.target.id === "lightbox"){
        closeLightbox();
    }
});

// Keyboard support
document.addEventListener("keydown", function(e){

    if(document.getElementById("lightbox").style.display === "flex"){

        if(e.key === "ArrowRight"){
            changeImage(1);
        }

        if(e.key === "ArrowLeft"){
            changeImage(-1);
        }

        if(e.key === "Escape"){
            closeLightbox();
        }
    }
});