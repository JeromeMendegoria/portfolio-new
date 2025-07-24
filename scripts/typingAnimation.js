const word = "Developer";
let speed = 350; // typing speed in ms
let isTyping = false;
let typingInterval;
let currentIndex = 0;
const textElement = document.getElementById("typing-text");

function typeLetterByLetter() {
	if (currentIndex < word.length) {
		textElement.textContent += word[currentIndex];
		currentIndex++;
	} else {
		clearInterval(typingInterval);
		isTyping = false;
	}
}

export function enableTyping(customSpeed = 150) {
	if (isTyping) return;
	speed = customSpeed;
	textElement.textContent = "";
	currentIndex = 0;
	isTyping = true;
	typingInterval = setInterval(typeLetterByLetter, speed);
}

export function disableTyping() {
	clearInterval(typingInterval);
	isTyping = false;
	textElement.textContent = ""; // Optional: remove text when stopped
	currentIndex = 0;
}
