import './style.css';
import FileSaver from 'file-saver';

/*
import './js/flags_size.js'
import './js/routes.js'
import './js/app.js'
*/

let iframe = document.querySelector("iframe");

window.addEventListener("load", setSize);
window.addEventListener("resize", setSize);
window.addEventListener("hashchange", function() {
    router(routs);
})

function start() {
    let elementBody = iframe.contentWindow.document.body;
    if (elementBody) {
        iframe.style.height = elementBody.scrollHeight + "px";
    }

    router(routs);
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


//The function router looks for an element in the passed array with a name equal to the URL hash of the browser
// window. And passes the html property of this element to the function "launch", which runs in the browser the file
// from the "routes" folder with the name equal to the html property.

function router(arrayOfRoutes){

    const currentRoutes = arrayOfRoutes;
    if(window.location.hash.length > 0 ){

        for (let i=0; i <  currentRoutes.length; ++i) {
            if ( currentRoutes[i].name === window.location.hash.substr(1)) {
                launch( currentRoutes[i].html, setSize)
            }
        }

    } else { console.log("else")
        for (let i=0; i <  currentRoutes.length; i++) {
            if ( currentRoutes[i].default === true) {
                launch( currentRoutes[i].html, setSize)
            }
        }
    }
}

// The function Launch runs the html file in the browser with the address passed to this function as the first
// parameter. As a second parameter, the function setSize is passed.

function launch(someHtml, callback) {
    const url = 'routes/' + someHtml;
    iframe.setAttribute('src', url);
    iframe.onload = callback;
}

//The function setSize keeps the size of the element with the class name "container", that contains the flag images, equal to 10 mm.
// And also sets height of the element "iframe" dependent on the size of viewport, that contains the text.

function setSize() {
    // String below keeps the height of the element with the class name "container" equals 10 mm.
    document.getElementsByClassName("container")[0].style.height =  10*window.innerWidth/window.outerWidth + "mm";

    let elementBody = iframe.contentWindow.document.body;
    if (elementBody) document.querySelector('iframe').style.height = elementBody.scrollHeight + "px";

    // When a bookmark file is chosen, the function 'getFile' is started.
    iframe.contentDocument.getElementById('chosen-file').onchange = getFile;
}

// Function 'addDate' adds a div element with the bookmark creation date after the inputElement.
// Attribute 'ADD_DATE' has a Unix timestamp in seconds.
// Tag "H3" has the name of the folder.
function addDate(inputElement) {

    if (inputElement.hasAttribute('ADD_DATE') && inputElement.tagName !== "H3" && inputElement.textContent !== "") {

        const attributeValue = inputElement.getAttribute('ADD_DATE');
        const date = convertUnixTime(attributeValue);

        const div = window.document.createElement('div');
        div.textContent = "   " + date;
        div.style.display = "inline";

        inputElement.insertAdjacentElement('afterEnd', div);
    }
}

// Function 'elementIteration' iterates through the elements and checks if there are nested elements and apply to each
// element function 'addDate'
function elementIteration(inputElement) {

    addDate(inputElement);

    if (inputElement.hasChildNodes()) {
        let childNodes = inputElement.children;
        for (let i = 0; i < childNodes.length; i++) {
            elementIteration(childNodes[i]);
        }
    }
}

// Function 'convertUnixTime' takes a Unix timestamp in seconds as parameter value and returns a date in format DAY MMM DD YYYY
// HH:MM:SS
function convertUnixTime(date) {
    const dateInstance = new Date();
    dateInstance.setTime(date*1000);
    const calendarDate = (dateInstance.toString()).slice(0,25);
    return calendarDate;
}

// Function 'getFile' parses the input bookmark file, processes it with the function 'elementIteration' and writes with
// the 'saveAs' method from the 'FileSaver' package
function getFile(e) {

    const inputFile = e.target.files[0];
    const reader = new FileReader();

    reader.readAsText(inputFile);
    reader.onload = function(e) {
        const fileContent = e.target.result;

        //Parsing the content of the input file and assign result to domTree variable
        const domTree = new DOMParser().parseFromString(fileContent, "text/html")

        //Pass the content of tag body to function elementIteration for adding dates
        elementIteration(domTree.getElementsByTagName('body')[0]);
        const outputFile = (domTree.getElementsByTagName('body')[0]).outerHTML

        //Form the file and write to disk
        const fileForSave = new File([outputFile], "bookmark-result.html", {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(fileForSave)
    }
}

start();