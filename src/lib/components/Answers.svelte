<script>
	// Section for users to enter their answers
	import { notes, scale, answers, regenerateNotes } from '$lib/store.js';
	import { getEmptyArray } from '$lib/helpers.js';

	let revealAnswer = false;
	let handleUpdateNotes = () => regenerateNotes();

	const compareNotesToAnswer = () => {
		for (let i = 0; i < $notes.length; i++) {
			if ($notes[i].num !== $answers[i]) {
				return false;
			}
		}
		return true;
	};
</script>

<!-- Answer submit section (selectable column for each note) & answer display -->
<div class="wrapper">
	<h3>What notes did you hear?</h3>
	<!-- Note select columns -->
	<div class="answer-notes">
		{#each $notes as noteObj, idx (`${noteObj.note}_input_${idx}`)}
			<div>
				<ul class="note-column">
					{#each $scale as scaleNote (`${scaleNote.num}_${idx}`)}
						{@const id = `note-${idx}-${scaleNote.num}`}
						{@const value = scaleNote.num}
						<li>
							<input type="radio" bind:group={$answers[idx]} {id} name={`note-${idx}`} {value} />
							<label for={id}
								>{scaleNote.note} <span style="color:#aaa;margin-left: 6px;">{value}</span></label
							>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	<!-- Correct/incorrect answer displays -->
	{#if $answers.every((answer) => answer !== '')}
		{#if compareNotesToAnswer(notes, $answers)}
			<p class="correct-msg">Huzzah!!! You got it right!</p>
			<button on:click={handleUpdateNotes}>Get new notes</button>
		{:else if !revealAnswer}
			<p class="incorrect-msg">Hmmm... not quite right...</p>
			<button link on:click={() => (revealAnswer = !revealAnswer)}>
				I give up! Show me the answer.
			</button>
		{:else}
			<p style="margin-bottom: 0px;">The correct answer was ...</p>
			<p class="notes-answer">
				{$notes.map((noteObj) => `${noteObj.note} ${noteObj.num}`).join(', ')}
			</p>
			<button on:click={handleUpdateNotes}>Get new notes</button>
		{/if}
	{/if}
</div>

<style>
	.wrapper {
		margin-top: 20px;
		padding: 10px;
		background-color: white;
		width: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;

		font-family: 'Caveat', cursive;
		font-optical-sizing: auto;
	}

	/* Answer section styling */

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
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
		margin: 0px 10px;
	}

	.note-column li {
		width: 80px;
		height: 30px;
		position: relative;
	}

	.note-column label,
	.note-column input {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.note-column input[type='radio'] {
		opacity: 0.01;
		z-index: 2;
	}

	.note-column input[type='radio']:checked + label {
		background-color: #cff0d6;
	}

	.note-column label {
		padding: 5px;
		border: 1px solid #ccc;
		border-bottom: 0px solid #ccc;
		z-index: 1;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		background-color: white;
	}

	.note-column li:last-child label {
		border-radius: 8px 8px 0px 0px;
	}

	.note-column li:first-child label {
		border-radius: 0px 0px 8px 8px;
		border-bottom: 1px solid #ccc;
	}

	.note-column label:hover,
	.note-column li:hover label {
		background-color: #ddd;
		cursor: pointer;
	}

	.note-column input {
		cursor: pointer;
	}
</style>
