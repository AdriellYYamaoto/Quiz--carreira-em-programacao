  function quest1() {
		let opradio= document.querySelector('input[name="op-backoufront"]:checked').value;
	
		if ( opradio== "front"){
			const lingfront = prompt("Você quer aprender React ou Vue ?");
			alert (" A Linguagem " +lingfront +" é uma linguagem muito presente no dia a dia do desenvolvedor Front-end, Boa escolha !!");
			especializacao();
			
		} else if (opradio=="back"){
			const lingback = prompt("Você quer aprender C# ou Java ?");
			alert ("A linguagem " + lingback +" é uma linguagem muito presente no dia a dia do desenvolvedor back-end, Boa escolha !!");
		 	especializacao();
			
		} else{
			alert('Resposta Invalida!');
		}
}

function especializacao(){
	let esp = '';
	
	while (esp !== '1' && esp !== '2') {
		 esp = prompt ("Você quer continuar se especializando na area ou se desenvolver como um Fullstack ? Digite 1 para especialização e 2 para Fullstack");
	}
	
	if (esp == 1) {
		alert (" Boa !!! acesse:https://www.alura.com.br/cursos-online-programacao?gclid=CjwKCAjwiOCgBhAgEiwAjv5whDE6G7n9o8QCtQ2pVAOYICJhTFBFbordc4TfN7RFExOAzZjMBZ8j8BoCioIQAvD_BwE para dar contunidade ao seu aprendizado");
		tec();
			
	} else if (esp==2) {
		alert (" Boa !!! acesse:https://www.w3schools.com/whatis/whatis_fullstack.asp#:~:text=A%20full%20stack%20web%20developer,ASP%2C%20Python%2C%20or%20Node) para dar contunidade ao seu aprendizado");
		tec();
			
	} else {
		alert('Resposta Invalida!');
	}
}

function tec() {
	let continuarAdd;
	let listaTecnologia=[];
 	 do{
		let tecnologia = prompt ("Quais tecnologias você tem interesse em aprender? ");
		 listaTecnologia.push(tecnologia);
	  continuarAdd = prompt ("Gostaria de acrescentar mais alguma tecnologia? Digite S para sim e N para não");
	
	} while (continuarAdd=='s'|| continuarAdd=='S');
	
	alert('As tecnologia que gostaria de aprender são ' + listaTecnologia);
	

		
}
