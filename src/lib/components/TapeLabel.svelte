<script>
	import { key } from '$lib/store.js';
</script>

<div class="wrapper">
	<p class="tape-label">3 notes in the key of {$key}</p>
	<div class="serrated-edge">
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
	</div>
	<div class="serrated-edge shadow">
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		position: relative;
	}
	svg polygon {
		fill: #fcf9f3;
	}
	svg {
		height: 6px;
		width: 6px;
	}
	p {
		margin: 0px;
		font-family: 'Caveat';
		font-size: 1.1rem;
	}
	.tape-label {
		background-color: #fcf9f3;
		border-left: 2px solid #f6f6f6;
		padding: 7px 15px;
		padding-right: 20px;
		box-shadow: 0px 1px #c6c6c6;
		margin-left: -10px;
		position: relative;
		z-index: 1;
	}
	.serrated-edge {
		right: 0px;
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 1;
	}
	.serrated-edge.shadow {
		position: relative;
		left: -7px;
		top: 1px;
		z-index: 0;
	}
	.serrated-edge.shadow svg polygon {
		height: 6px;
		width: 6px;
	}
	.serrated-edge.shadow svg polygon {
		fill: #c6c6c6;
	}
</style>
