<div class="wrapper">
	<h2 class="tape-label"><slot /></h2>
	<div class="serrated-edge">
		<svg viewBox="0 0 1 1"><polygon points="0,0 1,0 0,1 " /></svg>
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
		fill: var(--tape);
		transform: scaleX(0.5);
	}
	svg {
		height: 6px;
		width: 6px;
	}
	h2 {
		margin: 0px;
		font-family: 'Caveat';
	}
	.tape-label {
		background-color: var(--tape);
		border-left: 2px solid var(--tape);
		padding: 7px 15px;
		padding-right: 20px;
		box-shadow: 0px 1px rgba(0, 0, 0, 0.2);
		margin-left: -15px;
		position: relative;
		z-index: 1;
	}
	.serrated-edge {
		right: 0px;
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 1;
		fill: var(--tape);
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
		fill: var(--tape);
	}
</style>
