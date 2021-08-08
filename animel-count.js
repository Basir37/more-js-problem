function animalCount(miles) {
    const amimalDFirst10Miles = 10;
    const amimalDSecond10Miles = 50;
    const amimalDRestMiles = 100;
    if (miles <= 10) {
        const count = miles * amimalDFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const first10 = 10 * amimalDFirst10Miles;
        const restMiles = miles - 10;
        const second10 = restMiles * amimalDSecond10Miles;
        const totalAnimals = first10 + second10;
        return totalAnimals;
    }
    else {
        const first10 = 10 * amimalDFirst10Miles;
        const second10 = 10 * amimalDSecond10Miles;
        const restMiles = miles - 20;
        const animalRest = restMiles * amimalDRestMiles;
        const totalAnimals = first10 + second10 + animalRest;
        return totalAnimals;
    }
}
const animals = animalCount(35);
console.log(animals);