<script>
	import { settingsModalOpen } from '$lib/store.js';
	import Gear from './icons/Gear.svelte';
</script>

<div class="wrapper">
	<button on:click={() => settingsModalOpen.set(true)}>
		Settings <Gear />
	</button>
	<!-- <button on:click={() => settingsModalOpen.set(true)}>
		About <Gear />
	</button> -->
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

	button {
		display: flex;
		align-items: center;
		padding: 0px;
		gap: 4px;
		background-color: transparent;
		border: 0px;
		cursor: pointer;
		color: #272727;
	}

	button:hover {
		color: #2c2c2c;
	}
</style>
