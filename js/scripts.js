// let slides = document.querySelectorAll(".testimonies")

function sliderTimer () {
    let slideIndex = 1;
    let currentSlide = slideIndex - 1;

    slides.forEach(slide => {
        slide.style.display = 'none';
    })

    setTimeout(function(){
        if (slideIndex > slides.length){
            slideIndex = 1;
        }
        if (slideIndex < 1){
            slideIndex = slides.length
        }
        slideIndex += 1;
        slides[slideIndex].style.display = "block";
        console.log(slideIndex, 'slideIndex')
    }, 3000)
}

sliderTimer()
