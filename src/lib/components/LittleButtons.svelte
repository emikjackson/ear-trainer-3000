<script>
	import { key, scale, regenerateNotes } from '$lib/store.js';
	import Rotate from '$lib/components/icons/Rotate.svelte';
	import { playNote } from '$lib/helpers.js';
	let innerWidth;

	// Play root note (first note in scale)
	const playRootNote = () => {
		const rootNoteObj = $scale[0];
		playNote(rootNoteObj);
	};
</script>

<svelte:window bind:innerWidth />

<div class="wrapper">
	<div class="buttons">
		<button on:click={regenerateNotes}
			>{innerWidth < 600 ? 'New Notes' : 'Get New Notes'}
			<div class="circle-button" />
		</button>
		<button on:click={playRootNote}
			>{innerWidth < 600 ? 'Root Note' : 'Hear Root Note'}
			<div class="circle-button" />
		</button>
	</div>
	<div class="display">
		<Rotate width={23} />
		{$key}
		<div class="reflection" />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.buttons {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 5px;
	}

	button {
		border: 0px;
		font-size: 0.9rem;
		text-transform: uppercase;
		background-color: transparent;
		color: #585858;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		padding: 0px;
		box-shadow: none;
		margin-right: 8px;
	}

	.circle-button {
		width: 20px;
		height: 19px;
		border-radius: 20px;
		background-color: var(--blue-light);
		border-bottom: 3px solid var(--blue-dark);
		position: relative;
		box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1);
	}

	button:hover {
		color: #616161;
	}

	button:hover .circle-button {
		background-color: #179ae6;
	}

	button:active .circle-button {
		margin-top: 2px;
		border-bottom: 1px solid var(--blue-dark);
	}

	.display {
		padding: 4px;
		background-color: #121313;
		border-radius: 25px;
		margin-top: -4px;
		margin-bottom: -4px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		border: 1px solid #434548;
		border-bottom: 1px solid #1c1d1e;
		box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1);
		color: var(--green-light);
		font-weight: 600;
		position: relative;
	}

	.reflection {
		position: absolute;
		width: 25px;
		height: 25px;
		border-radius: 25px;
		border-top: 2px solid rgba(255, 255, 255, 0.3);
		top: 2px;
		left: 3px;
		background-color: transparent;
		opacity: 0.2;
	}

	@media (max-width: 900px) {
		button {
			font-size: 0.8rem;
		}
		.display {
			padding: 4px 2px;
		}
	}
</style>
