<script>
	import { notes, playingNoteIndex } from '$lib/store.js';
</script>

<div class="wrapper">
	{#each $notes as note, index}
		<div class="light" class:bright={index === $playingNoteIndex}>
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
		box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0);
		transition: all 0.2s ease-out;
	}
	.light.bright {
		background: radial-gradient(#fff6b2, #f6de28);
		box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 0.2);
	}
	.light.bright .reflection {
		opacity: 0.2;
		transition: opacity 0.2s ease-out;
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
