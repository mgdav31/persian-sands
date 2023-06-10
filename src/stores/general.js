import { writable, readable, derived } from 'svelte/store';


// Temperature
export const tempCelsius = writable(0);
export const tempKelvin = derived(tempCelsius, $tempCelsius => $tempCelsius+273.15);
export const tempFahrenheit = derived(tempCelsius, $tempCelsius => ($tempCelsius * (9.0/5.0)) + 32);