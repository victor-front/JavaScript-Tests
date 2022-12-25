function criar(){
	let nick = document.getElementById('nick');
	let about = document.getElementById('aboutme');
	if(nick.value == false){
		window.alert('Por favor, digite seu nick.');
	}else if(about.value == false){
		window.alert('Por favor, digite seu about me.');
	}else{
		let gen = [
		document.getElementById('magen'),
		document.getElementById('fegen'),
		document.getElementById('odgen')
		];
		
		if(gen[0].checked){
			let gender = 'garoto';
			gerar(gender);
		}else if(gen[1].checked){
			let gender = 'garota';
			gerar(gender);
		}else if(gen[2].checked){
			let gender = 'não binário';
			gerar(gender);
		}else{
			window.alert('Por favor, cheque seu gênero.');
		}
		function gerar(gender){
			document.getElementById('principal').innerHTML = `
				<h1 class="tunick">${nick.value}</h1>
				<h2 class="gentex">Meu gênero</h2>
				<p class="tugen">${gender}</p>
				<h2 class="gentex">Sobre mim</h2>
				<p class="tudesc">${about.value}</p>
			`;
		}
	}
}