
// let selected = JSON.parse(localStorage.getItem(``)) || [];

// let main = document.querySelector('main')
// localStorage.setItem(`merch`, JSON.stringify(`merch`));
// merch = JSON.parse(localStorage.getItem('products')) ||[];

// let products = JSON.parse(localStorage.getItem('products')) || [];


//     function add(index){
//         try{
//             let quantityInput = document.querySelector(`#quantity-${index}`);
//             let quantity = parseInt(quantityInput.value);
//             if(isNaN(quantity) || quantity <= 0){
//                 throw new Error(`A value that is Invalid has been Entered.`);
//             }
//             let selectedProduct = {
//                 ...products[index],
//                 amount: quantity,
//             };
//             bought.push(selectedProduct)
//             localStorage.setItem('bought',JSON.stringify(bought))
//         }catch(error){
//             console.error(`There has been an Error in handling quantity input: `, error);
//             alert(`Please Enter a Valid Quantity.`);
//         }
//     }
//     main.addEventListener('click',function (){
//         if (event.target.hasAttribute('data-add')){
//             add(event.target.getAttribute(`data-index`));
//         }
//     });

// // //displaying the items array
// function displayProducts(productArray){
//     try{
//         if (products.length === 0) {
//             // Display spinner when array is empty
//             main.innerHTML = `
//                 <div id="spinner" class="spinner-border text-primary" role="status">
//                     <span class="visually-hidden">Loading...</span>
//                 </div>
//             `
//         } else {
//             // Hide spinner and display content when array is not empty
//             main.innerHTML = productArray.map(function displayArray(item, index) {
//                 return `
//                     <div class='card col-4'>
//                         <img src='${item.prodImage}'>
//                         <div class='container'>
//                             <h2>${item.name}</h2>
//                             <p>${item.description}</p>
//                             <p>R${item.price}</p>
//                         </div>
//                         <button data-index='${index}' data-add>Add To Cart</button>
//                         <br>
//                         <input id='quantity-${index}' class='quantity' placeholder='Enter Quantity' data-quan>
//                         <br>
//                     </div>
//                 `;
//             }).join('');
//         }
//     }catch(error){
//         console.error(`There has been an Error Displaying the Products: `, error);
//         main.innerHTML = `There has been an Error in Displaying the Products.`
//     }
// }
// //  //search button
// Constructor function to create items
function Item(name, price) {
    this.name = name;
    this.price = price;
}

// Create two items using the constructor
const item1 = new Item("Laptop", 999.99);
const item2 = new Item("Smartphone", 499.99);

// Store items in an array
const itemsArray = [item1, item2];

// Convert items array to JSON and store it in localStorage
localStorage.setItem("items", JSON.stringify(itemsArray));

// Retrieve items from localStorage
const retrievedItems = JSON.parse(localStorage.getItem("items"));

// Log retrieved items to the console
console.log(retrievedItems);
