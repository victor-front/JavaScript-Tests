let nomes = []//Lista dos nomes
let tecl = 0;//Se pode executar/tratar o input da tecla para adicionar ou refazer(resetar os dados)

document.addEventListener("keydown", (event) => {//Sistema de teclas com enter
	let key = event.key;
	if(key == 'Enter'){
		if(tecl == 0){
			adicionar();
		}else{
			refazer();
		}
	}
});

const nomeCom = (nomep) => `
	<li class="nomeCom">${nomep}</li>
`

const refazerCom = () => `
	<button class="refazer" onclick="refazer()">Refazer</button>
`

const caixaCom = () => `
	<div class="caixa">
		<input class="nome" type="text" placeholder="Nome...">
		<button class="add" onclick="adicionar();">Adicionar</button>
		<button class="resul" onclick="ver();">Ver resultado</button>
	</div>
`

const caixa2Com = () => `
	<div class="caixa2">
		<ul class="tabela">
		</ul>
		<button class="refazer" onclick="refazer()">Refazer</button>
	</div>
`

function adicionar(){//Adicionar
	nomes.push(document.querySelector(".nome").value);
	document.querySelector(".nome").value = '';
}

function ver(){//Ver o resultado
	if(nomes != false){
		tecl = 1;
		gerar();
	}else{
		window.alert('Por favor, adicione ao menos um nome.');
	}
}

function refazer(){//Limpa os dados para poder adicionar mais nomes
	nomes = [];
	document.body.innerHTML = caixaCom();
	tecl = 0;
}

function gerar(){//Sistema que gera os nomes na tela
	document.body.innerHTML = caixa2Com();
	for(c=0;c<nomes.length;c++){
		document.querySelector(".tabela").innerHTML += nomeCom(`${nomes[c]}`);
	}
}