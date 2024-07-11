<script>
	import { settingsModalOpen } from '$lib/store.js';
	import Gear from './icons/Gear.svelte';
</script>

<div class="wrapper">
	<button class="text-button" on:click={() => settingsModalOpen.set(true)}>
		Settings <Gear />
	</button>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		margin-top: 4px;
		margin-bottom: 10px;
		gap: 10px;
	}
</style>
