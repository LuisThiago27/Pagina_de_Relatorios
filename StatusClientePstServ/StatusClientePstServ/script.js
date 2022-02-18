/* global fetch, vmatr, vmatr0 */

//função para obter a foto do banco de dados
async function obtFoto(secaoID, tokenID, dtbatidaID, codfilID) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/xml");
    validateForm();
    secaoID = document.querySelector('#secao').value;
    tokenID = document.querySelector('#token').value;
    dtbatidaID = document.querySelector('#dtbatida').value;
    codfilID = document.querySelector('#codfil').value;
    var raw = `secao=${secaoID}&token=${tokenID}&dtbatida=${dtbatidaID}&codfil=${codfilID}`;



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
    var vcid = jsonObj.pstserv.cidade;
    var vest = jsonObj.pstserv.estado;
    var vend = jsonObj.pstserv.endereco;
    var vnred = jsonObj.pstserv.Nred;
    var vbairro = jsonObj.pstserv.bairro;
    var vlatitude = jsonObj.pstserv.latitude;
    var vlongitude = jsonObj.pstserv.longitude;
    var vlocal = jsonObj.pstserv.local;
    var vcep = jsonObj.pstserv.cep;
    //var vmatr0 = jsonObj.pstserv.funcion[1].nome;
    
    
    function initialize() {
    
        var mapOptions = {
        center: new google.maps.LatLng(vlatitude, vlongitude),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
    
    }
    document.onload = initialize();
    /*var table = document.getElementById('mytable');
    table.innerHTML = '';
    table.style = 'width:500px;border:1px solid #CCC;';
    for (var i = 0; i < jsonObj.pstserv.funcion.length; i++) {
        
        var row = `<tr>
                        <td style='border:1px solid #CCC'>Nome: ${jsonObj.pstserv.funcion[i].nome}</td>
                    </tr>
                    <tr>
                        <td>${jsonObj.pstserv.funcion[i].cargo}</td>
                    </tr>
                    <tr>
                        <td>${jsonObj.pstserv.funcion[i].descricao}</td>
                    </tr>
                    
                    <tr>
                        <td>${jsonObj.pstserv.funcion[i].matr}</td>
                    </tr>`;
        //console.log(typeof(jsonObj.pstserv.funcion.length));
        table.innerHTML += row;
    }*/
    
    /*var p = document.getElementById('p');
    p.innerHTML = '';
    var par = `<div class="card" style="text-aling: center;">
               <p><center><strong>Quantidade de funcionários: ${jsonObj.pstserv.funcion.length}</strong></center>
               </div>`;
    p.innerHTML += par;

    var table = document.getElementById('myt');
    table.innerHTML = '';
    for (var i = 0; i < jsonObj.pstserv.funcion.length; i++) {
        
        var row = `<div class="card" style=" background-color:  azure; border: thin solid steelblue; margin-top: 2%; border-radius: 6px; >
                            <div class="card-body" >
                                <table>
                                    <thead>
                                        <tr>
                                            <th style="float:left !important; border: 2px solid #ddd; border-radius: 50%; margin: 1%">
                                                <img src="images/FotoND.jpg" width="60" height="60" id="imgsrv" style="border-radius: 80%;" />
                                            </th>    
                                            <td style="float:left !important; text-align: left; margin-top: 1%">
                                                <i class="fa fa-certificate" style="width:20px !important;"></i>
                                                Nome: ${jsonObj.pstserv.funcion[i].nome}
                                            </td>
                                            <td style="float:left !important; text-align: left; margin-top: 1%">
                                                <i class="fa fa-id-card-o" style="width:20px !important; text-align:center !important;"></i>
                                                ${jsonObj.pstserv.funcion[i].descricao}
                                            </td>
                                            <td style="float:left !important; text-align: left;  margin-top: 1%">
                                                <i class="fa fa-certificate" style="width:20px !important;"></i>
                                                Cargo: ${jsonObj.pstserv.funcion[i].cargo}
                                            </td>
                                            <td style="float:left !important; text-align: left;  margin-top: 1%">
                                                <i class="fa fa-clock-o" style="width:20px !important; text-align:center !important;"></i>
                                                Horário: ${jsonObj.pstserv.funcion[i].hora1}
                                            </td>
                                        </tr>
                                        </thead>
                                </table>
                            </div>
                        </div>
                    `;
        //console.log(typeof(jsonObj.pstserv.funcion.length));
        table.innerHTML += row;
    }*/

    /*var table = document.createElement('table');
        table.style = 'width:500px;border:1px solid #CCC;';
        var tbody = document.createElement('tbody');
        for (let i = 0; i < 10; i++) {
            let tr = document.createElement('tr');
            // 1
            let td = document.createElement('td');
            td.style = 'width:100px;border:1px solid #CCC;';
            let span = document.createElement('span');
            span.innerHTML = 'teste ' + (i + 1);
            td.appendChild(span);
            tr.appendChild(td);
            // 2
            td = document.createElement('td');
            td.style = 'border:1px solid #CCC;';
            span = document.createElement('span');
            span.innerHTML = (i + 1);
            td.appendChild(span);
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        document.body.appendChild(table);
    */
    document.getElementById("secao").innerHTML = myH1.replace('.0', '');
    document.getElementById("cidade").innerHTML = vcid;
    document.getElementById("estado").innerHTML = vest;
    document.getElementById("endereco").innerHTML = vend;
    document.getElementById("Nred").innerHTML = vnred;
    document.getElementById("bairro").innerHTML = vbairro;
    document.getElementById("latitude").innerHTML = vlatitude;
    document.getElementById("longitude").innerHTML = vlongitude;
    document.getElementById("local").innerHTML = vlocal;
    document.getElementById("cep").innerHTML = vcep;
    document.getElementById("nome").innerHTML = vnome;
    //document.getElementById("matr0").innerHTML = vmatr0;




}

function validateForm() {
    var a = document.querySelector('#secao').value;
    var b = document.querySelector('#token').value;
    var c = document.querySelector('#dtbatida').innerHTML;
    var d = document.querySelector('#codfil').value;
    if (a, b, c, d  === null || a, b, c, d  === "") {
        alert("É NECESSÁRIO PREENCHER TODOS OS CAMPOS");
        return false;
    }
}  


