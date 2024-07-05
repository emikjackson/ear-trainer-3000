import { writable } from 'svelte/store';

// Settings for quiz
export const AVAILABLE_KEYS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
export const key = writable('C');

export const notes = ['C', 'E', 'D'];
