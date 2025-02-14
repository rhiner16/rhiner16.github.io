document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

function showSlides(n, slideshowId) {
    var i;
    var slides = document.querySelectorAll("#" + slideshowId + " .mySlides");
    if (n > slides.length) { slideIndexes[slideshowId] = 1 }
    if (n < 1) { slideIndexes[slideshowId] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexes[slideshowId] - 1].style.display = "block";
}

// Object to keep track of each slideshow's index
var slideIndexes = {};

document.addEventListener("DOMContentLoaded", function() {
    // Initialize slideIndexes and show the first slide for each slideshow
    var slideshows = document.getElementsByClassName("slideshow-container");
    for (var i = 0; i < slideshows.length; i++) {
        var slideshowId = slideshows[i].getAttribute("id");
        slideIndexes[slideshowId] = 1;
        showSlides(1, slideshowId);
    }
});

function plusSlides(n, slideshowId) {
    showSlides(slideIndexes[slideshowId] += n, slideshowId);
}

document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });
