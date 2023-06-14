/*****************************************************************************
 * Chrono Stores - Time related objects
 * 
 * @author: Michael Davis
 *****************************************************************************/
import { writable, readable, derived } from 'svelte/store';

const tps = 20;

// Generates a 'tick' based on the above ticks-per-second
export const chronoTick = readable(0, function start(set) {
    let lastTime = new Date().getTime();
    let ticks = 0;

    const interval = setInterval(() => {
        let currTime = new Date().getTime();
        let diff = Math.min(currTime - lastTime - (1000.0 / tps), tps);
        if (diff >= 0) {
            lastTime = currTime - diff;
            set(++ticks);
        }
    }, 1);

    return function stop() {
        clearInterval(interval);
    };
});

// A derived second from the above ticks, aka (tick/tps) 
export const chronoSecond = derived(chronoTick, $chronoTick => Math.floor($chronoTick / tps));
