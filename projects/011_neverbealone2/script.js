const block = document.querySelector(".block");

document.addEventListener("keydown", (event) => {
	const keyName = event.key;
	switch (keyName){
		case 'ArrowUp':
			mudar('cima');
		break;
		case 'ArrowDown':
			mudar('baixo');
		break;
		case 'ArrowLeft':
			mudar('esquerda');
		break;
		case 'ArrowRight':
			mudar('direita');
		break;
	}
});

function mudar(direcao){
	switch (direcao){
		case 'cima':
			block.style.top = '0';
			block.style.transform = 'translate(-50%, 0)';
		break;
		case 'baixo':
			block.style.top = '100%'; 
			block.style.transform = 'translate(-50%, -100%)';
		break;
		case 'esquerda':
			block.style.left = '0';
			block.style.transform = 'translate(0, -50%)';
		break;
		case 'direita': 
			block.style.left = '100%';
			block.style.transform = 'translate(-100%, -50%)';
		break;
	}
	block.style.transform = 'translate(-50%, -50%)';
}