// Numerik Animation
let valueDisplays = document.querySelectorAll(".num");
let valueDisplays1 = document.querySelectorAll(".num1");
let interval = 5000;

valueDisplays1.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function (){
        startValue += 4;
        valueDisplays.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
}); 

valueDisplays.forEach((valueDisplays) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function (){
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
}); 



// Scroll Reveal
ScrollReveal({
    reset: true,
    distance:  '60px',
    duration : 2500,
    delay :100
});


// scroll target
// Home | home
ScrollReveal().reveal('.home-text h1', {delay:300, origin:'bottom'});
ScrollReveal().reveal('.home-text h2', {delay:500, origin:'bottom'});
ScrollReveal().reveal('.home a', {delay:100, origin:'bottom'});

// Home | knowus
ScrollReveal().reveal('.knowus-command h1', {delay:100, distance:'10px', origin:'left'});
ScrollReveal().reveal('.knowus-command p', {delay:100, distance:'10px', origin:'right'});

ScrollReveal().reveal('.knowus-content img', {delay:100, distance:'20px', origin:'bottom'});
ScrollReveal().reveal('.knowus-content .text-content h2', {delay:200, distance:'10px', origin:'right'});
ScrollReveal().reveal('.knowus-content .text-content h1', {delay:50, distance:'10px', origin:'left'});
ScrollReveal().reveal('.knowus-content .text-content hr', {delay:50, distance:'10px', origin:'bottom'});
ScrollReveal().reveal('.knowus-content .text-content p', {delay:50, distance:'10px', origin:'right'});
ScrollReveal().reveal('.knowus-content .knowus-isi-content a', {delay:50, distance:'10px', origin:'top'});

// Home | Distribution
ScrollReveal().reveal('.distribution-title h2', {delay:100, distance:'20px', origin:'bottom'});
ScrollReveal().reveal('.distribution-title h1', {delay:100, distance:'20px', origin:'right'});
ScrollReveal().reveal('.distribution-content img', {delay:100, distance:'20px', origin:'left'});

ScrollReveal().reveal('.data-1', {delay:100, distance:'20px', origin:'bottom'});
ScrollReveal().reveal('.data-2', {delay:100, distance:'20px', origin:'top'});
ScrollReveal().reveal('.data-3', {delay:100, distance:'20px', origin:'bottom'});

// HOME | Our Product
ScrollReveal().reveal('.ourproduct-title h2', {delay:100, distance:'20px', origin:'bottom'});
ScrollReveal().reveal('.ourproduct-title h1', {delay:100, distance:'20px', origin:'right'});

ScrollReveal().reveal('.product-content img', {delay:100, distance:'20px', origin:'left'});
ScrollReveal().reveal('.produk-des h2', {delay:100, distance:'20px', origin:'top'});
ScrollReveal().reveal('.produk-des p', {delay:100, distance:'20px', origin:'bottom'});
ScrollReveal().reveal('.produk-des a', {delay:100, distance:'20px', origin:'right'});

// HOME  | Process
ScrollReveal().reveal('.process-title h2', {delay:100, distance:'20px', origin:'bottom'});
ScrollReveal().reveal('.process-title h1', {delay:100, distance:'20px', origin:'left'});

ScrollReveal().reveal('.as-1', {delay:100, distance:'20px', origin:'right'});
ScrollReveal().reveal('.no1', {delay:100, distance:'20px', origin:'right'});

ScrollReveal().reveal('.ab-2', {delay:100, distance:'20px', origin:'left'});
ScrollReveal().reveal('.no2', {delay:100, distance:'20px', origin:'left'});

ScrollReveal().reveal('.as-3', {delay:100, distance:'20px', origin:'right'});
ScrollReveal().reveal('.no3', {delay:100, distance:'20px', origin:'right'});

ScrollReveal().reveal('.ab-4', {delay:100, distance:'20px', origin:'left'});
ScrollReveal().reveal('.no4', {delay:100, distance:'20px', origin:'left'});

ScrollReveal().reveal('.as-5', {delay:100, distance:'20px', origin:'right'});
ScrollReveal().reveal('.no5', {delay:100, distance:'20px', origin:'right'});

ScrollReveal().reveal('.ab-6', {delay:100, distance:'20px', origin:'left'});
ScrollReveal().reveal('.no6', {delay:100, distance:'20px', origin:'left'});

ScrollReveal().reveal('.as-7', {delay:100, distance:'20px', origin:'right'});
ScrollReveal().reveal('.no7', {delay:100, distance:'20px', origin:'right'});

ScrollReveal().reveal('.ab-8', {delay:100, distance:'20px', origin:'left'});
ScrollReveal().reveal('.no8', {delay:100, distance:'20px', origin:'left'});

ScrollReveal().reveal('.as-9', {delay:100, distance:'20px', origin:'right'});
ScrollReveal().reveal('.no9', {delay:100, distance:'20px', origin:'right'});


// Footer

ScrollReveal().reveal('.footer-des', {delay:100, distance:'20px', origin:'bottom'});
ScrollReveal().reveal('.footer-nav', {delay:100, distance:'20px', origin:'top'});
ScrollReveal().reveal('.footer-contact', {delay:100, distance:'20px', origin:'bottom'});
