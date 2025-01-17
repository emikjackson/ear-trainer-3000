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
	HALF_STEP_JUMPS.forEach((halfStepsToAdd, scaleIndex) => {
		const modIndex = index % NOTES.length;
		const pastEnd = index > NOTES.length - 1; // if we've looped around NOTES, increase the octave
		scale.push({
			note: NOTES[modIndex],
			// if we've looped around the end of NOTES, increase the octave
			octave: pastEnd ? STARTING_OCTAVE + 1 : STARTING_OCTAVE,
			num: scaleIndex + 1 // placement in scale (e.g. G is the 3 in a C major scale)
		});
		index += halfStepsToAdd;
	});
	return scale;
};

/**
 * Play note audio from given noteObj
 * Audio context code from https://marcgg.com/blog/2016/11/01/javascript-audio/
 * @param {Note} note
 * @param {*} type
 */
export const playNote = (noteObj, type = 'triangle') => {
	const fade = 3;
	const context = new AudioContext();
	let o = context.createOscillator();
	let g = context.createGain();

	o.type = type;
	o.connect(g);
	// @ts-ignore
	o.frequency.value = PITCH_BY_NOTE[`${noteObj.note}${noteObj.octave}`];
	g.connect(context.destination);

	// Firefox doesn't support 'exponentialRampToValueAtTime', so need to use a diff method for it
	const isFirefox = typeof InstallTrigger !== 'undefined';
	if (isFirefox) {
		g.gain.setTargetAtTime(0, context.currentTime + 0.1, 0.3);
	} else {
		g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + fade);
	}

	o.start(context.currentTime);

	// Clear the audio context after note is finished playing (assumes 2000ms to be max length of any note)
	const timeoutId = setTimeout(() => {
		context.close();
	}, 2000);
};

/**
 * Returns a random index for an array of given length
 */
export const getRandomIndex = (length) => Math.floor(Math.random() * length);

/**
 * Returns an empty array of given length
 */
export const getEmptyArray = (n) => {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push('');
	}
	return arr;
};

/**
 * Given an array of booleans, return whether all are true
 */
export const checkAllTrue = (boolArray) => boolArray.every((bool) => bool);
