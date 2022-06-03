let nomeEvento = document.getElementById("nomeEvento");
let dataIni = document.getElementById("dataIni");
// let dataFim = document.getElementById('dataFim')
let numPart = document.getElementById("numPart");
let rua = document.getElementById("rua");
let numeroEnd = document.getElementById("numeroEnd");
let Cidade = document.getElementById("Cidade");
// let eventoDesc = document.getElementById('eventoDesc')
let registrar = document.getElementById("registrar");
let eventostable = document.getElementById("eventos");
registrar.addEventListener("click", () => {
	let evento = [nomeEvento.value, dataIni.value, numPart.value];

	// console.log(evento)
	eventos.push(evento);
	creatable(evento, eventostable);
	evento = [];
	console.log(eventos);
});



var eventos = [];

function mostraevento(evento, tabelapai) {
	
	
}

//não consegui executar tudo, porém tenho clareza de como fazer, o único problema é a sintaxe que tive dificuldade de executar


// Funcionaria assim:

// Ao apertar o botão salvar, ele chamaria uma função evento(), evento() receberia todos os dados do evento (salvados previamenteo por manipulação de dom) e colocaria em um array, array 
// novoevento[], após isso array novo evento poderia entrar em um novo evento[] então eu teria um arrays de arrays. com todos os eventos. Após isso chamaria outra função com um para 
// varrer cada array e montar a estrutura html por meio de innerHTML com um texto ou tabela com todos os dados do array, com o nervosismo fiquei com pouco tempo para estilizar