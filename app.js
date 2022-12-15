const btn = document.querySelector("#btn");
function random(number) {
	return Math.trunc(Math.random() * number) + 1;
}
function rgb() {
	return `rgb(${random(255)},${random(255)},${random(255)})`;
}
btn.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(rgb());
	document.body.style.background = `linear-gradient(${random(
		360
	)}deg,${rgb()},${rgb()},${rgb()})`;
});
