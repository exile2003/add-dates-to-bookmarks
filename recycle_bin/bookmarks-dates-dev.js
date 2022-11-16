import FileSaver from 'file-saver'

let output = document.getElementById("output");
output.innerText = "Выберите файл"

// When a bookmark file is choosen, the function 'getFile' is started.
document.getElementById("input").onchange = getFile;

// Function 'addDate' adds a div element with the date of bookmark creation after the inputElement.
// Attribute 'ADD_DATE' has a Unix timestamp in seconds.
// Tag "H3" has a title of folder.
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
// method 'saveAs' of 'FileSaver' package
function getFile(e) {
    let domTree;
    let inputFile = e.target.files[0];
    let reader = new FileReader();
    let fileContent;
    let outputFile;
    reader.onload = function(e) {
        fileContent = e.target.result;
        domTree = new DOMParser().parseFromString(fileContent, "text/html")
        elementIteration(domTree.getElementsByTagName('body')[0]);
        outputFile = (domTree.getElementsByTagName('body')[0]).outerHTML

        let fileForSave = new File([outputFile], "bookmark-result.html", {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(fileForSave)

    }
    reader.readAsText(inputFile);
}


