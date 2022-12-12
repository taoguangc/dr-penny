<script>
	import { getContext } from 'svelte'
	import { TABS } from './Tabs.svelte'

	const tab = {}
	const { registerTab, selectTab, selectedTab } = getContext(TABS)

	registerTab(tab)
</script>

<button class="w-8 h-8 md:w-10 md:h-10 mr-2 rounded-full border border-indigo-300 text-xl text-indigo-300 outline-none" class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>

<style>
.selected {
  @apply bg-indigo-300 text-white;
}
</style>