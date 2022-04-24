function calculate() {
	const width = document.querySelector('#widVal');
	const height = document.querySelector('#heiVal');
	const posX = document.querySelector('#xVal');
	const posY = document.querySelector('#yVal');
	const myCanvas = document.querySelector('#myCanvas');
	const painter = myCanvas.getContext('2d');

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
	console.log(width.value);
}

function onWindowLoad() {
	const calBtn = document.querySelector('#calBtn');
	calBtn.addEventListener('click', calculate);
	const resBtn = document.querySelector('#resBtn');
	resBtn.addEventListener('click', calculate);
}

window.onload = onWindowLoad;
