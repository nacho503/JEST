// const sum = (a,b)=>{
//     return a+b
// }

let fromDollarToYen = function(dollar) {
    return dollar*130.4
}
let fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

let fromYanToPound = function(yan){
    return yan*0.0061
}

// console.log(sum(7,3))

// module.exports = {fromDollarToYen};
module.exports = {fromEuroToDollar};
// module.exports = {fromYanToPound};
