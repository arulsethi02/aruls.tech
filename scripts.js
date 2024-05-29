document.addEventListener("DOMContentLoaded", function() {
    var dogImage = document.getElementById("dog-image");
    
    dogImage.addEventListener("click", function() {
        if (dogImage.src.includes("dog.png")) {
            dogImage.src = "dog2.png";
        } else {
            dogImage.src = "dog.png";
        }
    });
});
