# add-dates-to-bookmarks

#### This is standalone application, that allows you to add bookmark creation dates in a saved bookmark file.

To add dates to the bookmark file of the browser, export the bookmark file and save it to disk. For example, for the 
Сhrome browser, select - ︙ in the upper right corner ⇒ Bookmarks ⇒ Bookmark manager or Ctrl + Shift + O. Then ︙ in the 
upper right corner
 of the site ⇒ Bookmarks ⇒ Export bookmarks. The file will have a name like "bookmarks_XX.XX.XXXX.html" (X is 
 a number). Next open dist/index.html file, click "Download File" and select the saved bookmark file. The file 
 "bookmarks-result.html" with dates will appear in the Downloads folder on your computer. It may take to one minute.
 
 [Start app](https://exile2003.github.io/add-dates-to-bookmarks)
 
add-dates-to-bookmarks/dist/ - This is a bundle. You can run application with index.html.

add-dates-to-bookmarks/bookmarks/ - This is a saved bookmark file. You can use it to check how the application works.

The imperative-iframe branch uses the iframe element for content and the en.html and ru.html files that are loaded into it.

The imperative-div branch uses a regular div element and the content is loaded into it as string variables stored in the en.js and ru.js files.
