$(document).ready(function() {

    var cursor = $(".cursor");
    var src = $("#banner").attr("src");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });

    $(".link")
        .mouseenter(function() {
            cursor.css({
                transform: "scale(10.2)",   
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)"

            });
        });

    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(.2)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });
});

let updateScrollPos = function (e) {
    $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}

class Button {
    constructor(HTMLButtonElement) {
        this.button = HTMLButtonElement;
        this.width = this.button.offsetWidth;
        this.height = this.button.offsetHeight;
        this.left = this.button.offsetLeft;
        this.top = this.button.offsetTop;
        this.x = 0;
        this.y = 0;
        this.cursorX = 0;
        this.cursorY = 0;
        this.magneticPullX = 0.4;
        this.magneticPullY = 0.9;
        this.isHovering = false;
        this.magnetise();
        this.createRipple();
    }

    onEnter = () => {
        gsap.to(this.button, 0.4, {
            x: this.x * this.magneticPullX,
            y: this.y * this.magneticPullY,
            ease: Power4.easeOut
        });
    };

    onLeave = () => {
        gsap.to(this.button, 0.7, {
            x: 0,
            y: 0,
            ease: Elastic.easeOut.config(1.1, 0.5)
        });
    };

    // magnetise = () => {
    //     document.querySelector("body").addEventListener("mousemove", (e) => {
    //         this.cursorX = e.clientX;
    //         this.cursorY = e.clientY;

    //         const center = {
    //             x: this.left + this.width / 2,
    //             y: this.top + this.height / 2
    //         };

    //         this.x = this.cursorX - center.x;
    //         this.y = this.cursorY - center.y;

    //         const distance = Math.sqrt(this.x * this.x + this.y * this.y);
    //         const hoverArea = this.isHovering ? 0.6 : 0.5;

    //         if (distance < this.width * hoverArea) {
    //             if (!this.isHovering) {
    //                 this.isHovering = true;
    //             }
    //             this.onEnter();
    //         } else {
    //             if (this.isHovering) {
    //                 this.onLeave();
    //                 this.isHovering = false;
    //             }
    //         }
    //     });
    // };

    createRipple = () => {
        this.button.addEventListener("click", () => {
            const circle = document.createElement("span");
            const diameter = Math.max(
                this.button.clientWidth,
                this.button.clientHeight
            );
            const radius = diameter / 2;

            const offsetLeft = this.left + this.x * this.magneticPullX;
            const offsetTop = this.top + this.y * this.magneticPullY;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${this.cursorX - offsetLeft - radius}px`;
            circle.style.top = `${this.cursorY - offsetTop - radius}px`;
            circle.classList.add("ripple");

            const ripple = this.button.getElementsByClassName("ripple")[0];

            if (ripple) {
                ripple.remove();
                
                
            }

            this.button.appendChild(circle);
        });
    };
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    new Button(button);
}



// video in a text js file 

function setVideo(){
     document.getElementById("banner").src="istockphoto-454669794-640_adpp_is.mp4";
   }
  
   function noVideo(){
     document.getElementById("banner").src="";
   }
function setVideo1(){
     document.getElementById("banner").src="istockphoto-454669794-640_adpp_is.mp4";
   }
  
   function noVideo1(){
     document.getElementById("banner").src="";
   }
function setVideo2(){
     document.getElementById("banner").src="istockphoto-454669794-640_adpp_is.mp4";
   }
  
   function noVideo2(){
     document.getElementById("banner").src="";
   }
// function setVideo(){
//      document.getElementById("banner").src="istockphoto-454669794-640_adpp_is.mp4";
//    }
  
//    function noVideo(){
//      document.getElementById("banner").src="";
//    }


// noVideo = () => {
//     document.getElementById("banner").src=""
//     var element = document.getElementByIdistockphoto-454669794-640_adpp_is.mp4("banner");
//     element.classList.add("banner-visible");
//   }