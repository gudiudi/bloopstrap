export default class Carousel {
	static #instances = new WeakMap();

	constructor(carousel) {
		this.carousel = carousel;
	}

	static #getSlidesData(instance) {
		const carouselInner = instance.carousel.querySelector(".carousel-inner");
		const slidesNode = carouselInner.querySelectorAll(".carousel-item");
		const currentSlideIndex = Array.from(slidesNode).findIndex((node) =>
			node.classList.contains("active"),
		);
		console.log(currentSlideIndex);
		return [currentSlideIndex, slidesNode];
	}

	static prev(instance) {
		const [currentSlideIndex, slidesNode] = Carousel.#getSlidesData(instance);
		slidesNode[currentSlideIndex].classList.remove("active");
		slidesNode[
			(currentSlideIndex - 1 + slidesNode.length) % slidesNode.length
		].classList.add("active");
	}

	static next(instance) {
		const [currentSlideIndex, slidesNode] = Carousel.#getSlidesData(instance);
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
		const controls = {
			prev: Carousel.prev,
			next: Carousel.next,
		};
		const instance = Carousel.#getInstance(target.closest(".carousel"));
		controls[target.dataset.slide](instance);
	}
}
