let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "flex";

    setTimeout(showSlides, 5000);
    console.log(slideIndex);
}


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let interest = document.querySelector('select[name="interest"]').value;

    if (!name) {
        alert('Please enter your name.');
        return false;
    }

    if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (interest == '0') {
        alert('Please select an option.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
});

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
