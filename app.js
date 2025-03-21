export default class App {
	static #components = {};

	static register(toggle, component) {
		App.#components[toggle] = component;
	}

	static init() {
		document.addEventListener("click", (e) => {
			const component = App.#components[e.target.dataset.toggle];
			if (component) component.handleEvent(e.target);
		});
	}
}
