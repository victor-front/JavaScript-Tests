list = {
	value: ['SP','PE','RS'],
	name: ['São Paulo', 'Pernambuco', 'Rio Grande do Sul']
}

function load(){
	section = document.createElement('section');
	section.setAttribute('id', 'list-container');
	section.classList.add('list-container');
	document.body.appendChild(section);
	section.innerHTML = `<select name="lista" id="list"></select>`;
	for(c=0; c<list.value.length; c++){
		document.getElementById('list').innerHTML += `
			<option value="${list.value[c]}">${list.name[c]}</option>
		`;
	}
}