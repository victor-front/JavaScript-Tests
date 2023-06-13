const paia = () => `
	<div class="sec-el">
	</div>
`

const a = 5;
const a1 = false;
const time = 1000;

function add(){
	if(!a1){
		for(c=0;c<a;c++){
			document.querySelector(".sec-body").innerHTML += paia();
		}
	}else{
		document.querySelector(".sec-body").innerHTML += paia();
		setTimeout(()=>{
			add();
		}, time);
	}
}add();