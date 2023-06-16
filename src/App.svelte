<script>
    import { onDestroy, onMount } from "svelte";
    import { chronoSecond, chronoTick } from "./stores/chronos";
    import { url } from "./stores/mapper";
    import Grid from "./lib/Grid.svelte";
    import Map from "./lib/Map.svelte";
    import MapShape from "./lib/MapShape.svelte";
    import MenuBar from "./lib/MenuBar.svelte";
    import SideBar from "./lib/SideBar.svelte";

    export let map_ready;
    let sbWidth=300;

    const unsubscribe = chronoSecond.subscribe((value) => {
        console.log(value);
    });
    onDestroy(unsubscribe);

    const triangleCoords = [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 25.774, lng: -80.19 },
    ];

    const triangleCoords1 = [
        { lat: 24.774, lng: -80.19 },
        { lat: 19.466, lng: -66.118 },
        { lat: 32.321, lng: -69.757 },
        { lat: 24.774, lng: -80.19 },
    ];
</script>

<svelte:head>
    <script defer async src={url}></script>
</svelte:head>

<Grid sbWidth={sbWidth}>
    <div slot="header">
        <MenuBar />
    </div>
    <div slot="body" class="h-100">
        {#if map_ready}
        <Map zoom={5}>
            <MapShape coords={triangleCoords} />
            <MapShape coords={triangleCoords1} />
        </Map>
        {/if}
    </div>
    <div slot="sidebar">
        <SideBar />
    </div>
</Grid>

<style>
</style>
