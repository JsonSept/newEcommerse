
let selected = []

let main = document.querySelector('main')

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
}

function sortItems() {
    let sortedProduct = items.slice(); // Create a copy of the array to avoid modifying the original
    sortedProduct.sort((a, b) => a.price - b.price);
    loadItems(sortedProduct);
}

let sortButton = document.querySelector('.sort');
sortButton.addEventListener('click', sortItems);



let items = JSON.parse(localStorage.getItem('items'))
main.innerHTML = items.map(function(item,index){
    return `

    <table class="tab">
    <main>
    <div class="containerP">
    <div class="card" style="width: 18rem;">
      <img src="${item.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <p>${item.price}</p>
        <button value='${index}' data-add>Add to cart</button>
      </div>
      <div class="card-body">
      </div>
    </div>
    </main>
    </table>
    `
    
}).join('')





// //---------------------------------------------------------------

