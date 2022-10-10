make = {
	message: 
		function makemsg( // ---SISTEMA MAKE---
		text="Sem Texto", // Conteúdo da Mensagem
		c=0,
		event='message.remove()'
		){
		let msgbox = document.createElement('div');//HTML configs
		msgbox.setAttribute('id', 'message');
		msgbox.classList.add('msgbox');
		msgbox.innerHTML = `<p id="text" class="text">${text[c]}</p>`;
		document.getElementById('gameWindow').appendChild(msgbox);//Adicionar elemento no body
		let control = true;

		document.addEventListener('keydown', function(teclado){
			if (control === true){
				if(teclado.keyCode == 65){
					if(c<text.length-1){
						c++
						message.remove();
						make.message(text, c);
					}else{
						control = false;
						`${event}()`;
					}
				}
			}
		})
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
		document.getElementById('gameWindow').appendChild(battleWindow);
	}
}