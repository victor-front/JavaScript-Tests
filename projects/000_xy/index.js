let el = document.getElementById('player');
const rect = el.getBoundingClientRect();
console.log(rect);

vel = 8;
document.addEventListener('keydown', function(teclado){
	if(teclado.keyCode == 37){
		function moveRight() {
			let rightPosition = window.getComputedStyle(player).getPropertyValue('left')
			if(player.style.left === "0px"){
			return
		}else {
			let position = parseInt(rightPosition)
			position += 4
			player.style.left = '${position}px'
		}
	}
	}
	if(teclado.keyCode == 39){
		function moveRight() {
			let rightPosition = window.getComputedStyle(player).getPropertyValue('left')
			if(player.style.left === "0px"){
			return
		}else {
			let position = parseInt(rightPosition)
			position -= 4
			player.style.left = '${position}px'
		}
	}
	}
	console.log(teclado.keyCode);
	console.log(document.getElementById('player').getBoundingClientRect());
});