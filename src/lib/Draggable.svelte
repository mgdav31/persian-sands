<script>
    //import mapStyles from './map-styles'; // optional
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    export let direction = "top";
    export let size = 6;
    let clicked = false;

    function handleMousemove(e) {
        if (clicked) {
            dispatch("dragging", { dragX: e.clientX, dragY: e.clientY });
        }
    }
</script>

<svelte:window on:mousemove={handleMousemove} on:mouseup={() => clicked = false} />

<!-- TODO: see if this can be simplified -->
{#if direction === 'top'}
<div
    class="drag noselect"
    class:click={clicked}
    style="top: {-1 * (size / 2)}px; height: {size}px; left: 0; right: 0; cursor: n-resize;"
    on:mousedown={() => clicked = true}
/>
{:else if direction === 'right'}
<div
    class="drag noselect"
    class:click={clicked}
    style="right: {-1 * (size / 2)}px; width: {size}px; top: 0; bottom: 0; cursor: e-resize;"
    on:mousedown={() => clicked = true}
/>
{:else if direction === 'bottom'}
<div
    class="drag noselect"
    class:click={clicked}
    style="bottom: {-1 * (size / 2)}px; height: {size}px; left: 0; right: 0;  cursor: s-resize;"
    on:mousedown={() => clicked = true}
/>
{:else}
<div
    class="drag noselect"
    class:click={clicked}
    style="left: {-1 * (size / 2)}px; width: {size}px; top: 0; bottom: 0; cursor: w-resize;"
    on:mousedown={() => clicked = true}
/>
{/if}

<style>
    .drag {
        position: absolute;
        z-index: 3;
        cursor: w-resize;
    }

    .click {
        background-color: #5161f6;
    }
</style>
