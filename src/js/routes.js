function Route(name, html, defaultSite) {
    this.name = name;
    this.html = html;
    this.default = defaultSite;
}

let routers = [
    new Route("ru", "ru.html", true),
    new Route("en", "en.html", false)
]

window.addEventListener("hashchange", function() {
    hashChange(routers);
    //window.location.reload();
   //setSize();
})

 hashChange(routers)

function hashChange(someRouter){
    console.log("hashChange");
    // setSize();
    let routers2 = someRouter;
    //console.log(window.location.hash == Undefined)
    if(window.location.hash.length > 0 ){

        for (let i=0; i < routers2.length; ++i) {
            if (routers2[i].name === window.location.hash.substr(1)) {
                launch(routers2[i].html)
            }
        }

    } else { console.log("else")
        for (let i=0; i < routers2.length; i++) {
            if (routers2[i].default === true) {
                launch(routers2[i].html)
            }
        }
    }
}

function launch(someHtml) {
    let url = 'routes/' + someHtml;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("output").innerHTML = xhr.responseText;
        };
    };
    xhr.send();
}