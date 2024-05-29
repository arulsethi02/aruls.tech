document.addEventListener("DOMContentLoaded", function() {
    var dogImage = document.getElementById("dog-image");
    var clickCounter = document.getElementById("click-counter");
    var yawn_count = 0;
    
    dogImage.addEventListener("click", function() {
        if (dogImage.src.includes("dog2.png")) {
            dogImage.src = "dog.png";
            yawn_count++;
            clickCounter.textContent = "Yawn Count: " + yawn_count;
        } else {
            dogImage.src = "dog2.png";
        }
    });
});
