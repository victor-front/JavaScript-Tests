/* make.choice("Victor", 'escolha algo', ['XD', ':o', 'dundundont'], ['amor()', 'amordois()']); */
let introtitle = 'Introdução';
let okay = 'Próximo';

make.message(introtitle, 'Olá, bem vind@ ao mundo dos pinheiros!', okay, 'etapas[0]()');

let etapas = [
	function(){
		message.remove();
		make.message(introtitle, 'Como posso te chamar?', okay, 'etapas[1]()');
	},
	
	function(){
		message.remove();
		make.input(introtitle, 'Nome', 'Feito', 'etapas[2]()');
	},
	
	function(){
		if(document.getElementById('name').value != false){
			let nome = document.getElementById('name').value;
			message.remove();
			make.message(introtitle, `${nome}, é um prazer te conhecer!`, okay);
		}else{
			etapas[1]();
		}
	}
]