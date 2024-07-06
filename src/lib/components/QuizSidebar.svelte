<script>
	import Settings from './Settings.svelte';
</script>

<div class="wrapper">
	<Settings />
</div>

<div class="offset" />

<style>
	.offset {
		height: 100vh;
		width: var(--sidebar-width);
	}
	.wrapper {
		height: 100vh;
		width: var(--sidebar-width);
		background-color: #634427;
		border-right: 4px solid #3b2917;
		padding: 10px;
		box-sizing: border-box;
		position: fixed;
	}
	@media (max-width: 900px) {
		.offset {
			display: none;
		}
		.wrapper {
			display: none;
		}
	}
</style>
