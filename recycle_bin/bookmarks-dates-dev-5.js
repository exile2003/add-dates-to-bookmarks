
let output = document.getElementById("output");
output.innerText = "Выберите файл"

document.getElementById("initial").onchange = getFile;

// Constant 'file' takes file bookmarks/bookmarks_1_27_22.html, constant dom takes DOM-tree of html-file.
//const file = fs.readFileSync('bookmarks/bookmarks_1_27_22.html');
//const dom = new JSDOM(file);

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
// element
// function addDate
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


function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    //element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


function getFile(e) {
    let dom;
    let file2 = e.target.files[0];
    let reader = new FileReader();
    let htmlFile;
    let htmlFileResult;
    reader.onload = function(e) {
        htmlFile = e.target.result;
        //output.innerHTML = htmlFile;
        dom = new DOMParser().parseFromString(htmlFile, "text/html")
        //dom = e.target.result;
        //console.log(htmlFile)
        elementIteration(dom.getElementsByTagName('body')[0]);
        htmlFileResult = (dom.getElementsByTagName('body')[0]).outerHTML

        download('bookmark-result.html', htmlFileResult);

        //let file = new File(htmlFileResult, "bookmark-result-5.html", {type: "text/plain;charset=utf-8"});
        //FileSaver.saveAs(file)

        //let blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
        //saveAs(blob, "bookmark-result.html");
        //window.navigator.msSaveBlob(blob, "bookmark-result-10.html")
    }
    reader.readAsText(file2);
    //elementIteration (dom.window.document.getElementsByTagName('body')[0]);


}


