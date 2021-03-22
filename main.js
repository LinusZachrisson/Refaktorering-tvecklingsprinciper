//KOD 1

let cars = ['volvo', 'saab', 'bmw', 'tesla']; 

// for(car in cars) {
//     console.log(cars[car]);
// }

cars.forEach((car)=> {
    console.log(car);
})

//KOD 2



//let cars = ['volvo', 'saab', 'bmw', 'tesla'];  
let fruits = ['apple', 'banana', 'orange'];

//KOD 3

let flowers = ['rose', 'tulip', 'lily', 'orchid'];

function getFlowers(flower) {
    for(flower in flowers) {
        console.log(flowers[flower]);
    }
}

getFlowers(flowers)
