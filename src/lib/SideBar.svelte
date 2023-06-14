<script>
    //import mapStyles from './map-styles'; // optional
    import { createEventDispatcher } from 'svelte';
    import { onMount } from "svelte";
    import Draggable from './Draggable.svelte';

    let container;

    onMount(async () => {
    })
</script>

<div class="sidebar" bind:this={container}>
    Hello World
    <input type="color"/>
</div>

<Draggable on:realign></Draggable>


<style>
    .sidebar {
        padding: 4px 8px;
        font-size: 1.2em;
    }
</style>
