{ pkgs ? import <nixpkgs> {}
}:
pkgs.mkShell {
	name="vshacks-pydev";
	buildInputs = [
		pkgs.python3
	];
	shellHook = ''
		python3 -m http.server
	'';
}
