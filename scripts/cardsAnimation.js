const projectCards = document.querySelectorAll(".project-cards");

export const cardAnimateOnScroll = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {				
                showCards()
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

export function hideCards() {
    projectCards.forEach((card) => {
        setTimeout(() => {
          card.classList.add("moved");
        }, 200);
      });
}