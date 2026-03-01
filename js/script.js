var slider = document.querySelector(".slider")
var closeBtn = document.querySelector("#closeBtn")
var allImages = document.querySelectorAll(".box img")
for (var i = 0; i < allImages.length; i++) {
    console.log(allImages[i])
    allImages[i].addEventListener("click", function() {
        slider.classList.replace("d-none", "d-flex")
    })
}

closeBtn.addEventListener("click", function() {
    slider.classList.replace("d-flex", "d-none")
})
