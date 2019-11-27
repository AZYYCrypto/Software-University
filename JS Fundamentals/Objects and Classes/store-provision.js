function storeProvision(currentStock, orderedProduct) {
    let products = {};

    for (let i = 0 ; i < currentStock.length; i+= 2) {
        let productName = currentStock[i];
        let productQuantity = Number(currentStock[i + 1]);

        products[productName] = productQuantity;
    }

    for (let i = 0 ; i < orderedProduct.length; i+= 2) {
        let productName = orderedProduct[i];
        let productQuantity = Number(orderedProduct[i + 1]);
    
        if (products.hasOwnProperty(productName)) {
            products[productName] += productQuantity;
        } else {
            products[productName] = productQuantity;
        }
    }

    for (let key in products) {
console.log(`${key} -> ${products[key]}`);

    } 
}




storeProvision(

    ['Chips','5','CocaCola','9','Bananas','14','Pasta','4','Beer','2'], 
    ['Flour','44','Oil','12','Pasta','7','Tomatoes','70','Bananas','30']


);