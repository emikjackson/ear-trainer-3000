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
		background-color: #aed4c9;
		border-left: 0px;
		border-top: 0px;
		padding: 10px 15px;
		box-sizing: border-box;
		position: fixed;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
	}
	@media (max-width: 900px) {
		.offset {
			width: 0px;
		}
		.wrapper {
			display: none;
		}
	}
</style>
