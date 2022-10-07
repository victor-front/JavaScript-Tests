/* make.choice("Victor", 'escolha algo', ['XD', ':o', 'dundundont'], ['amor()', 'amordois()']); */

make.choice("Escolha", '<img src="img/kurt.jpg" alt="img">', ['Seguir em frente', 'Seguir a esquerda', 'Seguir a direita'], ['etapas.norte[0]()', 'etapas.oeste[0]()', 'etapas.leste[0]()']);

etapas = {
	norte: [
	function(){
		message.remove();
		make.choice("Escolha bfg", 
		"Você está rodeado por uma floresta, o que você faz?", 
		['Seguir em frente', 'Seguir a esquerda', 'Seguir a direita'], ['etapas.norte[1]()', 'etapas.oeste[1]()', 'etapas.leste[1]()']);
	}, 
	function(){
		message.remove();
		make.message("Texto", 
		"xd", 
		"confirming", "etapas.norte[0]()");
	}],
	oeste: [
	function(){
		message.remove();
		make.message("Texto", 
		"xd", 
		"confirming", "etapas.norte[0]()");
	}, 
	function(){
		message.remove();
		make.message("Texto", 
		"xd", 
		"confirming", "etapas.norte[0]()");
	}],
	leste: [
	function(){
		message.remove();
		make.message("Texto", 
		"xd", 
		"confirming", "etapas.norte[0]()");
	},
	function(){
		message.remove();
		make.message("Texto", 
		"xd", 
		"confirming", "etapas.norte[0]()");
	}]
}