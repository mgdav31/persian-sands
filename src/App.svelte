<script>
    import { onDestroy, onMount } from "svelte";
    import Counter from "./lib/Counter.svelte";
    import Canvas from "./lib/Canvas.svelte";
    import Background from "./lib/Background.svelte";
    import { HALF_PI } from "./tools/constants";
    import { Random } from "./tools/utils";
    import { chronoSecond, chronoTick } from "./stores/chronos";
    import { tempCelsius, tempFahrenheit, tempKelvin } from "./stores/general";

    //const randy = new Random(16384)
    const randy = new Random(16384);

    onMount(() => {
        console.log(randy.rand_ints);
        console.log(randy.random());
        console.log(randy.random());
        console.log(randy.random());
        console.log(HALF_PI);

        $tempCelsius = -100;
        console.log ($tempCelsius, $tempFahrenheit, $tempKelvin);

    });
 
    const unsubscribe = chronoTick.subscribe((value) => {
        //console.log (value);
    });

    const unsubscribe2 = chronoSecond.subscribe((value) => {
        //console.log ("HERE", value);
        $tempCelsius += 1;
        console.log ($tempCelsius, $tempFahrenheit, $tempKelvin);
    });

    onDestroy(unsubscribe);
    onDestroy(unsubscribe2);
</script>

<div>hello</div>
<div>hello</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }
</style>
