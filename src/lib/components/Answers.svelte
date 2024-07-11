<script>
	import {
		notes,
		scale,
		answers,
		regenerateNotes,
		playAnswersOnClick,
		progressiveAnswerIndication,
		limitPossibleAnswers
	} from '$lib/store.js';
	import { playNote } from '$lib/helpers.js';
	import PaperLines from './PaperLines.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	// Section for users to enter their answers!
	// On their first time through, highlight that they can change settings

	let revealAnswer = false;
	let firstRound = true;
	let preMount = true;

	const updateFirstRound = () => {
		if (!preMount && firstRound) {
			firstRound = false;
		}
	};

	const handleUpdateNotes = () => {
		revealAnswer = false;
		regenerateNotes();
	};

	const compareNotesToAnswer = () => {
		for (let i = 0; i < $notes.length; i++) {
			if ($notes[i].num !== $answers[i]) {
				return false;
			}
		}
		return true;
	};

	// If user has set 'play answer notes when clicked' to true, play the note on click
	const onAnswerClick = (note) => () => {
		if ($playAnswersOnClick) {
			playNote(note);
		}
	};

	onMount(() => (preMount = false));

	$: updateFirstRound($notes);

	$: scaleArray = $limitPossibleAnswers ? $scale.slice(0, 5) : $scale;
</script>

<!-- Answer submit section (selectable column for each note) & answer display -->
<div class="wrapper">
	<PaperLines />
	<!-- Note select columns -->
	<div class="content">
		<h2>What notes did you hear?</h2>

		<div class="answer-notes">
			{#each $notes as noteObj, idx (`${noteObj.note}_input_${idx}`)}
				<div>
					<h3>{idx + 1}</h3>
					<ul class="note-column">
						{#each scaleArray as scaleNote, scaleIdx (`${scaleNote.num}_${idx}`)}
							{@const id = `note-${idx}-${scaleNote.num}`}
							{@const value = scaleNote.num}
							<li style={`${$progressiveAnswerIndication ? 'min-width: 75px' : ''}`}>
								<input
									type="radio"
									bind:group={$answers[idx]}
									{id}
									name={`note-${idx}`}
									{value}
									on:click={onAnswerClick(scaleNote)}
								/>
								<label for={id}
									>{scaleNote.note} <span class="grey">{value}</span>
									<!-- Show whether or not currently selected not is correct if user has selected 'progressiveAnswerIndication' -->
									{#if $progressiveAnswerIndication && $answers[idx] === scaleIdx + 1}
										{#if $answers[idx] === $notes[idx].num}
											<span class="green">✓</span>
										{:else}
											<span class="red">✗</span>
										{/if}
									{/if}
								</label>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<!-- Correct/incorrect answer displays -->
		{#if $answers.every((answer) => answer !== '')}
			{#if compareNotesToAnswer(notes, $answers)}
				<p transition:fade class="spaced correct-msg">✨ Huzzah!!! You got it right! 🎉</p>
				<button class="boxy" on:click={handleUpdateNotes}>Get new notes</button>
			{:else if !revealAnswer}
				<p class="spaced incorrect-msg">Hmmm... not quite right...</p>
				<button class="boxy" link on:click={() => (revealAnswer = !revealAnswer)}>
					I give up! Show me the answer.
				</button>
			{:else}
				<p class="spaced" style="margin-bottom: 5px;">The correct answer was ...</p>
				<p class="notes-answer">
					{#each $notes as noteObj, idx}
						{noteObj.note}
						<span class="grey">{noteObj.num}</span>{`${idx !== $notes.length - 1 ? ', ' : ''}`}
					{/each}
				</p>
				<button class="boxy" on:click={handleUpdateNotes}>Get new notes</button>
			{/if}
			{#if firstRound && (revealAnswer || compareNotesToAnswer(notes, $answers))}
				<p class="settings-msg">
					← Tip: adjust settings, like <strong>key</strong> and <strong>difficulty</strong>, on the
					left!
				</p>
			{/if}
		{/if}
	</div>
</div>

<style>
	.wrapper {
		position: relative;
		margin-top: 20px;
		padding: 10px;
		background-color: #fffffc;
		width: 550px;
		max-width: 100%;
		box-sizing: border-box;
		flex-grow: 1;
		box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
		border-radius: 2px 2px 0px 0px;
		font-family: 'Caveat', cursive;
		font-optical-sizing: auto;
		overflow: hidden;
	}

	.content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		text-align: center;
		margin: 5px 0px;
		font-size: 1.3rem;
	}

	h3 {
		text-align: center;
		margin: 0px;
		margin-bottom: 8px;
	}

	.answer-notes {
		display: flex;
		flex-wrap: wrap;
		max-width: 100%;
		justify-content: center;
	}

	.note-column {
		list-style-type: none;
		padding: 0px;
		display: flex;
		flex-direction: column-reverse;
		border-radius: 8px;
		margin: 0px 10px;
	}

	.settings-msg {
		margin-top: 8px;
		color: #575757;
	}

	li {
		margin-bottom: 6px;
	}

	.grey {
		color: #aaa;
		margin-left: 1px;
	}

	.red {
		color: var(--red-dark);
		margin-left: 3px;
	}

	.green {
		color: var(--green);
		margin-left: 3px;
	}

	p.spaced {
		margin-top: 24px;
		margin-bottom: 10px;
	}

	p {
		font-size: 1.2rem;
	}

	.notes-answer {
		margin: 0px;
		margin-bottom: 10px;
	}
</style>
