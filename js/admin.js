
let items = []
//created an empty array
// ------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------------------
//My constructor function
function MyConstruct(id,name,description,price,url){
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.url = url
}
// ------------------------------------------------------------------------------------------------------------------
//items for the constructor function
let item1 = new MyConstruct(1, 'ACER Aspire' , '15.6" laptop ,4GB RAM',`R${7559.00}`,'https://i.postimg.cc/ZqkpL5JC/item1.webp')
let item2 = new MyConstruct(2, 'PC Monitor' , 'This is better than the fake',`R${3550.00}`,'https://i.postimg.cc/dtpyqVk4/item2.webp')
let item3 = new MyConstruct(3, 'Mouse and KeyBoard' , 'Redragon 4-in-1 Gaming Combo',`R${1049.00}`,'https://i.postimg.cc/WztdvBsB/item3M-K.webp')
let item4 = new MyConstruct(4, 'Gaming Chair' , 'Raidmax DK925 ARGB Gaming Chair-Black',`R${3559.00}`,'https://i.postimg.cc/wBVMsqMK/item4GC.webp')
let item5 = new MyConstruct(5, 'Gaming Controller' , 'Razer Raiju PS4 Analogue Controller',`R${4570.00}`,'https://i.postimg.cc/Z5z57Byt/item4GCR.webp')
let item6 = new MyConstruct(6, 'VOLKANO ELEMENT 15.6"' , 'Laptop backpack',`R${379.00}`,'https://i.postimg.cc/Nfc0b2Xh/item6BP.webp')
let item7 = new MyConstruct(7, 'wifi router' , 'TP-LINK Archer C5',`R${1139.00}`,'https://i.postimg.cc/kGKgqKVm/item7router.jpg')

// pushing items into the array called items
items.push(item1,item2,item3,item4,item5,item6,item7)

// setting local storage and getting the saved data from the local storage
localStorage.setItem("items",JSON.stringify(items))
items = JSON.parse(localStorage.getItem('items'))

// -------------------------------------------------
// Delete button function
let deleteButton = document.querySelector('.delete')
function remove(position ){
    // alert('button clicked')
    items.splice(position,1)
    setItems()
    loadItems()
}
// -------------------------------------------------
let table = document.querySelector('table')
function loadItems(){
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
table.addEventListener('click',function(){
    if(event.target.classList.contains('delete')) {
        remove(event.target.value)
        // alert(event.target.value)
    }
})

function spinner() {
   
    let spinnerElement = document.querySelector('.spinner');

    spinnerElement.style.visibility = 'visible';

    const isConditionMet = checkYourCondition();
    if (items.length == 0) {
        spinnerElement.style.visibility = 'hidden';
    }
}

spinner();
