MsgBox.make("Victor's Message", '(Asobios)', 'Next', 'etapas[0]()');
etapas = [ //Ordem das mensagens (cada function é uma etapa).
	function(){
	MsgBox.delete();
	MsgBox.make("Victor's Message", 
	'Oh, Perdão! Não sabia que você estava aqui.', 
	'Next', 'etapas[1]()')},
	function(){
	MsgBox.delete();
	MsgBox.make("Victor's Message", 
	'Bem, por enquanto não tem nada aqui, apenas esse mero teste da Box Message.', 'Next', 'etapas[2]()')},
	function(){
	MsgBox.delete();
	MsgBox.make("Victor's Message", 
	'De todo modo, obrigado pela sua presença <3', 'Next')},
]