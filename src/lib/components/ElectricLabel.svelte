<script>
	import { key, numNotes } from '$lib/store.js';
</script>

<div class="wrapper">
	<p>{$numNotes} note{$numNotes === 1 ? '' : 's'} in the key of {$key}</p>
</div>

<style>
	.wrapper {
		position: relative;
		padding: 2px 8px;
		background-color: #121313;
		border-radius: 4px;
		border: 1px solid #434548;
		border-bottom: 1px solid #1c1d1e;
		box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1);
		color: #b7c97c;
		font-weight: 600;
	}
	p {
		margin: 0px;
	}
</style>
