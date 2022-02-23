
//animation 
const pieces = document.querySelectorAll("#img_pieces > img");
const data_text = document.querySelector("#data_text"); 

window.addEventListener('load', () => {
    animation();
})

function animation() {
    setTimeout(() => {
        pieces.forEach((piece) => {
            piece.classList.add("spaced");
        });
        data_text.textContent = "Data is broken into smaller pieces"
    }, 1000);

    setTimeout(() => {
        pieces.forEach(piece => {
            piece.style.transform = "translateX(100px)";
        });
        data_text.textContent = "These segments are sent to the recipient";
    }, 2000);

    setTimeout(() => {
        pieces.forEach(piece => {
            piece.style.transform = "translateX(0px)";
        })
    }, 5000);

    setTimeout(() => {
        pieces.forEach((piece) => {
            piece.classList.remove("spaced");
        });

        data_text.textContent = "Once arrived they are reasembled back to the original form";
    }, 6000);

    setTimeout(animation, 8000);
}
 

//Scroll button
const scroll_button = document.querySelector('#scroll_button');
scroll_button.addEventListener('click', () => window.scrollBy(0, 500))

// Scroll reveal 
ScrollReveal().reveal('.wave-container', {reset: true});
ScrollReveal().reveal('.full-container', {reset: true});
ScrollReveal().reveal('.reveal', {reset: true});