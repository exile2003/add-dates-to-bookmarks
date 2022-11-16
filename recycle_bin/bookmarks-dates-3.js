const jsdom  = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');


const file = fs.readFileSync('bookmarks/bookmarks_1_27_22.html');
const dom = new JSDOM(file);

    function addDate(inputElement) {
        let element = inputElement;
        let attributeValue, div, date;

        if ( element.hasAttribute('ADD_DATE')) {

            attributeValue = element.getAttribute('ADD_DATE');
            div = dom.window.document.createElement('div');
            date = convertUnixTime(attributeValue);

            if ( element.tagName != "H3" ) {
                div.textContent = "   " + date;
                div.style.display = "inline";
                element.insertAdjacentElement('afterEnd', div);
            }
         }

        if (element.hasChildNodes()) {
            let childNodes = element.children;
            for (let i = 0; i < childNodes.length; i++) {
                addDate(childNodes[i]);
            }
            return ;
        } else return;

    }


    function convertUnixTime(date) {
        let dateInstance = new Date();
        dateInstance.setTime(date*1000);
        let calendarDate = (dateInstance.toString()).slice(0,25);
        return calendarDate;
    }

    addDate(dom.window.document.getElementsByTagName('body')[0]);

    fs.writeFileSync("bookmarks_1_27_22-result-2.html", '' + dom.window.document.body.outerHTML);