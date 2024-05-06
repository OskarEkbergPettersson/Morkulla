let slideIndex = 1;

function addSlideIndex(n){
    slideIndex += n;
    showSlides(slideIndex);
}

function showSlides(n){
    let slides = document.getElementsByClassName('sprintSlide');
    let newIndex = n;
    
    if(n > slides.length) newIndex = 1;
    if(n < 1) newIndex = slides.length;

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = ((i + 1) == newIndex) ? 'inline' : 'none';
    }

    slideIndex = newIndex;
}

showSlides(slideIndex);