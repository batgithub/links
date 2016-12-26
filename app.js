function $(id) {
    return document.getElementById(id)
}

function removeAllChild(node){
    var myNode = document.getElementById(node);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}
function getDomain(url) {
   return url.match(/:\/\/(.[^/]+)/)[1];
}


function getFavicoUrl(url) {
    var url = url
    var search = "https://www.google.com/s2/favicons?domain="
    var domain = getDomain(url)
    var favIcoUrl = search+domain

    return favIcoUrl

}

function addElement(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = $(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}



function screenLinksCat(catName){
    const catNameLinks = links
        .filter(links => links.cat === catName)
        .map(links =>
            `<a class="link" href="${links.url}">
                <img src="`+getFavicoUrl(links.url)+`">
                <div class="link-infos">
                    <div class="link-name">${links.name}</div>
                    <div class="link-url">${links.url}</div></div>
                </div>
            </a>`)

    addElement('wrap', 'h2', 'title-cat', catName)

    for (var link in catNameLinks) {
        addElement('wrap', 'div', 'wrap-link',catNameLinks[link])
    }
}


var cat1 = "cat 1"
screenLinksCat(cat1)

var cat2 = "cat 2"
screenLinksCat(cat2)

var cat8 = "cat 8"
screenLinksCat(cat8)
