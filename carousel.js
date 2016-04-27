
    console.log("yqy!")


    // var slideimages = new Array() // create new array to preload images
    // slideimages[0] = new Image() // create new instance of image object
    // slideimages[0].src = "firstcar.gif" // set image object src property to an image's src, preloading that image in the process
    // slideimages[1] = new Image()
    // slideimages[1].src = "secondcar.gif"
    // slideimages[2] = new Image()
    // slideimages[2].src = "thirdcar.gif"

    document.getElementById("back").onclick = function() {
        back()
    }
    document.getElementById("forward").onclick = function() {
        forward()
    }
    document.getElementsByClassName("image").onclick = function() {
        imgSelect()
    };

    document.getElementsByClassName("image-container").src = "image1.jpg"

    function imageObj(src, id, alt, desc) {
        this.src = src;
        this.alt = alt;
        this.id = id;
        this.desc = desc;
    }

    var slideimages = [];
    slideimages[0] = new imageObj("image0.jpg", 0, "This is an image of", "drawing of boobs");
    //slideimages[0].src = "image0.jpg"
    slideimages[1] = new imageObj("image1.jpg", 1, "This is an image of 2", "drawings of farts");
    slideimages[2] = new imageObj("image2.jpg", 2, "Wowowowow", "drawings of turds");
    

    console.log(slideimages)


    function getInfo(img) {

        var name = img.src;
        var alt = img.alt;
        var id = img.id;
        var desc = img.desc;
        console.log(name);
        console.log(alt);
        console.log(id);
        console.log(desc)

        counter = id;
        console.log(counter)
    }

    //document.getElementById("img-container").innerHTML = "<img onClick='getInfo(this)' src='" +  slideimages[2].src + "' alt= ' " + slideimages[2].alt + " '>";


    //for loop that pushes all existing objects into array then call it going through array[#] using the step counting function



    var counter = 0

    console.log(counter)

    document.getElementById("img-container").innerHTML = "<img onClick='getInfo(this)' id =' " + slideimages[counter].id + " ' src='" + slideimages[counter].src + "' alt= ' " + slideimages[counter].alt + " '>";

    var elementCount = slideimages.length;

    console.log(elementCount)

    // function imgSelect() {
    //     counter = document.getElementById
    // }

    function forward() {
        counter++
        console.log(counter)
        if (counter >= elementCount) {
            counter = 0
        }
        document.getElementById("img-container").innerHTML = " ";
        document.getElementById("img-container").innerHTML = "<img onClick='getInfo(this)' src='" + slideimages[counter].src + "' alt= ' " + slideimages[counter].alt + " '>";
    }

    function back() {
        counter--
        console.log(counter)
        if (counter <= 0) {
            counter = elementCount + 1
        }
        document.getElementById("img-container").innerHTML = " ";
        document.getElementById("img-container").innerHTML = "<img onClick='getInfo(this)' src='" + slideimages[counter].src + "' alt= ' " + slideimages[counter].alt + " '>";
    }


    for (var i = 0; i < slideimages.length; i++) {
        //document.getElementById("test-container").innerHTML = "<img onClick='getInfo(this)' src='" +  slideimages[i].src + "' alt= ' " + slideimages[i].alt + " ' width='100px'>";
        $("#test-container").append("<img onClick='getInfo(this)' src='" + slideimages[i].src + "' alt= ' " + slideimages[i].alt + " ' width='100px'>")
        // var e = document.createElement('img');
        // var t = document.createTextNode("onClick='getInfo(this)' src='" + slideimages[i].src + "' alt= ' " + slideimages[i].alt + " ' width='100px'");
        //var t = document.createTextNode("fafdsafdsfad fdsafewaf");
        // e.appendChild(t);
        // document.getElementById("test-container").appendChild(e)


    }

    // var e = document.createElement('img');
    // var t = "onClick='getInfo(this)' src='" +  slideimages[i].src + "' alt= ' " + slideimages[i].alt + " ' width='100px'";

    // e.appendChild(t);
    // document.getElementById("test-container").appendChild(e)


    // var para = document.createElement("P");
    //     var t = document.createTextNode("This is a paragraph.");
    //     para.appendChild(t);
    //     document.getElementById("myDIV").appendChild(para);
