<script>
	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="wrapper">
	<div class="row">
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
	</div>
	<div class="row">
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
	</div>
	<div class="row">
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
	</div>
	{#if innerWidth > 600}
		<div class="row extended">
			<div class="speaker-line" />
			<div class="speaker-line" />
			<div class="speaker-line" />
			<div class="speaker-line" />
			<div class="speaker-line" />
			<div class="speaker-line" />
			<div class="speaker-line" />
		</div>
		<div class="row">
			<div class="speaker-line" />
			<div class="speaker-line" />
			<div class="speaker-line" />
			<div class="speaker-line" />
			<div class="speaker-line" />
			<div class="speaker-line" />
			<div class="speaker-line" />
			<div class="speaker-line" />
		</div>
	{/if}
	<div class="row">
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
	</div>
	<div class="row">
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
		<div class="speaker-line" />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		min-height: 68px;
	}
	.row {
		display: flex;
		gap: 5px;
		background-color: rgba(41, 42, 43, 0.1);
		padding: 2px 10px;
		border-radius: 15px;
	}
	.row.extended {
		padding: 2px 22px;
	}
	.speaker-line {
		width: 20px;
		height: 4px;
		border-radius: 8px;
		background-color: #292a2b;
	}

	@media (max-width: 600px) {
		.wrapper {
			min-height: 48px;
		}
		.speaker-line {
			width: 10px;
			height: 4px;
			border-radius: 8px;
			background-color: #292a2b;
		}
		.row.extended {
			padding: 2px 10px;
		}
	}
</style>
