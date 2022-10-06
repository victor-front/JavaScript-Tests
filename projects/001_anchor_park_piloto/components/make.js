make = {
	message: 
		function makemsg( //---SISTEMA MAKE---
		title="Sem Título", //Título da Mensagem
		text="Sem Texto", button="Ok", //Conteúdo da Mensagem
		event='message.remove()'//Evento pós mensagem
		){
		let msgbox = document.createElement('div');//HTML configs
		msgbox.setAttribute('id', 'message');
		msgbox.classList.add('msgbox');
		msgbox.innerHTML = 
		`<div id="msgbox-header" class="msgbox-header">
				<h1 id="title" class="title">${title}</h1>
				<img id="close" class="close" onclick=${event} src="img/xicon.png">
			</div>
			<div id="msgbox-body" class="msgbox-body">
				<p id="text" class="text">${text}</p>
			</div>
			<div id="button-container" class="button-container">
				<input id="button" class="button" type="button" value=${button} onclick=${event}>
			</div>`;
		document.body.appendChild(msgbox);//Adicionar elemento no body
	},
	
	choice: function makechoice(
	title="Sem título",
	text="Sem texto",
	escolhas=null,
	event=null
	){
		let choicebox = document.createElement('div');
		choicebox.setAttribute('id', 'message');
		choicebox.classList.add('msgbox');
		choicebox.innerHTML = `<div id="msgbox-header" class="msgbox-header">
				<h1 id="title" class="title">${title}</h1>
				<img id="close" class="close" src="img/xicon.png">
			</div>
			<div id="msgbox-body" class="msgbox-body">
				<p id="text" class="text">${text}</p>
			</div>
			<div id="button-container" class="button-container, flex-con"></div>`;
			
		document.body.appendChild(choicebox);//Adicionar elemento no body
		buttonContainer = document.getElementById('button-container');
		
		for(c=0;c<escolhas.length;c++){
			buttonContainer.innerHTML += `<input id="button${c}" class="button-choice" type="button" value="${escolhas[c]}" onclick=${event[c]}>`;
		}
	},
}