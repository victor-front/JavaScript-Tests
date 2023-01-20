function main(){
	let projetos = {
		nomes: ["Eixos", "Anchor Park Demo", "Teste del día", "Outro testekk", "Choicengine", "Kkkkk"],
		caminhos: [
		"projects/000_xy/index.html", 
		"projects/001_anchor_park_piloto/index.html",
		"projects/003_pratica_del_dia/index.html",
		"projects/004_prac/index.html",
		"projects/005_choicengine/index.html",
		"projects/007_outrolol/index.html"
		]
	}
	
	for(c=0;c<projetos.nomes.length;c++){
		let prodiv = document.getElementById('projetos');
		let caminho = document.createElement('a');
		caminho.setAttribute('id', 'caminho');
		caminho.setAttribute('href', `${projetos.caminhos[c]}`);
		caminho.setAttribute('target', '_blank');
		caminho.innerHTML = `${projetos.nomes[c]}`;
		caminho.classList.add('proj-caminho');
		prodiv.appendChild(caminho);
	}
}