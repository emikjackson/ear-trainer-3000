import { writable, derived } from 'svelte/store';
import { getScaleByKey, getRandomIndex, getEmptyArray } from '$lib/helpers.js';

// Settings for quiz
export const key = writable('C');
export const numNotes = writable(3);
export const answers = writable(getEmptyArray(3)); // initialize to same length as num notes

// Toggle for 'get new notes'
const regenerateToggle = writable(false);
export const regenerateNotes = () => regenerateToggle.update((val) => !val);

// Major scale for current key
export const scale = derived(key, ($key) => getScaleByKey($key));

// Current selection of notes for quiz :)
// Generates a random set of notes based on current settings when any dependency is changed
export const notes = derived([scale, numNotes, regenerateToggle], ([$scale, $numNotes]) => {
	let notesArr = [];
	for (let i = 0; i < $numNotes; i++) {
		const randomIndex = getRandomIndex($scale.length);
		notesArr.push($scale[randomIndex]);
	}
	// reset answers when notes are regenerated
	answers.set(getEmptyArray(notesArr.length));
	return notesArr;
});

// Playing note index (-1 if no note is currently playing)
export const playingNoteIndex = writable(-1);
