<script>
	import { key, numNotes } from '$lib/store.js';
	import { NOTES } from '$lib/constants/notes.js';
</script>

<h2>Settings</h2>
<label>
	Key:
	<select bind:value={$key}>
		{#each NOTES as keyOption}
			<option value={keyOption}>{keyOption}</option>
		{/each}
	</select>
</label>

<label>
	Number of notes:
	<select bind:value={$numNotes}>
		{#each [1, 2, 3, 4, 5] as numOption}
			<option value={numOption}>{numOption}</option>
		{/each}
	</select>
</label>

<style>
</style>
