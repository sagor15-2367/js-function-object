var shoppingCard={
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:22
}

// when you know the specific property name,use dot notation to get the property value
var penCount=shoppingCard.pen;
// alternative system
// when you know the specific property name,use dot notation to get the property value
var penCount2=shoppingCard['pen'];

var properties=Object.keys(shoppingCard);
var propertiesValue=Object.values(shoppingCard);
// console.log(shoppingCard);
console.log(properties);
console.log(propertiesValue);