var slideimages = [];






// counter to keep track of what image should be displayed in slides how
var counter = 0;
console.log(counter);

//calling functions
document.getElementById("back").onclick = function() {
    console.log("backward")
    back();
};
document.getElementById("forward").onclick = function() {
    console.log("forward")
    forward();
};


//object
function imageObj(src, id, alt, desc) {
    this.src = src;
    this.alt = alt;
    this.id = id;
    this.desc = desc;
}

//images to go in slide

// $.getJSON('stuf', function(result) {
//     for (var i = 0; i < result.images.length; i++) {
//         slideimages.push(new imageObj(result.images[i].src, result.images[i].id, result.images[i].alt, result.images[i].desc));
//     }
//     console.log(result)
//     console.log(slideimages)
    
//     populateGallery();
// });



slideimages[0] = new imageObj("image0.jpg", 0, "This is image 1", "drawing of boobs");
slideimages[1] = new imageObj("image1.jpg", 1, "This is image 2", "drawings of farts");
slideimages[2] = new imageObj("image2.jpg", 2, "This is image 3", "drawings of turds");
slideimages[3] = new imageObj("image1.jpg", 3, "This is image 4", "faewahe");
slideimages[4] = new imageObj("image2.jpg", 4, "This is image 5", "faewahe");
slideimages[5] = new imageObj("image0.jpg", 5, "This is image 6", "faewahe");
slideimages[6] = new imageObj("image2.jpg", 6, "This is image 7", "faewahe");
slideimages[7] = new imageObj("image1.jpg", 7, "This is image 8", "faewahe");

populateGallery()

//console.log(slideimages)
//function to pull info from img when clicked

// console.log("lookin at " + slideimages[2])
// console.log(slideimages)

function getInfo(img) {
    var name = img.src;
    var alt = img.alt;
    var id = img.id;
    var desc = slideimages[id].desc;

    console.log("the alt is " + alt)
    counter = id;

    //make overlay visible
    containerStyle.left = "0";

    document.getElementById("slide-img-container").innerHTML = "<img src='" + name + "'><h1>" + alt + "</h1> <p>" + desc + "</p><button id='close'>exit</button>"
    document.getElementById("close").onclick = function() {
        close()
    }
}

//to keep counter from surpassing the amount of images in slideImages array
var elementCount = slideimages.length;

//styling
var m = document.getElementById("slide-container");
var containerStyle = m.style;

//advance through slide show
function close() {

    containerStyle.left = "-90000px"
    console.log("working")
}

function forward() {
    counter++;
    console.log(counter);
    if (counter >= elementCount) {
        counter = 0;
    }
    // HTML
    document.getElementById("slide-img-container").innerHTML = " ";
    document.getElementById("slide-img-container").innerHTML = "<img src='" + slideimages[counter].src + "'><h1>" + slideimages[counter].alt + "</h1> <p>" + slideimages[counter].desc + "</p><button id='close'>exit</button>"
    document.getElementById("close").onclick = function() {
        close()
    }
}

function back() {
    counter--
    console.log(counter)
    if (counter < 0) {
        counter = elementCount - 1;
    }
    document.getElementById("slide-img-container").innerHTML = " ";
    document.getElementById("slide-img-container").innerHTML = "<img src='" + slideimages[counter].src + "'><h1>" + slideimages[counter].alt + "</h1> <p>" + slideimages[counter].desc + "</p><button id='close'>exit</button>"
    document.getElementById("close").onclick = function() {
        close()
    }
}

function populateGallery() {
    for (var i = 0; i < slideimages.length; i++) {
        $("#test-container").append("<img onClick='getInfo(this)' id = '" + slideimages[i].id + "'src='" + slideimages[i].src + "' alt='" + slideimages[i].alt + "' width='175px'>");
    }
}



// $("#slide-container").on("click", function() {
//     $("#slide-container").css("left","-9000px")
// });
