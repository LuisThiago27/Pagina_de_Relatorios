/* global fetch */

//função para obter a foto do banco de dados
async function obtFoto (matrID){
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/xml");
	validateForm();
	matrID = document.querySelector('#matr').value;
	const tokID = document.querySelector('#token').value;
	var raw = `matr=${matrID}&token=${tokID}`;
	

    
	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};
	
	//var baseurl = "http://10.1.1.2:8080/SatWebService/api/executasvc/obterFoto";
	  var baseurl = "https://mobile.sasw.com.br/SatWebServiceHomolog/api/executasvc/obterFoto";
	
	fetch(baseurl, requestOptions)
	.then(response => response.text())
	//.then(result => console.log(JSON.parse(result))) 
	.then(result => populateHeader(JSON.parse(result)))
	.catch(error => console.log('error', error));
	//populateHeader(JSON.parse(result));
	// return result;
  }

  

  function populateHeader(jsonObj) {
	var myH1 = jsonObj.funcion.matr;  
	var imgpath = jsonObj.funcion.faceid;
	var vnome = jsonObj.funcion.nome;
        var vcod = jsonObj.funcion.codigo;
	document.getElementById("matr").innerHTML = myH1.replace('.0', '');
	document.getElementById("nome").innerHTML = vnome;
        document.getElementById("codigo").innerHTML = vcod.replace('.0', '');
	if (imgpath == "" || imgpath == null){
	  imgpath = "/images/FotoND.jpg";
	} else {
	  document.getElementById("imgsrv").src = imgpath;
	  loadCamera();
	  //document.getElementById("imageRead").addEventListener("click", document.getElementById("imgsrv").src, false);
	}
	
  
  }

  function validateForm() {
	var a = document.querySelector('#matr').value;
	var b = "";//document.querySelector('#token').value;
	if (a == null || a == "") {
	  alert("MATRICULA E TOKEN NECESSARIOS");
	  return false;
	}
  }  