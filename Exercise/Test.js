const products = [
    {name: 'Apel'},
    {name: 'Jeruk'}
]

const newProducts = 'Anggur'

let productAda = false
for(let i=0; i<products.length; i++){
    if(products[i].name === newProducts) productAda = true 
}

if(productAda === false) products.push({name: newProducts})
console.log(products)