<script>
	// Loosely 2000's-electronic-metronome-inspired machine for playing and visualizing notes
	import NoteLights from './NoteLights.svelte';
	import Speaker from './Speaker.svelte';
	import Play from '$lib/components/icons/Play.svelte';
	import LittleButtons from './LittleButtons.svelte';
	import { notes, scale, playingNoteIndex } from '$lib/store.js';
	import { playNote } from '$lib/helpers.js';
	import ElectricLabel from './ElectricLabel.svelte';
	import { ARPEGGIO_NOTE_LENGTH_MS } from '$lib/constants/general.js';
	import { onDestroy, onMount } from 'svelte';

	// Increment the playing note index and play the note
	const playNextNote = () => {
		// increment index (if no note is playing, it will be -1 and go to 0)
		playingNoteIndex.set($playingNoteIndex + 1);
		// if index is past length, reset to no note and skip playing
		if ($playingNoteIndex > $notes.length - 1) {
			playingNoteIndex.set(-1);
		}
		// otherwise, play the updated current note
		else {
			const noteObj = $notes[$playingNoteIndex];
			playNote(noteObj);
		}
	};

	let interval = null;
	let playNotesTimeout = null;
	let preMount = true;

	// Helper to clear and reset sequence - never want to be playing multiple at the same time
	const clearAndResetSequence = () => {
		if (interval || $playingNoteIndex > -1) {
			interval && clearInterval(interval);
			playingNoteIndex.set(-1);
		}
	};

	// Play sequence of current notes
	const playSequence = () => {
		clearAndResetSequence();
		playNextNote();
		interval = setInterval(() => {
			playNextNote();
			if ($playingNoteIndex < 0 && interval) {
				clearInterval(interval);
				interval = null;
			}
		}, 700);
	};

	// Trigger play note sequence after a delay
	const autoPlaySequence = () => {
		clearAndResetSequence();
		if (playNotesTimeout) {
			clearTimeout(playNotesTimeout);
		}
		// If not first render, play after delay for arpeggio
		if (!preMount) {
			playNotesTimeout = setTimeout(playSequence, ARPEGGIO_NOTE_LENGTH_MS * $scale.length + 500);
		}
	};

	// Auto-play note sequence when notes change (after delay for arpeggio)
	$: autoPlaySequence($notes);

	onMount(() => (preMount = false));
	onDestroy(() => {
		interval && clearInterval(interval);
		playNotesTimeout && clearTimeout(playNotesTimeout);
	});
</script>

<div class="machine">
	<div class="top-section">
		<div class="top-left">
			<div class="top-left-top">
				<h2 class="depth">EAR TRAINER 3000</h2>
				<ElectricLabel />
			</div>
			<button class="play-button" disabled={$playingNoteIndex > -1} on:click={playSequence}
				>Play Notes <Play />
			</button>
		</div>
		<div class="top-right">
			<Speaker />
			<LittleButtons />
		</div>
	</div>
	<div class="bottom-section">
		<NoteLights />
	</div>
</div>

<style>
	h2 {
		font-family: 'Righteous';
		color: rgb(30, 30, 31);
		font-weight: 400;
		font-size: 1.5rem;
		margin: 0px;
	}
	.machine {
		max-width: 500px;
		width: 100%;
		box-sizing: border-box;
		border-radius: 10px;
		border-bottom: 10px solid #0b0c0c;
		box-shadow: 2px 4px 6px 4px rgba(0, 0, 0, 0.15);
	}

	.top-section {
		padding: 10px;
		border-left: 5px solid #e9e9e9;
		border-top: 5px solid #eeeeee;
		border-right: 5px solid #afb3b4;
		border-bottom: 5px solid #afb3b4;
		background-color: #cacdce;
		display: flex;
		justify-content: space-between;
		border-radius: 10px 10px 0px 0px;
	}

	.top-left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
	}

	.top-left-top {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.top-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		position: relative;
		gap: 10px;
	}

	.bottom-section {
		padding: 14px 10px;
		border-top: 5px solid #434548;
		background-color: #121313;
		border-bottom: 1px solid #1c1d1e;
		position: relative;
		z-index: 0;
		overflow: hidden;
	}

	.play-button {
		padding: 10px 20px;
		color: white;
		background-color: #dd1b1b;
		border: 0px;
		border-bottom: 4px solid #a00d0d;
		border-radius: 4px;
		box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.15);
		display: flex;
		gap: 15px;
		align-items: center;
		text-transform: uppercase;
		font-weight: 500;
		cursor: pointer;
	}

	.play-button:hover {
		background-color: #f12222;
	}
	.play-button:active {
		background-color: #dd1b1b;
		border-bottom: 2px solid #a00d0d;
		margin-top: 2px;
	}

	@media (max-width: 900px) {
		h2 {
			font-size: 1.1rem;
		}
		.machine {
			border-radius: 10px 10px 6px 6px;
			border-bottom: 6px solid #0b0c0c;
		}
		.play-button {
			font-size: 0.9rem;
		}
		.top-section {
			border-width: 2px;
		}
		.bottom-section {
			border-width: 2px;
			padding: 8px 10px;
		}
	}
</style>
