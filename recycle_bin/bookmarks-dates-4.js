const jsdom  = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

// Constant 'file' takes file bookmarks/bookmarks_1_27_22.html, constant dom takes DOM-tree of html-file.
const file = fs.readFileSync('bookmarks/bookmarks_1_27_22.html');
const dom = new JSDOM(file);

// Function 'addDate' adds a div element with the date of bookmark creation after the inputElement.
// Attribute 'ADD_DATE' has a Unix timestamp in seconds.
// Tag "H3" has a title of folder.
function addDate(inputElement) {
    let element = inputElement;
    let attributeValue, div, date;

    if (element.hasAttribute('ADD_DATE') && element.tagName !== "H3") {

        attributeValue = element.getAttribute('ADD_DATE');
        date = convertUnixTime(attributeValue);

        div = dom.window.document.createElement('div');
        div.textContent = "   " + date;
        div.style.display = "inline";

        element.insertAdjacentElement('afterEnd', div);
    }
}

// Function 'elementIteration' iterates through the elements and checks if there are nested elements and apply to each
// element
// function addDate
function elementIteration(inputElement) {
    //console.log(typeof inputElement);
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

elementIteration (dom.window.document.getElementsByTagName('body')[0]);

fs.writeFileSync("bookmarks_1_27_22-result-3.html", '' + dom.window.document.body.outerHTML);