$(document).ready(function() {

      putDataInTable();

      function IncDec() {
        decs = document.querySelectorAll(".dec");
        incs = document.querySelectorAll(".inc");
        decs.forEach((dec) => {
          dec.addEventListener("click",function(e){
            if(e.target.nextElementSibling.value > 0){
              e.target.nextElementSibling.value--;
              e.target.nextElementSibling.innerHTML = e.target.nextElementSibling.value;
            }
          })
        })
        incs.forEach((inc) => {
          inc.addEventListener("click",function(e){
            e.target.previousElementSibling.value++;
            e.target.previousElementSibling.innerHTML = e.target.previousElementSibling.value;
          })
        })
      }
  async function getPromiseOfAllProducts() {
      return fetch('http://localhost:8081/products', {
        method: 'GET',
      })
        .then(function(response) {
          return response.json();
        })
  }
  async function putDataInTable() {
        data = await getPromiseOfAllProducts();
        var tr;
        $.each(data, function(k, record) {
          tr = $("<tr></tr>");
          tr.append("<td id='id'>" + record.id + "</td>");
          tr.append("<td id='name'>" + record.name + "</td>");
          tr.append("<td id='description'>" + record.description + "</td>");
          tr.append("<td id='menge'>" +
              "<div class='btn-group' role='group' aria-label='Basic outlined example'>" +
              "<button type='button' class='btn btn-outline-light dec'>-</button>" +
              "<button type='button' class='btn btn-outline-light' style='width:100px' type='number' value='0' id='value' disabled>0</button>" +
              "<button type='button' class='btn btn-outline-light inc'>+</button>" +
              "</div></td>");
          tr.append("<td id='price'>" + record.price+"€" + "</td>");
          $("#productsTable").append(tr);
        });
        IncDec();
    }
});

function bestelle(){
    let rows = document.getElementsByTagName("tr")
    let bestellung = {}


    for(let i = 1; i<rows.length; i++){
        console.log(rows[i])
    }

    fetch("http://localhost:8080/delivery", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bestellung)
    })

}

  
/*
//const url = 'https://randomuser.me/api/'
const url = "/customerService/getResponse.json"
fetch(url)
    .then( response => 
        data = response.json(),
        //console.log(data)
    )
    .then( data => {
        console.log(data.products)
        //tableData(data.products)
    } );

function tableData (data) {    
    let objectKeys = Object.keys(data);
    let tbl = document.getElementById("productsTable");
    for (let e of data) {
        dataRow = document.createElement('tr');
        dataCell = document.createElement('td');
        dataCell.append(document.createTextNode(e.id));
        dataRow.append(dataCell);
        dataCell = document.createElement('td');
        dataCell.append(document.createTextNode(e.name));
        dataRow.append(dataCell);
        dataCell = document.createElement('td');
        dataCell.append(document.createTextNode(e.desc));
        dataRow.append(dataCell);
        dataCell = document.createElement('td');

        //var html = "<div class='btn-group' role='group' aria-label='Basic outlined example'><button type='button' class='btn btn-outline-light dec'>-</button><button type='button' class='btn btn-outline-light' type='number' value='0' disabled>0</button><button type='button' class='btn btn-outline-light inc'>+</button></div>";
        //var htmlObject = document.createElement('div');
        //htmlObject.innerHTML = html;

        var html = '<div id="myDiv"></div>';
        var temp = document.createElement('div');
        temp.innerHTML = html;
        var htmlObject = temp.firstChild;

        dataCell.append(document.createTextNode(innerHTML("<button type='button' class='btn btn-outline-light dec'>-</button>")));
        //.innerHTML("<div class='btn-group' role='group' aria-label='Basic outlined example'><button type='button' class='btn btn-outline-light dec'>-</button><button type='button' class='btn btn-outline-light' type='number' value='0' disabled>0</button><button type='button' class='btn btn-outline-light inc'>+</button></div>")
        dataRow.append(dataCell);
        dataCell = document.createElement('td');
        dataCell.append(document.createTextNode(e.price));
        dataRow.append(dataCell);
        tbl.append(dataRow);
    };
};*/
