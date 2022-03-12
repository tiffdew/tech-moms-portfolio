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