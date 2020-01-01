const data = 'tomatoes 10 coffee 5 olives 100 coffee 40';

function storeProductsInfo(products) {
    const info = data.split(' ');
    const arrOfTuples = [];

    for (let i = 0; i < info.length; i+= 2) {
        arrOfTuples.push([[info[i], [info[i+1]]]]);
    }

    const map = new Map(arrOfTuples);

    console.log(map);
     
}




