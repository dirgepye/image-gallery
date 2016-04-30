console.log("yqy!")


// counter to keep track of what image should be displayed in slides how
var counter = 0
console.log(counter)

//calling functions
document.getElementById("back").onclick = function() {
    back()
}
document.getElementById("forward").onclick = function() {
    forward()
}


//object
function imageObj(src, id, alt, desc) {
    this.src = src;
    this.alt = alt;
    this.id = id;
    this.desc = desc;
}

//images to go in slide
var slideimages = [];
slideimages[0] = new imageObj("image0.jpg", 0, "This is an image of", "drawing of boobs");
slideimages[1] = new imageObj("image1.jpg", 1, "This is an image of 2", "drawings of farts");
slideimages[2] = new imageObj("image2.jpg", 2, "Wowowowow", "drawings of turds");
slideimages[3] = new imageObj("image1.jpg", 3, "fdsaha", "faewahe");
slideimages[4] = new imageObj("image2.jpg", 4, "fdsaha", "faewahe");
slideimages[5] = new imageObj("image0.jpg", 5, "fdsaha", "faewahe");
slideimages[6] = new imageObj("image2.jpg", 6, "fdsaha", "faewahe");
slideimages[7] = new imageObj("image1.jpg", 7, "fdsaha", "faewahe");
//function to pull info from img when clicked
function getInfo(img) {
    var name = img.src;
    var alt = img.alt;
    var id = img.id;
    var desc = slideimages[id].desc;

    console.log ("the alt is " + alt)
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

//var c = document.getElementById("load-test-container").childNodes;

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


for (var i = 0; i < slideimages.length; i++) {
    $("#test-container").append("<img onClick='getInfo(this)' id = '" + slideimages[i].id + "'src='" + slideimages[i].src + "' alt='" + slideimages[i].alt + "' width='175px'>");
}

// $("#slide-container").on("click", function() {
//     $("#slide-container").css("left","-9000px")
// });

