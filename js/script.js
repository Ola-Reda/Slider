var slider = document.querySelector(".slider")
var closeBtn = document.querySelector("#closeBtn")
var allImages = Array.from(document.querySelectorAll("img"))
var sliderItem = document.querySelector(".slider-item")
var pevBtn = document.querySelector("#leftBtn")
var nextBtn = document.querySelector("#rightBtn")

var currantIndex = 0
for (var i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("click", function(e) {
        currantIndex = allImages.indexOf(e.target)
        console.log(currantIndex)
        var targetImage = e.target
        var imageSrc = targetImage.getAttribute("src")
        sliderItem.style.backgroundImage = `url(${imageSrc})`
        slider.classList.replace("d-none", "d-flex")
    })
}

closeBtn.addEventListener("click", function() {
    closeImage()
})
function closeImage() {
    slider.classList.replace("d-flex", "d-none")
}

nextBtn.addEventListener("click", function(){
   nextImage()
})
function nextImage() {
    currantIndex++
    if(currantIndex == allImages.length) {
        currantIndex = 0
    }
    var imageSrc = allImages[currantIndex].getAttribute("src")
        sliderItem.style.backgroundImage = `url(${imageSrc})`
}



pevBtn.addEventListener("click", function(){
    pevImage()
})
function pevImage() {
    currantIndex--
    if(currantIndex < 0 ) {
        currantIndex = allImages.length - 1
    }
    var imageSrc = allImages[currantIndex].getAttribute("src")
        sliderItem.style.backgroundImage = `url(${imageSrc})`
}


document.addEventListener("keyup", function(e) {
    if(e.key == "Escape") {
        closeImage()
    }else if(e.key== "ArrowRight"){
        nextImage()
    }else if(e.key== "ArrowLeft") {
        pevImage()
    }
})


slider.addEventListener("click", function(e){
    if(e.target == slider) {
        closeImage()
    }
})











// var myObject = new XMLHttpRequest()
// myObject.open("GET","https://forkify-api.jonas.io/api/v2/recipes?search=pizza")
// myObject.send()
// // var result = myObject.response
// // console.log(result)

// myObject.addEventListener("readystatechange", function(){
//     if(myObject.readyState == 4) {
//         console.log(JSON.parse(myObject.response).data.recipes)
//     }
// })