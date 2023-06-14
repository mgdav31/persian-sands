<script>
    import { getContext } from 'svelte';
	import { renderable } from '../game.js';
    import { PRColor } from '../tools/utils.js';
    import { key } from '../stores/mapper.js';

	export let coords;
	export let stroke = new PRColor("#111111", 1.0)
	export let fill = new PRColor("#EEEEEE", 0.8)
	export let weight = 1;

	const { getMap } = getContext(key);
	const map = getMap();

	// @ts-ignore
	const polygon = new google.maps.Polygon({
            paths: coords,
            strokeColor: stroke.color,
            strokeOpacity: stroke.opacity,
            strokeWeight: weight,
            fillColor: fill.color,
            fillOpacity: fill.opacity,
        });

    polygon.setMap(map);

</script>

<!-- The following allows this component to nest children -->
<slot></slot>