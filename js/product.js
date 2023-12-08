// creating a new array
let selected = []

let items = JSON.parse(localStorage.getItem('items'))
// setting main to vairable so that we can access it in the html
let main = document.querySelector('main')

// created a function to load my items from the empty array
let table = document.querySelector('table')
function loadItems() {
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
// a function to sort my items price
function sorting(){
    items.sort((a, b) => {
        return a.price - b.price;
    });
    let sortBtn = document.querySelector('.sort');
    sortBtn.addEventListener('click',sorting);
}
sorting();
loadItems();

    



// getting data from my local storage
// below is a table to add in all our item data from the array
main.innerHTML = items.map(function(item,index){
    return `

    <table class="tab col-4 col-5 col-3">
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


