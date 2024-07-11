<script>
	import { settingsModalOpen } from '$lib/store.js';
	import Gear from './icons/Gear.svelte';
	import Links from './Links.svelte';
</script>

<div class="wrapper">
	<Links />
	<button class="text-button" on:click={() => settingsModalOpen.set(true)}>
		Settings <Gear />
	</button>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 4px;
		margin-bottom: 8px;
		gap: 10px;
		align-items: center;
	}
</style>
