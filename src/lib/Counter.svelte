<script>
  import {onMount} from 'svelte';

  const hello = () => {
    alert("HELLO WORLD");
  }

   onMount(()=> {
         //console.log(executeAndTime(hello));
    })

  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
