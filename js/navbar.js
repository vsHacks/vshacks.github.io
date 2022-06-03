fetch('/partials/navbar.html')
	.then((resp) => resp.text())
	.then((body) => {
		document.getElementById('nav-placeholder').innerHTML = body;

		const collapseButton = document.getElementById('navbar-collapse-button');
		collapseButton.addEventListener('click', () => {
			const nav = document.getElementById('vshacks-nav');
			nav.classList.toggle('vshacks-bg-dark');
		});
	});
