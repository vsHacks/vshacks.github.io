(() => {
    fetch('/partials/navbar.html')
        .then((resp) => resp.text())
        .then((body) => {
            document.getElementById('nav-placeholder').innerHTML = body;
        });
})();
