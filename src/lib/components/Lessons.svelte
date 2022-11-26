<script>
import { lessons } from '$lib/data/lessons.json'
</script>

{#each lessons as { num, icon, title, content} }
<div class="flex-1 flex flex-col items-center lesson-box relative">
  <h5 class="text-lg text-primary font-semibold mb-4">{num}</h5>
  {@html icon}
  <h4 class="text-2xl font-semibold text-primary text-center mt-2 mb-16">{title}</h4>
  <h6 class="text-base text-center absolute bottom-8 left-4 right-4">{content}</h6>
</div>
{/each}