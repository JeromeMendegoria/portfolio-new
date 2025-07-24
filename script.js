import { enableTyping, disableTyping } from "./scripts/typingAnimation.js";
import { cardAnimateOnScroll } from "./scripts/cardsAnimation.js";

const hero = document.querySelector(".hero-section");
const projectSection = document.querySelector(".project-section")

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
const scrollHint = document.getElementById('scrollHint');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    scrollHint.classList.add('hidden');
  } else {
    scrollHint.classList.remove('hidden');
  }
});
heroObserver.observe(hero);
cardAnimateOnScroll.observe(projectSection)