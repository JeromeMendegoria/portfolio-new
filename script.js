import { enableTyping, disableTyping } from "./scripts/typingAnimation.js";
const hero = document.querySelector(".hero-section");

const heroOption = {
	root: null,
	rootMargin: "0px",
	threshold: 0.5,
};

const heroObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				enableTyping()
			} else {
				disableTyping()
                console.log("disbale typing")
			}
		});
	},
	{
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	}

);

heroObserver.observe(hero);