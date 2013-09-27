$(document).ready(function() {
    $('#nav').load('nav.html', '', function() {});
    switch ($('#behindNav').contents()[1].innerHTML) {
        case "Home" :
            $('#content').load('home.html', '', function() {});
            break;
        case "About" :
            $('#content').load('aboutContent.html', '', function() {});
            break;
        case "Education" :
            $('#content').load('educationContent.html', '', function() {});
            break;
        case "Work" :
            $('#content').load('workContent.html', '', function() {});
            break;
        case "Contact" :
            $('#content').load('contactContent.html', '', function() {});
            break;
    }
    $('#footer').load('footer.html', '', function() {});
});