<script>
    import { onMount, setContext } from "svelte";
    import { key, url } from "../stores/mapper";

    export let zoom = 8;
    export let center = { lat: -34.397, lng: 150.644 };
    let container;
    let map;

    setContext(key, {
		getMap: () => map,
	});

    onMount(async () => {
        // @ts-ignore
        map = new google.maps.Map(container, {
            zoom,
            center,
            disableDefaultUI: true,
            //styles: mapStyles // optional
        });
    });
</script>

<div bind:this={container} class="full-screen noselect">
    { #if map }
    <slot/>
    { /if }
</div>

<style>
    .full-screen {
        width: 100%;
        height: 100%;
    }
</style>
