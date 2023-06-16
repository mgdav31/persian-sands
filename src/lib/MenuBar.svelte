<script>
    //import mapStyles from './map-styles'; // optional
    import { onMount } from "svelte";

    let container;

    onMount(async () => {
    })
</script>

<div class="menu fw-bold" bind:this={container}>
    Geo-Trainer
</div>

<style>
    .menu {
        position: relative;
        padding: 4px 8px;
        font-size: 1.2em;
        height: 100%;
    }
</style>
