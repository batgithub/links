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



for (var link in links) {

    var nameItem = links[link][0]
    var linkItem = links[link][1]
    var favicoItem = getFavicoUrl(linkItem)


    var newLink = document.createElement('a');
    newLink.setAttribute('class', 'link');
    newLink.setAttribute('href', linkItem);





    newLink.innerHTML = '\
        <img src="'+favicoItem+'" alt=""><div class="link-infos" style=""> <div class="link-name">'+nameItem+'</div>\
        <div class="link-url">'+linkItem+'</div></div>\
        '



    $("wrap").appendChild(newLink);

}
