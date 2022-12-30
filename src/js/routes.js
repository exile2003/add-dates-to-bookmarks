function Route(name, html, defaultSite) {
    this.name = name;
    this.html = html;
    this.default = defaultSite;
}

let routs = [
    new Route("ru", "ru.html", true),
    new Route("en", "en.html", false)
]

window.addEventListener("hashchange", function() {
    hashChange(routs);
})

//The function hashChange looks for an element in the passed array with a name equal to the URL hash of the browser
// window. And passes the html property of this element to the function launch, which runs in the browser the file
// from the "routes" folder with the name equal to the html property.

export default function hashChange(arrayOfRoutes){
    let currentRoutes = arrayOfRoutes;
    if(window.location.hash.length > 0 ){

        for (let i=0; i <  currentRoutes.length; ++i) {
            if ( currentRoutes[i].name === window.location.hash.substr(1)) {
                launch( currentRoutes[i].html, chooseFile)
            }
        }

    } else { console.log("else")
        for (let i=0; i <  currentRoutes.length; i++) {
            if ( currentRoutes[i].default === true) {
                launch( currentRoutes[i].html, chooseFile)
            }
        }
    }
}

// The function Launch runs the html file in the browser with the address passed to this function as the first
// parameter. As a second parameter, the function chooseFile is passed, which runs when the user chooses a bookmark
// file.

function launch(someHtml, callback) {

    let url = 'routes/' + someHtml;
    let output = document.getElementById("output");
    output.setAttribute('src', url);

    output.onload = callback;
}