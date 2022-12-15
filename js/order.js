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
          tr.append("<td>" + record.id + "</td>");
          tr.append("<td>" + record.name + "</td>");
          tr.append("<td>" + record.description + "</td>");
          tr.append("<td>" +
              "<div class='btn-group' role='group' aria-label='Basic outlined example'>" +
              "<button type='button' class='btn btn-outline-light dec'>-</button>" +
              "<button type='button' class='btn btn-outline-light' style='width:100px' type='number' value='0' id='"+record.id+"' disabled>0</button>" +
              "<button type='button' class='btn btn-outline-light inc'>+</button>" +
              "</div></td>");
          tr.append("<td>" + record.price +"€" + "</td>");
          $("#productsTable").append(tr);
        });
        IncDec();
    }
    
});

function order(){
    //let examplePOST = { name: "Aurelius", items: [{item: 1},{item: 1},{item: 1},{item: 2}], adress: {postcode: "42069", street: "JavaEnterprise", housenumber: "187"}}
    //console.log(JSON.stringify(examplePOST))

    let order = {};
    let zipcode = document.getElementById("zipcode").value
    let street = document.getElementById("street").value
    let housenumber = document.getElementById("housenumber").value
    let items = []
    let rows = document.getElementsByTagName("tr")
    for(let i = 1; i<rows.length; i++){
      //console.log("Produkt "+i+" bestelle "+k+" mal");
      k = document.getElementById(i.toString()).value
      for(let j = 0; j < k; j++){
        items.push({item: i})
      }
    }
    order.name = document.getElementById("name")
    order.items = items
    order.adress = {postcode: zipcode, street: street, housenumber:  housenumber}

    console.log(order)
    console.log(JSON.stringify(order))

    fetch("http://localhost:8080/delivery", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(order)
    })

}