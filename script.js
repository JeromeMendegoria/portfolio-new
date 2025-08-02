import { enableTyping, disableTyping } from "./scripts/typingAnimation.js";
import { cardAnimateOnScroll } from "./scripts/cardsAnimation.js";
import { hideCards } from "./scripts/cardsAnimation.js";

const hero = document.querySelector(".hero-section");
const projSectHead = document.querySelector(".wave-text");
const projectSection = document.querySelector(".project-section");

// drop down varialbles
const toggleBtn = document.getElementById("toggleBtn");
const dropdownList = document.getElementById("dropdownList");
const selectedInput = document.getElementById("selectedInput");

// pop up UI  varialbles
const popUpUI = document.querySelector("[data-popup-ui]")
const popUpUIclsbtn = document.querySelector("[data-pupup-clsbtn]")
const popUpUIopenBtn = document.querySelector("[data-popup-opnbtn]")

const heroObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				enableTyping();
				hideCards();
			} else {
				disableTyping();
				console.log("disbale typing");
			}
		});
	},
	{
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	}
);
const scrollHint = document.getElementById("scrollHint");

window.addEventListener("scroll", () => {
	if (window.scrollY > 20) {
		scrollHint.classList.add("hidden");
		projSectHead.classList.remove("wave");
	} else {
		scrollHint.classList.remove("hidden");
		projSectHead.classList.add("wave");
	}
});
heroObserver.observe(hero);
cardAnimateOnScroll.observe(projectSection);

// drop down

toggleBtn.addEventListener("click", () => {
	dropdownList.style.display =
		dropdownList.style.display === "block" ? "none" : "block";
});

dropdownList.addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		selectedInput.value = e.target.dataset.value;
		dropdownList.style.display = "none";
	}
});

document.addEventListener("click", (e) => {
	if (!document.querySelector(".dropdown-wrapper").contains(e.target)) {
		dropdownList.style.display = "none";
	}
});

popUpUIopenBtn.addEventListener("click", () => {
	popUpUI.classList.add("active")
})
popUpUIclsbtn.addEventListener("click", () => {
	popUpUI.classList.remove("active")
})

console.log(popUpUIopenBtn)