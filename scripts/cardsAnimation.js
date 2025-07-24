const projectCards = document.querySelectorAll(".project-cards");

export const cardAnimateOnScroll = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {				
                showCards()
			} else {
				hideCards()
			}
		});
	},
	{
		threshold: 0.5,
	}
);

function showCards() {
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.remove("moved");
      }, index * 300);
    });
}

function hideCards() {
    projectCards.forEach((card) => {
        setTimeout(() => {
          card.classList.add("moved");
        }, 200);
      });
}