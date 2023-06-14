import { derived } from "svelte/store";

/*
 * ALWAY REMEMBER THE PPP: THE PRICE WE PAY FOR PERFORMANCE
 *
 * Returns a pre-generated random byte between 0-99.
 * This is especially important for hot-paths that
 * can't tolerate the time to call Math.random() directly
 * (or deal with floats).
 */
export class Random {
    constructor(max) {
        this.max_rand_ints = max;
        this.next_int = 0;
        this.rand_ints = new Uint8Array(this.max_rand_ints);
        for (let i = 0; i < this.max_rand_ints; i++) {
            this.rand_ints[i] = Math.floor(Math.random() * 100);
        }
    }
    random() {
        const r = this.rand_ints[this.next_int++];
        if (this.next_int >= this.max_rand_ints)
            this.next_int = 0;
        return r;
    }
}

export class PRColor {
    constructor(color, opacity=1.0) {
        this.color = color;
        this.opacity = opacity
    }
}

export function deriveObject (obj) {
	const keys = Object.keys(obj);
	const list = keys.map(key => {
		return obj[key];
	});
	return derived(list, (array) => {
		return array.reduce((dict, value, i) => {
			dict[keys[i]] = value;
			return dict;
		}, {});
	});
}