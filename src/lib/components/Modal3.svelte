<script>
	export let showModal // boolean
	export let video = null
	let dialog // HTMLDialogElement
	$: if (dialog && showModal) dialog.showModal()
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog bind:this={dialog} on:close={() => (showModal = false)} on:click|self={() => dialog.close()}>
	<div class="relative" on:click|stopPropagation>
		<!-- svelte-ignore a11y-autofocus -->
		<button class="w-8 h-8 leading-none absolute top-0 right-0 text-primary font-bold" autofocus on:click={() => dialog.close()}>&#10005;</button>
		<slot>
      <video width="1280" height="720" controls>
        <source src={video} type="video/mp4">
        <track default kind="captions">
      </video>
    </slot>
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>