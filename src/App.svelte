<script>
  import {onMount} from 'svelte';  
  import Counter from './lib/Counter.svelte'
  import Canvas from './lib/Canvas.svelte'
  import {HALF_PI} from './tools/constants'
  import {Random} from './tools/utils'


  //const randy = new Random(16384)
  const randy = new Random(16384)
  
  const initinit = () => {
    console.log (randy.rand_ints);
    console.log (randy.random());
    console.log (randy.random());
    console.log (randy.random());
    console.log (HALF_PI);
  }
  

  onMount(() => {
    initinit();
  })

</script>

<svelte:head>
  <script src="/src/artsy/utils.js"></script>
  <script src="/src/artsy/game.js"></script>
  <script src="/src/artsy/cursor.js"></script>
  <script src="/src/artsy/elements.js"></script>
  <script src="/src/artsy/particles.js"></script>  
  <script src="/src/artsy/spigotCombine.js"></script>  
  <script src="/src/artsy/menu.js"></script>
</svelte:head>

<main>
  <div id="gameWrapper">
    <input type="text" id="fps-counter" />
    <Canvas canvasId="mainCanvas"/>
  </div>

  <div class="card">
    <select id="pensize"></select>
    <input type="checkbox" id="overwriteCheckbox" />
    <input type="text" id="speedSlider" />
    <div id="menuWrapper">
      <table id="elementTable"></table>
    </div>
  </div>
  <div class="card">
    <button id="clearButton">Clear</button>
    <button id="saveButton">Save</button>
    <button id="loadButton">Load</button>
  </div>
  <div class="card">
      <select id="spigot1Type"></select>
      <select id="spigot2Type"></select>
      <select id="spigot3Type"></select>
      <select id="spigot4Type"></select>
      <select id="spigot1Size"></select>
      <select id="spigot2Size"></select>
      <select id="spigot3Size"></select>
      <select id="spigot4Size"></select>

  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>

