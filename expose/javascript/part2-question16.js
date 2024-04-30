let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (value in statistics) {
    if(value.startsWith('r') || statistics[value] % 2 !== 0) {
        console.log(statistics[value]);
    }
}