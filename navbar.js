window.onload = function() {
    // This is a vanilla equivalent of the JQuery load function.
    fetch("/navbar.html")
        .then(function(resp) {
            return resp.text();
        }) 
        .then(function(body) {
            document.getElementById("nav-placeholder").innerHTML = body;
        });
}

