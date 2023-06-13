function main(){
	let projetos = {
		nomes: ["Eixos", "Anchor Park Demo", "Teste del día", "Outro testekk", "Choicengine", "Kkkkk", "Vetor", "Nemsei", "a"],
		caminhos: [
		"projects/000_xy/index.html", 
		"projects/001_anchor_park_piloto/index.html",
		"projects/003_pratica_del_dia/index.html",
		"projects/004_prac/index.html",
		"projects/005_choicengine/index.html",
		"projects/007_outrolol/index.html",
		"projects/008_vetor/index.html",
		"projects/009_nem_sei/index.html",
		"projects/010_neverbealone/index.html"
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