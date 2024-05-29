document.addEventListener("DOMContentLoaded", function() {
    var dogImage = document.getElementById("dog-image");
    var clickCounter = document.getElementById("click-counter");
    var counter = 1;
    
    dogImage.addEventListener("click", function() {
        if (dogImage.src.includes("dog2.png")) {
            dogImage.src = "dog.png";
            counter++;
            clickCounter.textContent = "Click counter: " + counter;
        } else {
            dogImage.src = "dog2.png";
        }
    });
});
