console.log("yqy!")


// var slideimages = new Array() // create new array to preload images
// slideimages[0] = new Image() // create new instance of image object
// slideimages[0].src = "firstcar.gif" // set image object src property to an image's src, preloading that image in the process
// slideimages[1] = new Image()
// slideimages[1].src = "secondcar.gif"
// slideimages[2] = new Image()
// slideimages[2].src = "thirdcar.gif"

document.getElementById("back").onclick = function() {back()}
document.getElementById("forward").onclick = function() {forward()}
document.getElementsByClassName("image").onclick = function() {imgSelect()};

document.getElementsByClassName("image-container").src = "image1.jpg"


var slideimages = new Array();
slideimages[0] = new Image();
slideimages[0].src = "image0.jpg"
slideimages[1] = new Image();
slideimages[1].src = "image1.jpg"
slideimages[2] = new Image();
slideimages[2].src = "image2.jpg"

var counter = 0

var elementCount = document.getElementsByClassName("image").length;

console.log(elementCount)

function imgSelect() {
    counter = document.getElementById
}

function forward() {
    counter ++
    console.log(counter)
    if (counter >= elementCount) {
        counter = 0
    }
}

function back() {
    counter --
    console.log(counter)
    if (counter <= 0) {
        counter = elementCount + 1
    }
}