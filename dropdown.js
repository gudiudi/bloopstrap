class Dropdown {
	static #instances = new Map();

	constructor(dropdown) {
		this.dropdown = dropdown;
	}

	toggle() {
		this.dropdown.classList.toggle("show");
	}

	static init() {
		document.addEventListener("click", (e) => {
			if (e.target.matches(".dropdown-toggle")) {
				const menu = e.target.nextElementSibling;

				if (!Dropdown.#instances.has(menu)) {
					Dropdown.#instances.set(menu, new Dropdown(menu));
				}

				const dropdown = Dropdown.#instances.get(menu);
				dropdown.toggle();
			}
		});
	}
}

Dropdown.init();
