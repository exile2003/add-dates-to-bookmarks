
import './style.css';

/* These three lines below are necessary for working library Bootstrap */
/* FileStyle-2 (https://markusslima.github.io/bootstrap-filestyle/). This library is needed for customization of */
/* html input element. */

//import './css/bootstrap.min.css'
//import '../node_modules/jquery/dist/jquery.min.js';
//import './js/bootstrap-filestyle.min.js';


//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*
import './js/flags_size.js'
import './js/routes.js'
import './js/app.js'
*/


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

function Route(name, html, defaultSite) {
    this.name = name;
    this.html = html;
    this.default = defaultSite;
}

let routs = [
    new Route("ru", "ru.html", true),
    new Route("en", "en.html", false)
]

window.addEventListener("hashchange", function() {
    hashChange(routs);
})

//The function hashChange looks for an element in the passed array with a name equal to the URL hash of the browser
// window. And passes the html property of this element to the function launch, which runs in the browser the file
// from the "routes" folder with the name equal to the html property.

function hashChange(arrayOfRoutes){
    let currentRoutes = arrayOfRoutes;
    if(window.location.hash.length > 0 ){

        for (let i=0; i <  currentRoutes.length; ++i) {
            if ( currentRoutes[i].name === window.location.hash.substr(1)) {
                launch( currentRoutes[i].html, chooseFile)
            }
        }

    } else { console.log("else")
        for (let i=0; i <  currentRoutes.length; i++) {
            if ( currentRoutes[i].default === true) {
                launch( currentRoutes[i].html, chooseFile)
            }
        }
    }
}

// The function Launch runs the html file in the browser with the address passed to this function as the first
// parameter. As a second parameter, the function chooseFile is passed, which runs when the user chooses a bookmark
// file.

function launch(someHtml, callback) {

    let url = 'routes/' + someHtml;
    let output = document.getElementById("output");
    output.setAttribute('src', url);

    output.onload = callback;
}

import FileSaver from 'file-saver';

// When a bookmark file is chosen, the function 'getFile' is started.
function chooseFile() {
    output.contentDocument.getElementById('chosen-file').onchange = getFile;
}


// Function 'addDate' adds a div element with the bookmark creation date after the inputElement.
// Attribute 'ADD_DATE' has a Unix timestamp in seconds.
// Tag "H3" has the name of the folder.
function addDate(inputElement) {
    let element = inputElement;
    let attributeValue, div, date;

    if (element.hasAttribute('ADD_DATE') && element.tagName !== "H3" && element.textContent !== "") {

        attributeValue = element.getAttribute('ADD_DATE');
        date = convertUnixTime(attributeValue);

        div = window.document.createElement('div');
        div.textContent = "   " + date;
        div.style.display = "inline";

        element.insertAdjacentElement('afterEnd', div);
    }
}

// Function 'elementIteration' iterates through the elements and checks if there are nested elements and apply to each
// element function 'addDate'
function elementIteration(inputElement) {
    let element = inputElement;
    addDate(element);

    if (element.hasChildNodes()) {
        let childNodes = element.children;
        for (let i = 0; i < childNodes.length; i++) {
            elementIteration(childNodes[i]);
        }
    }
}

// Function 'convertUnixTime' takes a Unix timestamp in seconds as parameter value and returns a date in format DAY MMM DD YYYY
// HH:MM:SS
function convertUnixTime(date) {
    let dateInstance = new Date();
    dateInstance.setTime(date*1000);
    let calendarDate = (dateInstance.toString()).slice(0,25);
    return calendarDate;
}

// Function 'getFile' parses the input bookmark file, processes it with the function 'elementIteration' and writes with
// the 'saveAs' method from the 'FileSaver' package
function getFile(e) {
    let domTree;
    let inputFile = e.target.files[0];
    let reader = new FileReader();
    let fileContent;
    let outputFile;
    reader.onload = function(e) {
        fileContent = e.target.result;

        //Parsing the content of the input file and assign result to domTree variable
        domTree = new DOMParser().parseFromString(fileContent, "text/html")

        //Pass the content of tag body to function elementIteration for adding dates
        elementIteration(domTree.getElementsByTagName('body')[0]);
        outputFile = (domTree.getElementsByTagName('body')[0]).outerHTML

        //Form the file and write to disk
        let fileForSave = new File([outputFile], "bookmark-result.html", {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(fileForSave)

    }
    reader.readAsText(inputFile);
}



