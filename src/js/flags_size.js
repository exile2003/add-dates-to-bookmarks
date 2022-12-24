window.onload = function() {

    let currentWidth = document.querySelector('#output').contentWindow.document.body.scrollWidth;
    let currentHeight = "";

    if ( +currentWidth < 900 ) currentHeight = "396px";
    else if ( +currentWidth < 1200 ) currentHeight = "333px";
    else currentHeight = "300px";

    document.querySelector('#output').style.height = currentHeight;

    setSize();
}

window.addEventListener("load", setSize);
window.addEventListener("resize", setSize);

//The function setSize keeps the size of the element with the class name "container", that contains the flag images.
// And also sets height of the element with id "output" dependent on the size of viewport, that contains the text.

function setSize() {
    document.getElementsByClassName("container")[0].style.height =  10*window.innerWidth/window.outerWidth + "mm";

    let elementBody = document.querySelector('#output').contentWindow.document.body;
    if (elementBody) document.querySelector('#output').style.height = elementBody.scrollHeight + "px";

    hashChange(routs);
}