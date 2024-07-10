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
		background-color: #cfbfb2;
		border-left: 0px;
		border-top: 0px;
		padding: 10px 15px;
		box-sizing: border-box;
		position: fixed;
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
