function getOrders(){

    let name = document.getElementById("name").value

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
          return fetch('http://localhost:8080/delivery?name='+name, {
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
            tr.append("<td>" + record.items + "</td>");
            tr.append("<td>" + record.address["postcode"] + ", " + record.address["street"] + " " + record.address["housenumber"] + "</td>");
            tr.append("<td>" + record.items + "</td>");
            tr.append("<td>" + record.price +"€" + "</td>");
            tr.append("<td>" +
            "<button type='button' onclick='deleteOrder(this.id)' class='btn btn-warning' id=" + record.id + ">als ausgeliefert markieren</button>" +
            "</div></td>");
            $("#productsTable").append(tr);
          });
          IncDec();
      }
      
    };