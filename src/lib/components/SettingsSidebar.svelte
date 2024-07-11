<script>
	import {
		key,
		numNotes,
		progressiveAnswerIndication,
		playAnswersOnClick,
		limitPossibleAnswers
	} from '$lib/store.js';
	import { NOTES } from '$lib/constants/notes.js';
	import SettingsHeader from './SettingsHeader.svelte';

	const adjustAllDifficultySettings = (easyBoolean) => {
		playAnswersOnClick.set(easyBoolean);
		progressiveAnswerIndication.set(easyBoolean);
		limitPossibleAnswers.set(easyBoolean);
	};

	const checkAllTrue = (boolArray) => boolArray.every((bool) => bool);

	$: allEasySettingsOn = checkAllTrue([
		$playAnswersOnClick,
		$progressiveAnswerIndication,
		$limitPossibleAnswers
	]);
	$: allEasySettingsOff = checkAllTrue([
		!$playAnswersOnClick,
		!$progressiveAnswerIndication,
		!$limitPossibleAnswers
	]);
</script>

<SettingsHeader />

<div class="settings">
	<h3>General</h3>

	<label>
		Key
		<select bind:value={$key}>
			{#each NOTES as keyOption}
				<option value={keyOption}>{keyOption}</option>
			{/each}
		</select>
	</label>

	<label>
		Number of notes
		<select bind:value={$numNotes}>
			{#each [1, 2, 3, 4, 5] as numOption}
				<option value={numOption}>{numOption}</option>
			{/each}
		</select>
	</label>

	<h3>Difficulty</h3>

	<label>
		Play notes when clicked
		<select bind:value={$playAnswersOnClick}>
			<option value={false}>No</option>
			<option value={true}>Yes</option>
		</select>
	</label>

	<label>
		Indicate each note's correctness
		<select bind:value={$progressiveAnswerIndication}>
			<option value={false}>No</option>
			<option value={true}>Yes</option>
		</select>
	</label>

	<label>
		Limit possible answers
		<select bind:value={$limitPossibleAnswers}>
			<option value={false}>No</option>
			<option value={true}>Yes</option>
		</select>
	</label>

	<div class="buttons">
		<div class="button-wrapper">
			<button
				class="boxy green"
				disabled={allEasySettingsOn}
				on:click={() => adjustAllDifficultySettings(true)}>Make things easier</button
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
				on:click={() => adjustAllDifficultySettings(false)}>Make things harder</button
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
</div>

<style>
	h3 {
		margin-top: 20px;
		margin-bottom: 5px;
		padding-bottom: 5px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
	.settings {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px;
	}
	.buttons {
		margin-top: 15px;
	}
	.button-wrapper {
		display: flex;
		flex-direction: column;
		text-align: center;
		margin-bottom: 10px;
	}
	.little-text {
		color: #3a3a3a;
		font-style: italic;
		margin-top: 2px;
		font-size: 0.9rem;
	}
</style>
