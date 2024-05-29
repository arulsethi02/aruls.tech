
document.addEventListener("DOMContentLoaded", function() {
    var dogImage = document.getElementById("dog-image");
    var clickCounter = document.getElementById("click-counter");
    var counter = 0;
    var clickCount = 0;
    
    dogImage.addEventListener("click", function() {
        if (dogImage.src.includes("dog.png")) {
            dogImage.src = "dog2.png";
        } else {
            dogImage.src = "dog.png";
        }

        clickCount++;
        if (clickCount % 2 === 0) {
            counter++;
            clickCounter.textContent = "Click counter: " + counter;
        }
    });
});

