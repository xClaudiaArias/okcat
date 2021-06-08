// let slides = document.querySelectorAll(".testimonies");



let slideIndex = 0;


const slideShow = () => {
    let slides = document.querySelectorAll(".testimonies");

    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }
    
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }  

    slides[slideIndex-1].style.display = "block"; 

    setTimeout(slideShow, 3000)
}

slideShow()


