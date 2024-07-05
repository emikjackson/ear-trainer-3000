<script>
	import { key, AVAILABLE_KEYS } from '$lib/store.js';
</script>

<div class="wrapper">
	<h2>Settings</h2>
	<label>
		Key:
		<select bind:value={$key}>
			{#each AVAILABLE_KEYS as keyOption}
				<option value={keyOption}>{keyOption}</option>
			{/each}
		</select>
	</label>
</div>

<div class="offset" />

<style>
	.offset {
		height: 100vh;
		width: 300px;
	}
	.wrapper {
		height: 100vh;
		width: 300px;
		background-color: #634427;
		border-right: 4px solid #3b2917;
		padding: 10px;
		box-sizing: border-box;
		position: fixed;
	}
</style>
