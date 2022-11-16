window.onload = setSize;
//window.onresize = setSize;
//setSize();
//window.resizeTo(0,0)

function setSize() {
    document.getElementsByClassName("container")[0].style.height =  10*window.innerWidth/window.outerWidth + "mm";
    console.log("setSize")
  //  document.getElementsByClassName("container")[0].style.margin = "2vw";

}

