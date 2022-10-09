let el = document.getElementById('player');
console.log(el);
let cords = el.getBoundingClientRect();
console.log(cords);
let plu = 0;

function mov(){
	el.style.top = `${plu}px`;
	el.style.left = `${plu}px`;
	el.style.transform = `rotate(${plu}deg)`;
	plu+=1;
	setTimeout(()=>{
		mov();
	}, .5)
}

mov();