MsgBox = {
	make: function makemsg( //---SISTEMA MAKE---
		title="Sem Título", //Título da Mensagem
		text="Sem Texto", button="Ok", //Conteúdo da Mensagem
		event='MsgBox.delete()'//Evento pós mensagem
		){
		let msgbox = document.createElement('div');//HTML configs
		msgbox.setAttribute('id', 'msgbox');
		msgbox.classList.add('msgbox');
		msgbox.innerHTML = 
		`<div id="msgbox-header" class="msgbox-header">
				<h1 id="title" class="title">${title}</h1>
				<img id="close" class="close" src="img/xicon.png">
			</div>
			<div id="msgbox-body" class="msgbox-body">
				<p id="text" class="text">${text}</p>
			</div>
			<div id="button-container" class="button-container">
				<input id="button" class="button" type="button" value=${button} onclick=${event}>
			</div>`;
		document.body.appendChild(msgbox);//Adicionar elemento no body
	},

	delete: function del(){//Deletar Mensagem
		document.getElementById('msgbox').remove();
	}
}