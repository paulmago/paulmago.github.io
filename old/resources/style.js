function hideshow(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf(" w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }

    if (x.className.indexOf(" slideInDown zoomIn") == -1) {
        x.className += " slideInDown zoomIn";
    } else { 
        x.className = x.className.replace(" slideInDown zoomIn", "");
    }    
}