const quantidades = 4;

const caixa = () => `
	<div class="caixa"></div>
`

function add(){
	for(c=0;c<quantidades;c++){
		document.querySelector(".legrid").innerHTML += caixa();
	}
}add();