import sum from 'sum-by';
import { cities } from './cities.js';

function populationByRegion(cities, region) {
    let sum = 0;
    for (const city of cities) {
        if (city.region === region) {
            sum += city.population;
        }
    }
    return sum;
}

function populationByRegionFp(cities, region) {
    return cities
        .filter(city => city.region === region)
        .reduce((acc, city) => acc + city.population, 0);
}

console.log(populationByRegion(cities, 'Republic of Bashkortostan'))
console.log(populationByRegionFp(cities, 'Republic of Bashkortostan'))

function listRegions(cities) {
    const region = new Set();
    for (const city of cities) {
        region.add(city.region);
    }
    return region;
}

console.log(listRegions(cities));

function populationByRegionGroup(cities) {
    const population = new Map();
    for (const city of cities) {
        const current = population.get(city.region) ?? 0;
        population.set(city.region, current + city.population);
    }
    return population;
}

console.log(populationByRegionGroup(cities))

console.log(sum(cities, c => c.population))