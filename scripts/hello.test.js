import { it, expect } from 'vitest';
import { populationByRegion } from "./hello";

it(populationByRegion, () => {
    expect(populationByRegion([], '')).toBe(0)
});
