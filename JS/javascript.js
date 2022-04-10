// source of the code: https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp
// the javascript will call on the navigation from the html, in order to ensure it resizes for smaller screen devices.  
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}