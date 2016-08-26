var slideimages = [];

// counter to keep track of what image should be displayed in slides how
var counter = 0;
console.log(counter);

//common elements

function populateGallery() {
    for (var i = 0; i < slideimages.length; i++) {
        $("#img-container").append("<img onClick='getInfo(this)' id = '" + slideimages[i].id + "'src='" + slideimages[i].src + "' alt='" + slideimages[i].alt + "' width='175px'>");
    }
}

function closePage() {
    containerStyle.display = "none"
    console.log("working")
}


var slideImg = document.getElementById("slide-img"),
slideImgCont = document.getElementById("slide-img-container"),
slideImgInfo = document.getElementById("slide-img-info")
//object

function imageObj(src, id, alt, desc) {
    this.src = src;
    this.alt = alt;
    this.id = id;
    this.desc = desc;
}

//img objects

slideimages[0] = new imageObj("image0.jpg", 0, "This is image 1", "drawing of boobs");
slideimages[1] = new imageObj("image1.jpg", 1, "This is image 2", "drawings of farts");
slideimages[2] = new imageObj("image2.jpg", 2, "This is image 3", "drawings of turds");
slideimages[3] = new imageObj("image1.jpg", 3, "This is image 4", "faewahe");
slideimages[4] = new imageObj("image2.jpg", 4, "This is image 5", "faewahe");
slideimages[5] = new imageObj("image0.jpg", 5, "This is image 6", "faewahe");
slideimages[6] = new imageObj("image2.jpg", 6, "This is image 7", "faewahe");
slideimages[7] = new imageObj("image1.jpg", 7, "This is image 8", "faewahe");
slideimages[8] = new imageObj("image2.jpg", 8, "This is image 8", "faewahe");
slideimages[9] = new imageObj("image1.jpg", 9, "This is image 8", "faewahe");
slideimages[10] = new imageObj("image0.jpg", 10, "This is image 8", "faewahe");
slideimages[11] = new imageObj("image2.jpg", 11, "This is image 8", "faewahe");
slideimages[12] = new imageObj("image0.jpg", 12, "This is image 8", "faewahe");
slideimages[13] = new imageObj("image1.jpg", 13, "This is image 8", "faewahe");
slideimages[14] = new imageObj("image0.jpg", 14, "This is image 8", "faewahe");
slideimages[15] = new imageObj("image2.jpg", 15, "This is image 8", "faewahe");
slideimages[16] = new imageObj("image1.jpg", 16, "This is image 8", "faewahe");

populateGallery();


//BUILD 

document.getElementById("back").onclick = function() {
    console.log("backward");
    back();
};
document.getElementById("forward").onclick = function() {
    console.log("forward");
    forward();
};


//to keep counter from surpassing the amount of images in slideImages array
var elementCount = slideimages.length;


//styling
var m = document.getElementById("overlay");
var containerStyle = m.style;

function getInfo(img) {
    var name = img.src;
    var alt = img.alt;
    var id = img.id;
    var desc = slideimages[id].desc;

    //console.log("the alt is " + alt)
    counter = id;

    //make overlay visible
    containerStyle.display = "block";
    
    slideImg.innerHTML = "<img src='" + name + "'>";
    slideImgInfo.innerHTML = "<h1>" + alt + "</h1> <p>" + desc + "</p>";
    document.getElementById("slide-container").onclick = function(){
        forward();
    };
}

//advance through slide show
function forward(e) {
    //stop bubbling
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();    
    
    //present info
    counter++;
    console.log(counter);
    if (counter >= elementCount) {
        counter = 0;
    }
    // HTML
    slideImg.innerHTML = " ";
    slideImg.innerHTML = "<img src='" + slideimages[counter].src + "'>";
    slideImgInfo.innerHTML = " ";
    slideImgInfo.innerHTML = "<h1>" + slideimages[counter].alt + "</h1> <p>" + slideimages[counter].desc + "</p>";

}

function back(e) {
    //stop bubbling
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation(); 
    
    //display image + info
    counter--;
    console.log(counter);
    if (counter < 0) {
        counter = elementCount - 1;
    }
    slideImg.innerHTML = " ";
    slideImg.innerHTML = "<img src='" + slideimages[counter].src + "'>";
    slideImgInfo.innerHTML = " ";
    slideImgInfo.innerHTML = "<h1>" + slideimages[counter].alt + "</h1> <p>" + slideimages[counter].desc + "</p>";
    
}