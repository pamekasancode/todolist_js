var items = ["Buku", "Bolpen", "Pensil"];

function showItems() {
  var listItem = document.getElementById("list-item");
  listItem.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    var del = "<a class='float-right btn btn-danger' onclick='deleteItem("+i+")'><i class='fa fa-trash'></i></a>";
    var edit = "<a class='float-right mr-1 btn btn-success' onclick='editItem("+i+")'><i class='fa fa-pencil'></i></a>";
    listItem.innerHTML += "<li class='list-group-item'>"+items[i]+del+edit+"</li>";
    
  }
  
}

function addItem() {
  var input = document.querySelector("input[name=item]");
  if (input.value.length > 0) {
    items.push(input.value);
    input.value = "";
  } else {
    alert('Inputan tidak boleh kosong');
  }
  showItems();
}

function editItem(id) {
  var newItems = prompt("Edit", items[id]);
  items[id] = newItems;
  showItems();
  
}

function deleteItem(id) {
  items.splice(id, 1);
  showItems();
  
}

showItems();

function dark(){
  var element = document.body;
  element.classList.toggle("active");
  
}
