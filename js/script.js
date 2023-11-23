let slideIndex = 1;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("anim");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "flex";

    setTimeout(showSlides, 5000);
}