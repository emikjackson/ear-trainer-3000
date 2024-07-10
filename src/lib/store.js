import { writable, derived } from 'svelte/store';
import { getScaleByKey, getRandomIndex, getEmptyArray } from '$lib/helpers.js';

// Settings for quiz
export const key = writable('C');
export const numNotes = writable(3);
export const progressiveAnswerIndication = writable(false); // indicate whether individual note answer is correct
export const playAnswersOnClick = writable(true);
export const limitPossibleAnswers = writable(false); // limit to first 5 notes instead of 8
export const answers = writable(getEmptyArray(3)); // initialize to same length as num notes

export const settingsModalOpen = writable(false);

// Toggle for 'get new notes'
const regenerateToggle = writable(false);
export const regenerateNotes = () => regenerateToggle.update((val) => !val);

// Major scale for current key
export const scale = derived(key, ($key) => getScaleByKey($key));

// Current selection of notes for quiz :)
// Generates a random set of notes based on current settings when any dependency is changed
export const notes = derived(
	[scale, numNotes, limitPossibleAnswers, regenerateToggle],
	([$scale, $numNotes, $limitPossibleAnswers]) => {
		let notesArr = [];
		const scaleArray = $limitPossibleAnswers ? $scale.slice(0, 5) : $scale;
		for (let i = 0; i < $numNotes; i++) {
			const randomIndex = getRandomIndex(scaleArray.length);
			notesArr.push(scaleArray[randomIndex]);
		}
		// reset answers when notes are regenerated
		answers.set(getEmptyArray(notesArr.length));
		return notesArr;
	}
);

// Playing note index (-1 if no note is currently playing)
export const playingNoteIndex = writable(-1);
