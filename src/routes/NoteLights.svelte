<script>
	import { notes } from '$lib/store.js';
</script>

<div class="wrapper">
	{#each notes as note}
		<div class="light">
			<div class="reflection"></div>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: space-between;
		padding: 0px 50px;
	}
	.light {
		width: 30px;
		height: 30px;
		border-radius: 30px;
		/* background-color: #aaa36e; */
		background: radial-gradient(#aaa36e, #787244);
		position: relative;
	}
	.reflection {
		position: absolute;
		top: 5px;
		right: 6px;
		width: 5px;
		height: 5px;
		border-radius: 5px;
		background-color: white;
		opacity: 0.4;
	}
</style>
