<script>
	import { browser } from '$app/environment';
	import { notes, playingNoteIndex, scale } from '$lib/store.js';
	import { playNote } from '$lib/helpers.js';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let playingTimeout;
	let colorfulTimeout;
	let colorfulState = 'hidden';
	let arpeggioInterval;
	let preMount = true;

	onMount(() => (preMount = false));

	// If user clicks on light, play note and turn on light (set currentlyPlayingIndex)
	const onClick = (noteObj, index) => {
		if (playingTimeout) {
			clearTimeout(playingTimeout);
			playingNoteIndex.set(-1);
		}
		if ($playingNoteIndex < 0) {
			playingNoteIndex.set(index);
			playNote(noteObj);
			// after 500ms, reset the currently playing index
			playingTimeout = setTimeout(() => {
				playingNoteIndex.set(-1);
			}, 500);
		}
	};

	// Play whimsical arpeggio for colors animation
	const playArpeggio = () => {
		if (arpeggioInterval) {
			clearInterval(arpeggioInterval);
		}
		// We want to play the 1, 3, 5, 8, 5, 3, 1
		let arpeggioIndex = 0;
		const indices = [2, 4, 7, 4, 2, 0];
		playNote($scale[0]); // play the 1 (since setInterval will start after first ms delay)
		arpeggioInterval = setInterval(() => {
			playNote($scale[indices[arpeggioIndex]]);
			arpeggioIndex += 1;
			if (arpeggioIndex >= indices.length && arpeggioInterval) {
				clearInterval(arpeggioInterval);
				arpeggioInterval = null;
			}
		}, 100);
	};

	// Show colorful lights to signify that the notes are changing!
	// Also include a little arpeggio audio alongside it :)
	const playColorsAnimation = () => {
		if (colorfulTimeout) {
			clearTimeout(colorfulTimeout);
		}
		// Skip on first render
		if (!preMount) {
			colorfulState = 'playing';
			playArpeggio();
			colorfulTimeout = setTimeout(() => {
				colorfulState = 'fading_out';
				colorfulTimeout = setTimeout(() => {
					colorfulState = 'hidden';
				}, 400);
			}, 900);
		}
	};

	// Show colors animation when notes change :)
	$: playColorsAnimation($notes);

	onDestroy(() => {
		playingTimeout ? clearTimeout(playingTimeout) : null;
		colorfulTimeout ? clearTimeout(colorfulTimeout) : null;
	});
</script>

<div class="wrapper">
	{#each $notes as note, index}
		<button
			on:click={() => onClick(note, index)}
			id={`light_${index}`}
			class="light"
			class:bright={index === $playingNoteIndex}
		>
			{index + 1}
			<div class="reflection"></div>
			<div class="smooth-fade" style={`opacity:${colorfulState === 'playing' ? 1 : 0}`}>
				{#if colorfulState !== 'hidden'}
					<div class={`light colorful-overlay delay-${index % 3}`}></div>
				{/if}
			</div>
		</button>
	{/each}
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: space-evenly;
		padding: 0px;
	}
	.light {
		cursor: pointer;
		border: none;
		width: 30px;
		height: 30px;
		border-radius: 30px;
		background: radial-gradient(#aaa36e, #787244);
		position: relative;
		box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0);
		transition: all 0.2s ease-out;
		color: #4b4b4b;
	}
	.light.bright {
		background: radial-gradient(#fff6b2, #f6de28);
		box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 0.2);
	}
	.light.bright .reflection {
		opacity: 0.2;
		transition: opacity 0.2s linear;
	}
	.smooth-fade {
		transition: opacity 0.2s linear;
	}
	.colorful-overlay {
		position: absolute;
		left: 0px;
		top: 0px;
		background: rgb(108, 108, 255);
		opacity: 0.6;
		box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 0.2);
		animation: 1s linear 0s infinite running changeColors;
		transition: all 0.2s linear;
	}
	.colorful-overlay.delay-0 {
		animation-delay: 0s;
	}
	.colorful-overlay.delay-1 {
		animation-delay: 0.33s;
		background: rgb(108, 108, 255);
	}
	.colorful-overlay.delay-2 {
		animation-delay: 0.66s;
		background: rgb(255, 108, 186);
	}
	@keyframes changeColors {
		0% {
			background: rgb(108, 108, 255);
		}
		33% {
			background: rgb(108, 255, 140);
		}
		66% {
			background: rgb(255, 108, 186);
		}
		100% {
			background: rgb(108, 108, 255);
		}
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
