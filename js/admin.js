
let items = []

// ------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------------------

function MyConstruct(id,name,description,price,url){
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.url = url
}
// ------------------------------------------------------------------------------------------------------------------
//Second item created using constructor
let item1 = new MyConstruct(1, 'ACER Aspire' , '15.6" laptop ,4GB RAM',`R${7559.00}`,'https://i.postimg.cc/ZqkpL5JC/item1.webp')
let item2 = new MyConstruct(2, 'PC Monitor' , 'This is better than the fake',`R${3550.00}`,'https://i.postimg.cc/dtpyqVk4/item2.webp')
let item3 = new MyConstruct(3, 'Mouse and KeyBoard' , 'Redragon 4-in-1 Gaming Combo',`R${1049.00}`,'https://i.postimg.cc/WztdvBsB/item3M-K.webp')
let item4 = new MyConstruct(4, 'Gaming Chair' , 'Raidmax DK925 ARGB Gaming Chair-Black',`R${3559.00}`,'https://i.postimg.cc/wBVMsqMK/item4GC.webp')
let item5 = new MyConstruct(5, 'Gaming Controller' , 'Razer Raiju PS4 Analogue Controller',`R${4570.00}`,'https://i.postimg.cc/Z5z57Byt/item4GCR.webp')
let item6 = new MyConstruct(6, 'VOLKANO ELEMENT 15.6"' , 'Laptop backpack',`R${379.00}`,'https://i.postimg.cc/Nfc0b2Xh/item6BP.webp')
let item7 = new MyConstruct(7, 'wifi router' , 'TP-LINK Archer C5',`R${1139.00}`,'https://i.postimg.cc/Nfc0b2Xh/item6BP.webp')


items.push(item1,item2,item3,item4,item5,item6,item7)
    
localStorage.setItem("items",JSON.stringify(items))
items = JSON.parse(localStorage.getItem('items')) 
