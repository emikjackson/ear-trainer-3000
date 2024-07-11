<script>
	import {
		key,
		numNotes,
		progressiveAnswerIndication,
		playAnswersOnClick,
		limitPossibleAnswers,
		settingsModalOpen
	} from '$lib/store.js';
	import { NOTES } from '$lib/constants/notes.js';
	import { checkAllTrue } from '$lib/helpers.js';
	import Modal from './Modal.svelte';
	import SettingsHeader from './SettingsHeader.svelte';

	// Since I think it'd be a worse experience to have the notes changing in the background,
	// create temp variables for the settings, then update store on save.

	let tempKey,
		tempNumNotes,
		tempPlayAnswersOnClick,
		tempProgressiveAnswerIndication,
		tempLimitPossibleAnswers;

	// Reset all temp values to the store values (on open and close)
	const resetToStoreValues = () => {
		tempKey = $key;
		tempNumNotes = $numNotes;
		tempPlayAnswersOnClick = $playAnswersOnClick;
		tempProgressiveAnswerIndication = $progressiveAnswerIndication;
		tempLimitPossibleAnswers = $limitPossibleAnswers;
	};

	$: resetToStoreValues($settingsModalOpen);

	// Save all temporary values to the corresponding store values
	const saveToStore = () => {
		key.set(tempKey);
		numNotes.set(tempNumNotes);
		playAnswersOnClick.set(tempPlayAnswersOnClick);
		progressiveAnswerIndication.set(tempProgressiveAnswerIndication);
		limitPossibleAnswers.set(tempLimitPossibleAnswers);
		// then close modal
		settingsModalOpen.set(false);
	};

	const adjustAllDifficultySettings = (easyBoolean) => {
		tempPlayAnswersOnClick = easyBoolean;
		tempProgressiveAnswerIndication = easyBoolean;
		tempLimitPossibleAnswers = easyBoolean;
	};

	$: allEasySettingsOn = checkAllTrue([
		tempPlayAnswersOnClick,
		tempProgressiveAnswerIndication,
		tempLimitPossibleAnswers
	]);
	$: allEasySettingsOff = checkAllTrue([
		!tempPlayAnswersOnClick,
		!tempProgressiveAnswerIndication,
		!tempLimitPossibleAnswers
	]);
</script>

<Modal>
	<div class="header">
		<SettingsHeader />
		<button class="text-button" on:click={() => settingsModalOpen.set(false)}>Close</button>
	</div>

	<div class="settings">
		<h3>General <span>🎵</span></h3>

		<label>
			Key
			<select bind:value={tempKey}>
				{#each NOTES as keyOption}
					<option value={keyOption}>{keyOption}</option>
				{/each}
			</select>
		</label>

		<label>
			Number of notes
			<select bind:value={tempNumNotes}>
				{#each [1, 2, 3, 4, 5] as numOption}
					<option value={numOption}>{numOption}</option>
				{/each}
			</select>
		</label>

		<h3>Difficulty</h3>

		<label>
			Play notes when clicked
			<select bind:value={tempPlayAnswersOnClick}>
				<option value={false}>No</option>
				<option value={true}>Yes</option>
			</select>
		</label>

		<label>
			Indicate each note's correctness
			<select bind:value={tempProgressiveAnswerIndication}>
				<option value={false}>No</option>
				<option value={true}>Yes</option>
			</select>
		</label>

		<label>
			Limit possible answers
			<select bind:value={tempLimitPossibleAnswers}>
				<option value={false}>No</option>
				<option value={true}>Yes</option>
			</select>
		</label>

		<div class="buttons">
			<div class="button-wrapper">
				<button
					class="boxy"
					disabled={allEasySettingsOn}
					on:click={() => adjustAllDifficultySettings(true)}>Make things easier!</button
				>
				<div class="little-text">
					{#if allEasySettingsOn}
						All easy settings are on
					{:else}
						Turn on all easy settings
					{/if}
				</div>
			</div>

			<div class="button-wrapper">
				<button
					class="boxy"
					disabled={allEasySettingsOff}
					on:click={() => adjustAllDifficultySettings(false)}>Make things harder!</button
				>
				<div class="little-text">
					{#if allEasySettingsOff}
						All easy settings are off
					{:else}
						Turn off all easy settings
					{/if}
				</div>
			</div>
		</div>
		<div class="footer">
			<button class="boxy secondary" on:click={() => settingsModalOpen.set(false)}> Cancel </button>
			<button class="boxy" on:click={saveToStore}> Save </button>
		</div>
	</div>
</Modal>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	h3 {
		margin-bottom: 10px;
		padding-bottom: 5px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	.settings {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px;
	}
	.buttons {
		margin-top: 15px;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.button-wrapper {
		display: flex;
		flex-direction: column;
		text-align: center;
		min-width: 200px;
		flex-grow: 1;
	}
	.little-text {
		color: #3a3a3a;
		font-style: italic;
		margin-top: 2px;
		font-size: 0.9rem;
	}
	.footer {
		display: flex;
		justify-content: flex-end;
		gap: 10px;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		margin-top: 5px;
		padding-top: 10px;
	}
</style>
