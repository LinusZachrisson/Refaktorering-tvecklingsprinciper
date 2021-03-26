//KOD 1

let cars = ["volvo", "saab", "bmw", "tesla"];

cars.forEach((car) => {
  console.log(car);
});

//KOD 2

let fruits = ["apple", "banana", "orange"];

let carsAndFruits = [...cars, ...fruits];
console.log(carsAndFruits);

//KOD 3

let flowers = ["rose", "tulip", "lily", "orchid"];

function getFlowers(flower) {
  for (let i = 0; i < flower.length; i++) {
    console.log(flower[i]);
  }
}

getFlowers(flowers);
