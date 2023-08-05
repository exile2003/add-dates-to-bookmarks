/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){\"use strict\";function b(a,b){return\"undefined\"==typeof b?b={autoBom:!1}:\"object\"!=typeof b&&(console.warn(\"Deprecated: Expected third argument to be a object\"),b={autoBom:!b}),b.autoBom&&/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(a.type)?new Blob([\"\\uFEFF\",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open(\"GET\",a),d.responseType=\"blob\",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error(\"could not download file\")},d.send()}function d(a){var b=new XMLHttpRequest;b.open(\"HEAD\",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent(\"click\"))}catch(c){var b=document.createEvent(\"MouseEvents\");b.initMouseEvent(\"click\",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f=\"object\"==typeof window&&window.window===window?window:\"object\"==typeof self&&self.self===self?self:\"object\"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||(\"object\"!=typeof window||window!==f?function(){}:\"download\"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement(\"a\");g=g||b.name||\"download\",j.download=g,j.rel=\"noopener\",\"string\"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target=\"_blank\")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:\"msSaveOrOpenBlob\"in navigator?function(f,g,h){if(g=g||f.name||\"download\",\"string\"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement(\"a\");i.href=f,i.target=\"_blank\",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open(\"\",\"_blank\"),g&&(g.document.title=g.document.body.innerText=\"downloading...\"),\"string\"==typeof b)return c(b,d,e);var h=\"application/octet-stream\"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\\/[\\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&\"undefined\"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,\"data:attachment/file;\"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});\n\n//# sourceMappingURL=FileSaver.min.js.map\n\n//# sourceURL=webpack://add-dates-to-bookmarks/./node_modules/file-saver/dist/FileSaver.min.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ \"./node_modules/file-saver/dist/FileSaver.min.js\");\n/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_en_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/en.js */ \"./src/routes/en.js\");\n/* harmony import */ var _routes_ru_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/ru.js */ \"./src/routes/ru.js\");\n\r\n\r\n\r\n\r\nlet output = document.querySelector(\"#output\");\r\n\r\nwindow.addEventListener(\"load\", setSize);\r\nwindow.addEventListener(\"resize\", setSize);\r\nwindow.addEventListener(\"hashchange\", function() {\r\n    router(routs);\r\n})\r\n\r\n//Handling a custom event. This event happens when the page content has loaded.\r\noutput.addEventListener(\"contentdisplayed\", function() {\r\n//Creating a script element dynamically. Adding the chunk routes_bundle.js created by Webpack into it. Putting it to\r\n// the page and immediately deleting it after the styles take effect.\r\n    const scriptElement = document.createElement(\"script\");\r\n    scriptElement.src = \"./routes_bundle.js\";\r\n    scriptElement.type = \"text/javascript\";\r\n    document.body.appendChild(scriptElement);\r\n    scriptElement.remove();\r\n    // When a bookmark file is chosen, the function 'getFile' is started.\r\n    document.getElementById('chosen-file').onchange = getFile;\r\n});\r\n\r\nfunction Route(name, defaultSite) {\r\n    this.name = name;\r\n    this.default = defaultSite;\r\n}\r\n\r\nlet routs = [\r\n    new Route(\"ru\", true),\r\n    new Route(\"en\", false)\r\n]\r\n\r\n//The function router looks for an element in the passed array with a name equal to the URL hash of the browser\r\n// window. And passes the html property of this element to the function \"launch\", which runs in the browser the file\r\n// from the \"routes\" folder with the name equal to the html property.\r\n\r\nfunction router(arrayOfRoutes){\r\n\r\n    const currentRoutes = arrayOfRoutes;\r\n\r\n    if(window.location.hash.length > 0 ){\r\n\r\n        for (let i=0; i <  currentRoutes.length; ++i) {\r\n            if ( currentRoutes[i].name === window.location.hash.substr(1)) {\r\n                switchPageContent( currentRoutes[i].name)\r\n            }\r\n        }\r\n\r\n    } else {\r\n        for (let i=0; i <  currentRoutes.length; i++) {\r\n            if ( currentRoutes[i].default === true) {\r\n                switchPageContent( currentRoutes[i].name)\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\nfunction setDivContent(divElement, content) {\r\n    divElement.innerHTML = content;\r\n    const contentDisplayedEvent = new Event(\"contentdisplayed\");\r\n    divElement.dispatchEvent(contentDisplayedEvent);\r\n}\r\n\r\n// The function switchPageContent places the text content on the page depending on the value passed to this function\r\n// as the first parameter.\r\n\r\nfunction switchPageContent (selectedLanguage) {\r\n\r\n    switch (selectedLanguage) {\r\n        case 'en': setDivContent(output, _routes_en_js__WEBPACK_IMPORTED_MODULE_1__.en); break;\r\n        case 'ru': setDivContent(output, _routes_ru_js__WEBPACK_IMPORTED_MODULE_2__.ru); break;\r\n        default: output.innerHTML = \"<h2>Select language of content</h2>\"\r\n    }\r\n}\r\n\r\n\r\n//The function setSize keeps the size of the element with the class name \"container\", that contains the flag images, equal to 10 mm.\r\n//\r\n\r\nfunction setSize() {\r\n    // String below keeps the height of the element with the class name \"container\" equals 10 mm.\r\n\r\n    document.getElementsByClassName(\"container\")[0].style.height =  10*window.innerWidth/window.outerWidth + \"mm\";\r\n\r\n    // When a bookmark file is chosen, the function 'getFile' is started.\r\n    //document.getElementById('chosen-file').onchange = getFile;\r\n}\r\n\r\n\r\n// Function 'addDate' adds a div element with the bookmark creation date after the inputElement.\r\n// Attribute 'ADD_DATE' has a Unix timestamp in seconds.\r\n// Tag \"H3\" has the name of the folder.\r\nfunction addDate(inputElement) {\r\n\r\n    if (inputElement.hasAttribute('ADD_DATE') && inputElement.tagName !== \"H3\" && inputElement.textContent !== \"\") {\r\n\r\n        const attributeValue = inputElement.getAttribute('ADD_DATE');\r\n        const date = convertUnixTime(attributeValue);\r\n\r\n        const div = window.document.createElement('div');\r\n        div.textContent = \"   \" + date;\r\n        div.style.display = \"inline\";\r\n\r\n        inputElement.insertAdjacentElement('afterEnd', div);\r\n    }\r\n}\r\n\r\n// Function 'elementIteration' iterates through the elements and checks if there are nested elements and apply to each\r\n// element function 'addDate'\r\nfunction elementIteration(inputElement) {\r\n\r\n    addDate(inputElement);\r\n\r\n    if (inputElement.hasChildNodes()) {\r\n        let childNodes = inputElement.children;\r\n        for (let i = 0; i < childNodes.length; i++) {\r\n            elementIteration(childNodes[i]);\r\n        }\r\n    }\r\n}\r\n\r\n// Function 'convertUnixTime' takes a Unix timestamp in seconds as parameter value and returns a date in format DAY MMM DD YYYY\r\n// HH:MM:SS\r\nfunction convertUnixTime(date) {\r\n    const dateInstance = new Date();\r\n    dateInstance.setTime(date*1000);\r\n    const calendarDate = (dateInstance.toString()).slice(0,25);\r\n    return calendarDate;\r\n}\r\n\r\n// Function 'getFile' parses the input bookmark file, processes it with the function 'elementIteration' and writes with\r\n// the 'saveAs' method from the 'FileSaver' package\r\nfunction getFile(e) {\r\n\r\n    const inputFile = e.target.files[0];\r\n    const reader = new FileReader();\r\n\r\n    reader.readAsText(inputFile);\r\n    reader.onload = function(e) {\r\n        const fileContent = e.target.result;\r\n\r\n        //Parsing the content of the input file and assign result to domTree variable\r\n        const domTree = new DOMParser().parseFromString(fileContent, \"text/html\")\r\n\r\n        //Pass the content of tag body to function elementIteration for adding dates\r\n        elementIteration(domTree.getElementsByTagName('body')[0]);\r\n        const outputFile = (domTree.getElementsByTagName('body')[0]).outerHTML\r\n\r\n        //Form the file and write to disk\r\n        const fileForSave = new File([outputFile], \"bookmark-result.html\", {type: \"text/plain;charset=utf-8\"});\r\n        file_saver__WEBPACK_IMPORTED_MODULE_0___default().saveAs(fileForSave)\r\n    }\r\n}\r\n\r\nrouter(routs);\r\n\n\n//# sourceURL=webpack://add-dates-to-bookmarks/./src/index.js?");

/***/ }),

/***/ "./src/routes/en.js":
/*!**************************!*\
  !*** ./src/routes/en.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   en: () => (/* binding */ en)\n/* harmony export */ });\nconst en = `\r\n<div class=\"wrap-text\">\r\n    <h2>Adding dates to bookmarks</h2>\r\n    <br>\r\n    <div class=\"text-instruction\" value=\"en\">&nbsp;&nbsp;&nbsp To add dates to the bookmark file on the browser, export\r\n        the bookmark file and save it to disk (for example, for the Сhrome browser, select - ︙ in the upper right corner\r\n        ⇒ Bookmarks ⇒ Bookmark manager or CTRL + SHIFT + O. Then ︙ in the upper right corner of the site ⇒ Bookmarks ⇒ Export\r\n        bookmarks).\r\n        The file will have a name like \"bookmarks_XX.XX.XXXX.html\" (X is numbers). Next, click \"Download file\" and\r\n        select the saved bookmark file. The file \"bookmarks-result.html\" with dates will appear in the Downloads\r\n        folder on your computer. It may take to one minute.</div>\r\n    <br>\r\n    <input type=\"file\" class=\"filestyle\" id=\"chosen-file\" data-btnClass=\"btn btn-primary\" data-input=\"false\"\r\n           data-text=\"Download file\">\r\n</div>\r\n`\r\n\n\n//# sourceURL=webpack://add-dates-to-bookmarks/./src/routes/en.js?");

/***/ }),

/***/ "./src/routes/ru.js":
/*!**************************!*\
  !*** ./src/routes/ru.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ru: () => (/* binding */ ru)\n/* harmony export */ });\nconst ru = `\r\n<div class=\"wrap-text\">\r\n    <h2>Добавление дат в bookmarks</h2>\r\n    <br>\r\n    <div class=\"text-instruction\">&nbsp;&nbsp;&nbsp; Для добавления дат в файл закладок на браузере, экспортируйте файл\r\n        закладок и сохраните на диске (например для браузера chrome выберите настройки - &#65049; в правом верхнем углу\r\n        &rArr; Bookmarks &rArr; Bookmark manager или CTRL + SHIFT + O. Далее &#65049; в правом верхнем углу на сайте\r\n        &rArr;\r\n        Bookmarks\r\n        &rArr;\r\n        Export bookmarks). Файл будет иметь название типа \"bookmarks_XX.XX.XXXX.html\" (X - цифры). Далее нажмите\r\n        кнопку \"Загрузите файл\" и выберите сохраненный файл закладок. В папке Downloads на вашем компьютере появится файл\r\n        \"bookmarks-result.html\" с датами. Это может занять до одной минуты</div>\r\n    <br>\r\n    <input type=\"file\" class=\"filestyle\" id=\"chosen-file\" data-btnClass=\"btn btn-primary\" data-input=\"false\"\r\n           data-text=\"Загрузите файл\">\r\n</div>\r\n`\n\n//# sourceURL=webpack://add-dates-to-bookmarks/./src/routes/ru.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;