import { pitchByNote } from './data/notes';

// https://marcgg.com/blog/2016/11/01/javascript-audio/
export const playNote = (noteName, type = 'triangle') => {
  const fade = 3;
  const context = new AudioContext();
  let o = context.createOscillator();
  let g = context.createGain();

  o.type = 'type';
  // o.setPeriodicWave(stringWave(context));
  o.connect(g);
  o.frequency.value = pitchByNote[noteName];
  g.connect(context.destination);

  // Finally this schedules the fade out.
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + fade);

  o.start(context.currentTime);

  // Clear the audio context after note is finished playing (assumes 2000ms to be max length of any note)
  const timeoutId = setTimeout(() => {
    context.close();
  }, 2000);
};
