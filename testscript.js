//TO CONSIDER --> and 'open dashboard' button



//TRY SCRIPT THAT WILL REMOVE CLASS WHEN .cover HAS SCROLLED PAST A CERTAIN POINT



$(document).ready(function() {
    $(".start").click(function() {
        if ($(".dash").css("width") >= "100vw") {
            $(".dash").animate({
                width: "35vw"
            });
            $(".display").animate({
                width: "65vw"
            })
            //$(".display").html("<p>Please make a selection in the dashboard to your left :^)</p>");
            $(".display").promise().done(function() {
                $(".cover").animate({
                    top: "-800px"
                }, 800)
                $(".style").find("p").fadeOut()
                $(".style").promise().done(function() {
                    $(".style").animate({
                        width: "0px",
                        height: "0px",
                        padding: "0",
                    }),

                        $(".style").fadeOut();
                    $(".style").promise().done(function() {

                        $(".buttons").css({
                            "visibility": "visible"
                        })
                        $("div").removeClass("start");
                    });

                });
            });
        }
        else {
            // $(".dash").animate({width: "50vw"});
            // $(".display").animate({width: "50vw"});
            console.log("error");
        }
    });

    // $(".blue").click(function() {
    //     if ($(".cover").css("top") == "-800px") {
    //         console.log("top is -800px");
    //         // $(".display").css("background-color","blue");
    //         blue();
    //     }
    // });

    // $(".pink").click(function() {
    //     if ($(".cover").css("top") == "-800px") {
    //         console.log("top is -800px");
    //         //$(".display").css("background-color","blue");
    //         pink();
    //     }
    // });


    // function blue() {
    //     console.log("blue")
    //     $(".cover").animate({
    //         "top": "0px"
    //     }, 800);
    //     $('.cover').promise().done(function() {
    //         $('.display').css("background-color", "blue");
    //         $('.display').promise().done(function() {
    //         $(".cover").animate({
    //                 "top": "-800px"
    //             }, 800)
    //         })
    //     })
    // }

    // function pink() {
    //     console.log("pink");
    //     $(".cover").animate({
    //         "top": "0px"
    //     });
    //     $('.display').promise().done(function() {
    //         $('.display').css("background-color", "pink");
    //         $('.display').promise().done(function() {
    //             $(".cover").animate({
    //                 "top": "-800px"
    //             });
    //         })
    //     })
    // }


    // $(".blue").click(function() {
    //     if ($(".cover").css("top") == "-800px") {
    //         console.log("top is -800px");
    //         // $(".display").css("background-color","blue");
    //         blue();
    //     }
    // });

    // $(".pink").click(function() {
    //     if ($(".cover").css("top") == "-800px") {
    //         console.log("top is -800px");
    //         // $(".display").css("background-color","blue");
    //         pink();
    //     }
    // });

    function coverBlue() {
        $('.cover').animate({
            "top": "0px"
        });
        $(".cover").promise().done(function() {
            $('.display').css("background-color", "blue");

            $('.display-container').html("");
            $('.display-container').append(formHtml);
            $('.display-container:first-child').addClass('form-a__basic')
            $('.display-container').promise().done(function() {
                $('.cover').animate({
                    "top": "-800px"
                }, 1000);
            })
        });
    }

    $(".blue").on("click", function() {
        // if ($('div').hasClass('form-a__basic')) {
        //     console.log("has class")
        //     setTimeout(function() {
        //         $('div').removeClass('form-a__basic')
        //     }, 1000);
        coverBlue();
        // }
        // else {
        //     coverBlue();
        //     }
    });

    $(".pink").on("click", function() {
        if ($('.display-container:first-child').hasClass('form-a__basic')) {
            $('.form-a__basic').removeClass('form-a__basic');
        }
        $('.cover').animate({
            "top": "0px"
        });
        $(".cover").promise().done(function() {
            $('.display').css("background-color", "pink");
            $('.display-container').html("");
            $('.display-container').append(formHtmlB);
            $('.display-container').append(formHtmlB);
            $('.display-container').append(formHtmlB);
            $('.display-container').promise().done(function() {
                $('.cover').animate({
                    "top": "-800px"
                }, 1000);
            })
        });
    });

    $(".black").on("click", function() {

        $('.cover').animate({
            "top": "0px"
        });
        $(".cover").promise().done(function() {
            $('.display').css("background-color", "black");
            $('.display-container').html("");
            $('.display-container').append(formHtml);
            $('.display-container').promise().done(function() {
                $('.cover').animate({
                    "top": "-800px"
                }, 1000);
            })
        });
    });

    $(".brown").on("click", function() {

        $('.cover').animate({
            "top": "0px"
        });
        $(".cover").promise().done(function() {
            $('.display').css("background-color", "brown");
            $('.display-container').html("");
            $('.display-container').append(formHtml);
            //$('.display-container').addClass('form-a__basic')
            //$('.display-container').promise().done(function() {
            $('.cover').animate({
                "top": "-800px"
            }, 1000);
            //})
        });
    });

    var formHtml = `
                <div>
                <form>
                <h4>Climb Aboard!</h4>
                <input type="text" id="login-username" placeholder="first name" onfocus="this.placeholder=''" onblur="this.placeholder = 'first name'" class="form-a__field">
                <input type="text" id="login-username" placeholder="last name" onfocus="this.placeholder=''" onblur="this.placeholder = 'last name'" class="form-a__field">
                <input type="text" id="login-username" placeholder="username" onfocus="this.placeholder=''" onblur="this.placeholder = 'username'" class="form-a__field">
                <input type="text" id="login-password" placeholder="password" onfocus="this.placeholder=''" onblur="this.placeholder = 'password'" class="form-a__field">
                <input type="text" id="login-username" placeholder="confirm password" onfocus="this.placeholder=''" onblur="this.placeholder = 'confirm password'" class="form-a__field">

                <div>
                    <label>
                        <input type="checkbox" name="remember_me" id="remember_me2" value="true" class="remember_me"> By checking this box I agree to the <a href="#">Terms and Agreements</a>
                    </label>
                </div>

                <input type="submit" id="login-submit" value="Sign Up!" class="form-a__submit">

            </form>
            <p>Already have an account? <a href="#">Log in now!</a></p>
        </div>
        <div class="style-buttons">
            <div class="style-one btn btn-default">style one</div>
            <div class="style-two btn btn-default">style two</div>
            <div class="style-three btn btn-default">style three</div>
        </div>
    </div>
    </div>`

    var formHtmlB = `
                <div class="form-b__basic">
                <form>
                <h4>Climb Aboard!</h4>
                <input type="text" id="login-username" placeholder="first name" onfocus="this.placeholder=''" onblur="this.placeholder = 'first name'" class="form-a__field">
                <input type="text" id="login-username" placeholder="last name" onfocus="this.placeholder=''" onblur="this.placeholder = 'last name'" class="form-a__field">
                <input type="text" id="login-username" placeholder="username" onfocus="this.placeholder=''" onblur="this.placeholder = 'username'" class="form-a__field">
                <input type="text" id="login-password" placeholder="password" onfocus="this.placeholder=''" onblur="this.placeholder = 'password'" class="form-a__field">
                <input type="text" id="login-username" placeholder="confirm password" onfocus="this.placeholder=''" onblur="this.placeholder = 'confirm password'" class="form-a__field">

                <div>
                    <label>
                        <input type="checkbox" name="remember_me" id="remember_me2" value="true" class="remember_me"> By checking this box I agree to the <a href="#">Terms and Agreements</a>
                    </label>
                </div>

                <input type="submit" id="login-submit" value="Sign Up!" class="form-a__submit">

            </form>
            <p>Already have an account? <a href="#">Log in now!</a></p>
        </div>
        <div class="style-buttons">
            <div class="style-one btn btn-default">style one</div>
            <div class="style-two btn btn-default">style two</div>
            <div class="style-three btn btn-default">style three</div>
        </div>
    </div>
    </div>`

});