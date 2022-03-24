function setActiveLink() {
    let links = document.getElementsByClassName('nav-link');

    for (let i = 0; i < links.length; i++) {
        console.log('CURRENT LINK:', links[i]);
        if (links[i].innerHTML === 'HOME') {
            links[i].style = 'text-decoration: underline';
        }
    }
}

setActiveLink();






//function setActiveLink() {
//let links = document.getElementsByClassName('nav-link');

//for (let i = 0; i < links.length; i++) {
//console.log('CURRENT LINK:', links[i]);
//console.log(links[i].getAttribute("href"));
//console.log(document.location.pathname);
//if (links[i].getAttribute("href") === document.location.pathname) {
//links[i].style = 'text-decoration: underline';
//}
//}
//}
//function setActiveLink() {
//let links = document.getElementsByClassName('nav-link');

//for (let i = 0; i < links.length; i++) {
//console.log('CURRENT LINK:', links[i]);
//if (links[i].innerHTML === 'HOME') {
//links[i].style = 'text-decoration: underline';
//}
//}
//}

setActiveLink();



//function addNav(text, url, id, cls) {
    //var nav = '<a id="' + id + '" class="' + cls + '" href="' + url + '">' + text + '</a>'

    //document.getElementsByClassName("link-wrapper")[0].innerHTML += nav;
//}

//addNav('HOME', 'index.html', 'navHome', 'nav-link')
//addNav('ABOUT', 'components/about/about.html', 'navAbout', 'nav-link')
//addNav('EXPERIENCE', '/tech-moms-portfolio/components/experience/experience.html', 'navExperience', 'nav-link')
//addNav('CONTACT', '/tech-moms-portfolio/components/contact/contact.html', 'navContact', 'nav-link')

//setActiveLink();