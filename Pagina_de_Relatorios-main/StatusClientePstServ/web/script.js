/* global fetch, vmatr, vmatr0 */

//função para obter a foto do banco de dados
async function obtFoto(secaoID) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/xml");
    validateForm();
    secaoID = document.querySelector('#secao').value;
    var raw = `secao=${secaoID}`;



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
    var vlatitude = jsonObj.pstserv.latitude;
    var vlongitude = jsonObj.pstserv.longitude;
    var vcep = jsonObj.pstserv.cep;
    var vmatr0 = jsonObj.pstserv.funcion[1].nome;
    
    
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
    
    var table = document.getElementById('myt');
    table.innerHTML = '';
    for (var i = 0; i < jsonObj.pstserv.funcion.length; i++) {
        
        var row = `<div class="card">
                            <div class="card-body">
                                <div id="myt"></div>
                                <table>

                                    <thead>
                                        <tr>
                                            <th style="float:left !important; border: 2px solid #ddd; border-radius: 50%">
                                                <img src="images/FotoND.jpg" width="60" height="60" id="imgsrv" style="border-radius: 80%" />
                                            </th>    
                                            <td style="float:left !important; text-align: left">
                                                <i class="fa fa-certificate" style="width:20px !important;"></i>
                                                Nome: ${jsonObj.pstserv.funcion[i].nome}
                                            </td><br/>
                                            <td style="float:left !important; text-align: left">
                                                <i class="fa fa-id-card-o" style="width:20px !important; text-align:center !important;"></i>
                                                ${jsonObj.pstserv.funcion[i].descricao}
                                            </td><br/>
                                            <td style="float:left !important; text-align: left">
                                                <i class="fa fa-certificate" style="width:20px !important;"></i>
                                                Cargo: ${jsonObj.pstserv.funcion[i].cargo}
                                            </td>
                                            <td style="float:left !important; text-align: left; ">
                                            <i class="fa fa-certificate" style="width:20px !important;"></i>
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
    }

   /* var table = document.createElement('table');
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
    document.getElementById("cep").innerHTML = vcep;
    document.getElementById("nome").innerHTML = vnome;
    document.getElementById("matr0").innerHTML = vmatr0;




}

function validateForm() {
    var a = document.querySelector('#secao').value;
    var b = "";//document.querySelector('#token').value;
    if (a === null || a === "") {
        alert("MATRICULA E TOKEN NECESSARIOS");
        return false;
    }
}  