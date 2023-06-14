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

    .menu2 {
        position: absolute;
        top: 16px;
        left: 16px;
        width: 600px;
        height: 40px;
        padding: 4px 20px;
        background-color: rgba(40, 40, 40, 0.95);
        font-size: 1.2em;
        /*border: 1px solid black;*/
        border-radius: 8px;
    }
</style>
