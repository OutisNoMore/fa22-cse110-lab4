let statistics = {
  redCar: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (let key in statistics) {
  if (key[0] == 'r') {
    console.log(statistics[key]);
  }
}
