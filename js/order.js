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
      //return fetch('http://localhost:8081/products', {
        return fetch('../test/getResponse.json', {
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
