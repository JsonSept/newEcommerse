let selected = JSON.parse(localStorage.getItem('selected'))

let table = document.querySelector('table');


function loadItems(){d
    let products = items.map(function(item,index){
        console.log(item);
        console.log(index);
        return `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.description}</td>
                <td><img src='${item.url}'</td>
                <td><button class='delete'>Edit</button></td>
                <td><button class='delete' value=${index}>Delete</button></td>
    
            </tr>`
    })
    table.innerHTML = products.join('')
}

loadItems()
// --------------------------------------------------------
function setItems(){
    localStorage.setItem("items",JSON.stringify(items))
    items = JSON.parse(localStorage.getItem('items')) 
    
}
let main = document.querySelector('.h1');
main.innerText = "Checkout Page";

let purchasedItems;
//parse array from local storage or if it fails set it as an empty array

    purchasedItems = JSON.parse(localStorage.getItem(`bought`) || []);
    
    purchasedItems = [];