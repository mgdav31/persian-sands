import { writable, readable, derived } from 'svelte/store';
import { PRColor } from '../tools/utils';

/*
// Temperature
export const tempCelsius = writable(0);
export const tempKelvin = derived(tempCelsius, $tempCelsius => $tempCelsius+273.15);
export const tempFahrenheit = derived(tempCelsius, $tempCelsius => ($tempCelsius * (9.0/5.0)) + 32);
*/

export const color_primary = new PRColor("#4f6b6b");
export const color_secondary = new PRColor("#101616");
