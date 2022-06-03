fetch('/partials/footer.html')
	.then((resp) => resp.text())
	.then((body) => {
		document.getElementById('footer-placeholder').innerHTML = body;
	});
