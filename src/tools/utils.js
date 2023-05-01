/*
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