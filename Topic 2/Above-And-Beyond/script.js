const changeColor = document.getElementById('changeColor'),
	colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'blue', 'grey'];
let colorIndex = 0;

changeColor.addEventListener('click', () => {
	document.body.style.backgroundColor = colors[colorIndex];
	colorIndex = (colorIndex + 1) % colors.length
});

