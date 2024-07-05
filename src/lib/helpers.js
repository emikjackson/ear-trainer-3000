import { PITCH_BY_NOTE, NOTES, HALF_STEP_JUMPS, STARTING_OCTAVE } from './constants/notes.js';

/**
 * @typedef {Object} Note
 * @property {string} note - note name, one of {@link NOTES}
 * @property {number} octave
 */

/**
 * Returns list of note objects in major scale for given key
 * @param {string} key - note denoting key, one of {@link NOTES}.
 * @return {Array<Note>}
 */
export const getScaleByKey = (key) => {
	let scale = [];
	let index = NOTES.indexOf(key);
	HALF_STEP_JUMPS.forEach((halfStepsToAdd) => {
		const modIndex = index % NOTES.length;
		const pastEnd = index > NOTES.length - 1; // if we've looped around NOTES, increase the octave
		scale.push({
			note: NOTES[modIndex],
			// if we've looped around the end of NOTES, increase the octave
			octave: pastEnd ? STARTING_OCTAVE + 1 : STARTING_OCTAVE
		});
		index += halfStepsToAdd;
	});
	return scale;
};

/**
 * Play note audio, expects 'noteName' to include letter, sharp/flat if applicable, and octave (e.g. 'E#6')
 * Audio context code from https://marcgg.com/blog/2016/11/01/javascript-audio/
 * @param {string} noteName
 * @param {*} type
 */
export const playNote = (noteName, type = 'triangle') => {
	const fade = 3;
	const context = new AudioContext();
	let o = context.createOscillator();
	let g = context.createGain();

	o.type = type;
	o.connect(g);
	// @ts-ignore
	o.frequency.value = PITCH_BY_NOTE[noteName];
	g.connect(context.destination);

	// Finally this schedules the fade out.
	g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + fade);

	o.start(context.currentTime);

	// Clear the audio context after note is finished playing (assumes 2000ms to be max length of any note)
	const timeoutId = setTimeout(() => {
		context.close();
	}, 2000);
};
