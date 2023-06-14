import { getContext, onMount, onDestroy } from 'svelte';
import { writable, derived } from 'svelte/store';

const GOOGLE_KEY = "AIzaSyCBmS55mBhB_tjNehd9Wt-LrZcAYl75omc";

export const url = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_KEY + "&callback=initMap";
export const key = Symbol();
