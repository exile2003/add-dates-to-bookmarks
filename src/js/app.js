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