const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const resultText = document.querySelector('#resultCode');
const body = document.querySelector('#background-generator');
const btnGradient = document.querySelector('#gradient__btn');
const btnCopy = document.querySelector('#gradient__result__copy');
let isChanging = false;

color1.addEventListener('input', changeBackground);
color2.addEventListener('input', changeBackground);
btnGradient.addEventListener('click', randomBackground, false);
btnCopy.addEventListener('click', copyToClipboard, false);

function changeBackground(isRandomBackground) {

	if (isChanging && !isRandomBackground) return;

	isChanging = true;

	resultText.classList.add('gradient__result-animate');
	setTimeout(() => {
		resultText.classList.remove('gradient__result-animate');
		isChanging = false
	}, 1000);

	setTimeout(() => {
		const bgStyle = getBgStyle()
		body.style.background = bgStyle;
		btnGradient.style.background = bgStyle;
		resultText.textContent = getBgStyleCode(bgStyle);
	}, 500);
}

function randomBackground() {
	if (isChanging) return;

	isChanging = true;

	setTimeout(() => {
		color1.value = randomRGB();
		color2.value = randomRGB();
	}, 500)
	changeBackground(isChanging);
}

function randomRGB() {
	return '#000000'.replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
}

function getBgStyle() {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

function getBgStyleCode() {
	return `background: ${getBgStyle()};`
}

function copyToClipboard() {
	document.querySelectorAll('.gradient__result__notification')
		.forEach(item => item.remove())

	const notification = document.createElement('span');
	notification.classList.add("gradient__result__notification");

	navigator.clipboard
		.writeText(getBgStyleCode(getBgStyle()))
		.then(() => {
			notification.textContent = "Code copied! 💪";
		})
		.catch(() => {
			notification.textContent = "🔴 We can't copy the code. :(";
		})
		.finally(() => {
			btnCopy.appendChild(notification)
		})
}

changeBackground();