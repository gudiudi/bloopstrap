export default class Carousel {
	static #instances = new WeakMap();

	constructor(carousel) {
		this.carousel = carousel;
		Carousel.#instances.set(carousel, this);
	}

	#getSlidesData() {
		const carouselInner = this.carousel.querySelector(".carousel-inner");
		const slidesNode = carouselInner.querySelectorAll(".carousel-item");
		const currentSlideIndex = Array.from(slidesNode).findIndex((node) =>
			node.classList.contains("active"),
		);
		console.log(currentSlideIndex);
		return [currentSlideIndex, slidesNode];
	}

	prev() {
		const [currentSlideIndex, slidesNode] = this.#getSlidesData();
		slidesNode[currentSlideIndex].classList.remove("active");
		slidesNode[
			(currentSlideIndex - 1 + slidesNode.length) % slidesNode.length
		].classList.add("active");
	}

	next() {
		const [currentSlideIndex, slidesNode] = this.#getSlidesData();
		slidesNode[currentSlideIndex].classList.remove("active");
		slidesNode[(currentSlideIndex + 1) % slidesNode.length].classList.add(
			"active",
		);
	}

	static #getInstance(carousel) {
		if (!Carousel.#instances.has(carousel)) {
			Carousel.#instances.set(carousel, new Carousel(carousel));
		}

		return Carousel.#instances.get(carousel);
	}

	static handleEvent(target) {
		const action = target.dataset.slide;
		if (action) {
			const instance = Carousel.#getInstance(target.closest(".carousel"));
			instance[action]();
		}
	}
}
