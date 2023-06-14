<script>
    //import mapStyles from './map-styles'; // optional
    import { createEventDispatcher } from 'svelte';
    import { onMount } from "svelte";

    const dispatch = createEventDispatcher();
    export let width = 8;
    let clicked = false;
    let lastX = 0;

    function handleMousedown(e) {
        console.log (e.clientX);
        clicked = true;
        lastX = e.clientX;
    }

    function handleMouseup(e) {
        clicked = false;
    }

    function handleMousemove(e) {
        if (clicked) {
            dispatch('realign', { dist: e.clientX});
        }        
    }
</script>

<svelte:window on:mousemove={handleMousemove} on:mouseup={handleMouseup} />

<div class="drag noselect" style="left: {-1*(width/2)}px; width: {width}px" on:mousedown={handleMousedown}></div>

<style>
    .drag {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 3;
        cursor: w-resize;
    }

    .drag:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
</style>
