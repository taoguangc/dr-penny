<script>
  import { fly } from 'svelte/transition'
  export let url
</script>

{#key url}
<div
  in:fly={{ y: 50, duration: 500, delay: 300 }}
  out:fly={{ y: -50, duration: 500 }} 
  >
  <slot/>
</div>
{/key}