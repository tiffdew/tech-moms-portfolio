function setActiveLink() {
    let links = document.getElementsByClassName('nav-link');

    for (let i = 0; i < links.length; i++) {
        console.log('CURRENT LINK:', links[i]);
        console.log(links[i].getAttribute("href"));
        console.log(document.location.pathname);
        if (links[i].getAttribute("href") === document.location.pathname) {
            links[i].style = 'text-decoration: underline';
        }
    }
}




function addNav(text, url, id, cls) {
    var nav = '<a id="' + id + '" class="' + cls + '" href="' + url + '">' + text + '</a>'
    //document.getElementById("link-test").innerHTML += nav;
    //document.getElementById("link-test").appendChild(nav);
    document.getElementsByClassName("link-wrapper")[0].innerHTML += nav;
}

addNav('HOME', 'index.html', 'navHome', 'nav-link')
addNav('ABOUT', './components/about/about.html', 'navAbout', 'nav-link')
addNav('EXPERIENCE', './components/experience/experience.html', 'navExperience', 'nav-link')
addNav('CONTACT', './components/contact/contact.html', 'navContact', 'nav-link')

setActiveLink();