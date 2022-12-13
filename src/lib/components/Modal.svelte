<script>
import { isModalOpen } from '../stores/ModalStore'
export let video
</script>

{#if $isModalOpen}
<div class="w-full xl:w-auto fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md xl:p-10 bg-white">
  <button class="w-8 h-8 text-4xl text-primary absolute z-50 right-2 top-0" on:click={() => isModalOpen.set(false)}>&times;</button>
  <slot>
    <video width="1280" height="720" controls autoplay>
      <source src={video} type="video/mp4">
      <track default kind="captions">
    </video>
  </slot>
</div>
<div class="w-screen h-screen fixed inset-0 z-10 bg-black opacity-50" on:click={() => isModalOpen.set(false)}></div>
{/if}