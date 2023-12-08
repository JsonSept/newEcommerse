
let selected = []

let main = document.querySelector('main')

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
        <p>R${item.price}</p>
        <button value='${index}' data-add>Add to cart</button>
      </div>
      <div class="card-body">
      </div>
    </div>
    </main>
    </table>
    `
}).join('')

if(selected == ""){
    
function spinner() {
    // Assuming you have an HTML element with the class "spinner" for displaying the spinner
    let spinnerElement = document.querySelector('.spinner');
    
    // Set the spinner to be visible
    spinnerElement.style.visibility = 'visible';
    
    // Your custom condition (replace this with your actual condition)
    const isConditionMet = spinner();
    
    if (items.length == "") {
        // Hide the spinner when the condition is met
        spinnerElement.style.visibility = 'hidden';
    }
}
    spinner()
}

function add(index) {
    purchased.push(items[index])
    localStorage.setItem('purchased' , JSON.stringify(purchased))
}

main.addEventListener('click' , function(){
    if(event.target.hasAttribute('data-add')){
        // alert('button pressed')
        add(event.target.value)
    }
})

function search() {
    let inputValue = document.getElementById('filterInput').value.toLowerCase();

    
    if (inputValue.trim() === "") {
        alert('Item not found');
        
        loadItems(productPage);
        
    } else {
       
        let filteredItems = productPage.filter(item => item.name.toLowerCase().includes(inputValue));
        loadItems(filteredItems);
    }
}

let searchBtn = document.querySelector(".search");
searchBtn.addEventListener('click', search)