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
		let choicebox = document.createElement('div');//HTML configs
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
	
	input: function question(
		title="Sem título",
		text="Sem texto",
		button="Ok",
		event=null
		){
		let inputbox = document.createElement('div');
		inputbox.setAttribute('id', 'message');
		inputbox.classList.add('msgbox');
		inputbox.innerHTML = `<div id="msgbox-header" class="msgbox-header">
				<h1 id="title" class="title">${title}</h1>
				<img id="close" class="close" src="img/xicon.png">
			</div>
			<div id="msgbox-body" class="msgbox-body">
				<img src="img/rosaria.png" width="120px" style="image-rendering: pixelated;"><input id="name" type="text" class="input" maxlength="10" placeholder="${text}">
			</div>
			<div id="button-container" class="button-container">
				<input id="button" class="button" type="button" value=${button} onclick=${event}>
			</div>`;
		document.body.appendChild(inputbox);
	},
	
	battle: function battle(player, enemy){
		let battleWindow = document.createElement('div');
		battleWindow.setAttribute('id', 'battleWindow');
		battleWindow.classList.add('battleWindow');
		battleWindow.innerHTML = `
		<div id="containerW" class="containerW">
			<div id="msgContainer" class="msgContainer">
			</div>
			<div id="spriteContainer" class="spriteContainer">
				<img id="enemySprite" class="enemySprite" src="${enemy.sprite}">
			</div>
			<div id="placContainer" class="placContainer">
				<div id="nameContainer" class="nameContainer">
					<h1>Nome</h1>
					<h2>${player.name}</h2>
				</div>
				<div id="hpContainer" class="hpContainer">
					<h1>HP</h1>
					<h2>${player.hp}</h2>
				</div>
				<div id="ppContainer" class="ppContainer">
					<h1>PP</h1>
					<h2>${player.pp}</h2>
				</div>
				<div id="lvContainer" class="lvContainer">
					<h1>LV</h1>
					<h2>${player.lv}</h2>
				</div>
			</div>
		</div>`;
		document.body.appendChild(battleWindow);
	}
}