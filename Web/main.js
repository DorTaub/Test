function calculate() {
	const width = document.querySelector('#widVal');
	const height = document.querySelector('#heiVal');
	const posX = document.querySelector('#xVal');
	const posY = document.querySelector('#yVal');
	const myCanvas = document.querySelector('#myCanvas');
	const painter = myCanvas.getContext('2d');
	const spanText = document.querySelector('#spanText');

	if (
		width.value === '' ||
		height.value === '' ||
		posX.value === '' ||
		posY.value === ''
	) {
		alert('Invalid Values');
		return;
	}

	painter.strokeStyle = 'black';
	painter.strokeRect(width.value, height.value, posX.value, posY.value);
	painter.fillStyle = 'blue';
	painter.fillRect(width.value, height.value, posX.value, posY.value);
	spanText.innerText = width.value * height.value;
	spanText.style.display = 'inline-block';
}
function clear() {
	const width = document.querySelector('#widVal');
	const height = document.querySelector('#heiVal');
	const posX = document.querySelector('#xVal');
	const posY = document.querySelector('#yVal');
	const myCanvas = document.querySelector('#myCanvas');
	const painter = myCanvas.getContext('2d');
	painter.clearRect(0, 0, 300, 300);
	width.value = '';
	height.value = '';
	posX.value = '';
	posY.value = '';
}

function onWindowLoad() {
	const calBtn = document.querySelector('#calBtn');
	calBtn.addEventListener('click', calculate);
	const resBtn = document.querySelector('#resBtn');
	resBtn.addEventListener('click', clear);
}

window.onload = onWindowLoad;
