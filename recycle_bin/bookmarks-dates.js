const jsdom  = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');


var file = fs.readFileSync('bookmarks/bookmarks_1_27_22.html');
const dom = new JSDOM(file);

    function tagCrawling(inputElement) {
        let element = inputElement;

        if ( element.hasAttribute('ADD_DATE')) {

            var attributeValue = element.getAttribute('ADD_DATE');
            var div = dom.window.document.createElement('div');
            var date = convertUnixTime(attributeValue);

            if( element.tagName == "H3"){
                element.style.whiteSpace = "pre-wrap";
                var currText = element.textContent;//div.textContent = date;
                element.innerHTML = currText+ "   -  <span style='font-size: 16px; font-weight: normal; display:inline'>"+date+"</span>";
            } else div.textContent = "   "+date;

            div.style.display = "inline";
            div.style.whiteSpace = "pre-wrap";
            element.insertAdjacentElement('afterEnd', div);

         }

        if (element.hasChildNodes()) {
            let childNodes = element.children;
            for (var i = 0; i < childNodes.length; i++) {
               tagCrawling(childNodes[i]);
            }
            return ;
        } else return;

    }


    function convertUnixTime(date) {
        var d = new Date();
        d.setTime(date*1000);
        var dtt = (d.toString()).slice(0,25);
        return dtt;
    }

    tagCrawling(dom.window.document.getElementsByTagName('body')[0]);

    var header ="<!doctype html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'>        <title>Document</title>        </head>"

    fs.writeFileSync("bookmarks_1_27_22-result.html", header + dom.window.document.body.outerHTML+"</html>");