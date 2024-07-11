<script>
	import SettingsSidebar from './SettingsSidebar.svelte';
</script>

<div class="wrapper">
	<SettingsSidebar />
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
		background-color: #fffffc;
		border-right: 1px solid rgba(0, 0, 0, 0.2);
		/* background: linear-gradient(#d5e8e3, #bbdad1); */
		/* background: linear-gradient(#e4f3e5, #bbd7d5); */

		/* background: linear-gradient(#efdbb5, #e0bc83); */
		border-left: 0px;
		border-top: 0px;
		padding: 10px 20px;
		box-sizing: border-box;
		position: fixed;
		/* box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1); */
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
