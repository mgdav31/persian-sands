<script>
    //import mapStyles from './map-styles'; // optional
    import { onMount } from "svelte";

    let container;

    onMount(async () => {
    })
</script>

<div class="sidebar" bind:this={container}>
    <div class="bg-secondary p-small">
        Map Layers
        <input type="color"/>
    </div>

</div>


<style>
    .sidebar {
        padding: 12px 8px;
        font-size: 1.2em;
    }
</style>
