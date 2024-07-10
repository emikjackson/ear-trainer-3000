<script>
	export let style = '';
	const numLines = 20;
</script>

<div class="wrapper" {style}>
	{#each { length: numLines } as _}
		<div class="line" />
	{/each}
</div>

<style>
	.wrapper {
		width: 100%;
		position: absolute;
		top: 0px;
		right: 0px;
		z-index: 0;
	}
	.line:first-child {
		margin-top: 45px;
	}
	.line {
		width: 100%;
		border-bottom: 1px solid #eaf2f2;
		margin-top: 26px;
	}
</style>
