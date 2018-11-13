function addItem(){
  let arr = JSON.parse(localStorage.getItem('shoppingList')) || [];
  x = prompt("Enter an item");
  arr.push(x);
  localStorage.setItem('shoppingList', JSON.stringify(arr));
};

function removeItem(item){
  let arr = JSON.parse(localStorage.getItem('shoppingList'));
  arr.forEach(function(value, index){
    if (value == item){
      arr.splice(index, 1);
      console.log(arr)
    };
  });
  localStorage.setItem('shoppingList', JSON.stringify(arr));
  location.reload(true);
};

function populateList() {
  let arr = JSON.parse(localStorage.getItem('shoppingList'));
  arr.forEach(function (grocery) {
    addList(grocery);
    let button = document.createElement("button");
    button.onclick = function() {removeItem(grocery)};
    button.appendChild(document.createTextNode("Delete"))
    document.body.appendChild(button);
  });
};

function confirmer(){
  if (confirm("Do you want to add more items?") == true) {
    addItem();
    location.reload(true);
    confirmer();
  };
};

function addList(item){
  let list = document.createElement("li");
  let textnode = document.createTextNode(item);
  list.appendChild(textnode);
  document.body.appendChild(list)
};

function checkFirstVisit(){
  let arr = JSON.parse(localStorage.getItem('shoppingList')) || [];
  if (arr.length == 0 ){ 
    for (i = 0; i < 5; i++){
      addItem();
    }
  };
  localStorage.setItem('shoppingList', JSON.stringify(arr));
};


populateList();
checkFirstVisit();
