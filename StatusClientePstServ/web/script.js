/* global fetch */

//função para obter a foto do banco de dados
async function obtFoto (secaoID,matrID){
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/xml");
	validateForm();
	secaoID = document.querySelector('#secao').value;
        matrID = document.querySelector('#matr').value;
	var raw = `secao=${secaoID}&matr=${matrID}`;
	

    
	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};
	
	//var baseurl = "http://10.1.1.2:8080/SatWebService/api/executasvc/obterFoto";
	  var baseurl = "https://mobile.sasw.com.br/SatWebServiceHomolog/api/executasvc/obterFuncion?";
	
	fetch(baseurl, requestOptions)
	.then(response => response.text())
	//.then(result => console.log(JSON.parse(result))) 
	.then(result => populateHeader(JSON.parse(result)))
	.catch(error => console.log('error', error));
	//populateHeader(JSON.parse(result));
	// return result;
  }

  

  function populateHeader(jsonObj) {
	var myH1 = jsonObj.pstserv.secao;  
	var vnome = jsonObj.pstserv.nome;
        var vcod = jsonObj.pstserv.cidade;
        var vmatr = jsonObj.pstserv.funcion.matr;
        var vmnome = jsonObj.pstserv.funcion.nome;
	document.getElementById("secao").innerHTML = myH1.replace('.0', '');
	document.getElementById("nome").innerHTML = vnome;
        document.getElementById("cidade").innerHTML = vcod;
        document.getElementById("matr").innerHTML = vmatr;
        document.getElementById("mnome").innerHTML = vmnome;
	
	
  
  }

  function validateForm() {
	var a = document.querySelector('#secao').value;
	var b = "";//document.querySelector('#token').value;
	if (a === null || a === "") {
	  alert("MATRICULA E TOKEN NECESSARIOS");
	  return false;
	}
  }  