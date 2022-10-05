const victor = {
	nome: 'Victor',
	idade: 17,
	hobbies: ['Jogar jogos antigos', 'Programar', 'Escutar músicas', 'Assistir Youtube']
}

//Converter objeto para JSON

const jsonData = JSON.stringify(victor);
console.log(jsonData);

//Converter JSON para objeto

const objData = JSON.parse(jsonData);
console.log(objData);