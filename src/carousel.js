export default class Carousel {
	static #instances = new WeakMap();

	constructor(carousel) {
		this.carousel = carousel;
	}

	static #previous() {}

	static #next() {}

	static #getInstance(menu) {
		if (!Carousel.#instances.has(menu)) {
			Carousel.#instances.set(menu, new Carousel(menu));
		}

		return Carousel.#instances.get(menu);
	}

	static handleEvent(target) {}
}
