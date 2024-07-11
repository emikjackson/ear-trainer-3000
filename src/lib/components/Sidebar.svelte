<script>
	import Links from './Links.svelte';
	import SettingsSidebar from './SettingsSidebar.svelte';
</script>

<div class="wrapper">
	<div>
		<SettingsSidebar />
	</div>
	<Links />
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
		border-left: 0px;
		border-top: 0px;
		padding: 10px 20px;
		padding-bottom: 20px;
		box-sizing: border-box;
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
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
