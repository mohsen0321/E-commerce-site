var typed = new Typed (".multiple-text",{

    strings: [" Online Store","SHOP" ],
    typeSpeed:100,
    backSpeed:70,
    backDelay:1000,
    loop: true
    
});



const header = document.querySelector("header");

window.addEventListener ("scroll",function(){

    header.classList.toggle ("sticky",this.window.scrollY > 0)

});



// Get the div element
var myDiv = document.getElementById("mohsen");

// Hide the div element after 5 seconds
setTimeout(function() {
  myDiv.style.display = "none";
}, 6000)

