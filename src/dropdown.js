export default class Dropdown {
	static #instances = new WeakMap();

	constructor(dropdown) {
		this.dropdown = dropdown;
		Dropdown.#instances.set(dropdown, this);
	}

	toggle() {
		this.dropdown.classList.toggle("show");
	}

	static #getInstance(menu) {
		if (!Dropdown.#instances.has(menu)) {
			Dropdown.#instances.set(menu, new Dropdown(menu));
		}

		return Dropdown.#instances.get(menu);
	}

	static handleEvent(target) {
		const menu = target.nextElementSibling;
		if (menu) {
			const instance = Dropdown.#getInstance(menu);
			instance.toggle();
		}
	}
}
