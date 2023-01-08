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
            tr.append("<td>" + record.price +"€" + "</td>");
            $("#productsTable").append(tr);
          });
          IncDec();
      }
      
  });
  
  function addProduct(){
      //let examplePOST = { name: "Aurelius", items: [{item: 1},{item: 1},{item: 1},{item: 2}], adress: {postcode: "42069", street: "JavaEnterprise", housenumber: "187"}}
      //console.log(JSON.stringify(examplePOST))
    
      let product = {};
      let name = document.getElementById("name").value
      let desc = document.getElementById("desc").value
      let price = document.getElementById("price").value
  
      product.name = name
      product.description = desc
      product.price = price
      console.log(product)
      console.log(JSON.stringify(product))

      fetch("http://localhost:8081/product", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(product)
      })
          .then( response => {
            if (response.ok) { 
                alert("Produkt wurde anglegt"),
                setTimeout(() => {
                    document.location.reload();
                }, 100);
            } else { 
                alert("Fehler: Produkt konte nicht anglegt werden");
            }
          })
  }
  