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

    let header = "<!doctype html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport'" +
                " content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'><title>Document</title></head>"

    fs.writeFileSync("bookmarks_1_27_22-result-2.html", header + dom.window.document.body.outerHTML + "</html>");