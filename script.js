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

slideimages[0] = new imageObj("images/ted_spotlight.jpg", 0, "Ted Talk Illustrations", "This is one of the illustrations I was comissioned to make for a Ted Talk by War Crimes Lawyer turned Comedian, Jess Salomon. This illustration shows her learning a valuable lesson for any comedian; stand in the spotlight ");
slideimages[1] = new imageObj("images/commission_comedy_poster.jpg", 1, "Comedy Abroad Poster", "A poster I was asked to do for one of the more popular stand-up comedy shows in Montreal. It was put together in photoshop, and the icons were made in Illustrator");
slideimages[2] = new imageObj("images/sbc_lifes_work.jpg", 2, "Shawn's Bad Comics - Life's Work", "A comic from my own web-based comic strip, 'Shawn's Bad Comics'. Each issue is drawn by hand and then cleaned up using Photoshop");
slideimages[3] = new imageObj("images/ted_feeling_awesome.jpg", 3, "Ted Talk Illustrations", "Another illustration for Jess Salomon's Ted Talk. This entry is meant to portray the feeling of joy/relief after having a string of good sets");
slideimages[4] = new imageObj("images/other_self_portrait.jpg", 4, "Self Portrait", "A simple self portrait of myself made with Photoshop.");
slideimages[5] = new imageObj("images/crit_plan_9.jpg", 5, "Criterion Collection - Plan 9 From Outer Space", "Anyone who loves film recognizes how great Criterion covers are. This is my own attempt at creating one for the campy cult classic, Plan 9 From Outer Space");
slideimages[6] = new imageObj("images/ted_2046.jpg", 6, "Ted Talk Illustration", "Here Jess imagines what doing comedy in the year 2036 might look like");
slideimages[7] = new imageObj("images/other_potemkin.jpg", 7, "Potemkin Silk Screen", "Illustration for a silk screening depicting one of the more famous scenes in film history from the film 'Battleship Potemkin");
slideimages[8] = new imageObj("images/other_new_world_color.jpg", 8, "A New World of Color", "A flyer I was commissioned to do for a panel discussion on color in film. Unfortunately the event didn't end up happening :(");
slideimages[9] = new imageObj("images/sbc_stupid_cats.jpg", 9, "Shawn's Bad Comics - Stupid Cats", "The very first edition of 'Shawn's Bad Comics'!");
slideimages[10] = new imageObj("http://placekitten.com/200/300", 10, "This is image 8", "faewahe");
slideimages[11] = new imageObj("images/ted_owl.jpg", 11, "Ted Talk Illustrations", "This illustration depicts Jess fully embracing her new night owl lifestyle that comes with working in stand up comedy.");
slideimages[12] = new imageObj("images/other_silhouette.jpg", 12, "Silhouette", "A quick photoshop illustration for a friend's personal project");
slideimages[13] = new imageObj("images/ted_theater_show.jpg", 13, "Ted Talk Illustrations", "An illustration of Jess at her first theater performance. Unfortunately she still couldn't get her parents quality seats.");
slideimages[14] = new imageObj("http://placekitten.com/250/200", 14, "This is image 8", "faewahe");
slideimages[15] = new imageObj("images/crit_bwr.jpg", 15, "Criterion Cover - Blue White Red Trilogy","Here is another attempt to design a Criterion style cover. This would be the outside of a box set for the Blue White Red trilogy.");
slideimages[16] = new imageObj("images/crit_blue_inlay.jpg", 16, "Criterion Cover - Blue", "This would be the inlay cover for 'Blue'");
slideimages[17] = new imageObj("images/crit_white_inlay.jpg", 17, "Criterion Cover - White", "This would be the inlay cover for 'White'");
slideimages[18] = new imageObj("images/crit_red_inlay.jpg", 18, "Criterion Cover - Red", "This would be the inlay cover for 'Red'");
slideimages[19] = new imageObj("http://placekitten.com/300/500", 19, "This is image 8", "faewahe");

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
        //forward();
        // input type="button" onclick="location.href='http://google.com';" value="Go to Google"
        
        location.href=name;
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