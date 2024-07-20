# Ear Trainer 3000

A simple **listen-and-guess music quiz**, styled something like a metronome I used for music practice growing up.

Play the game at [ear-trainer-3000.vercel.app](https://ear-trainer-3000.vercel.app/)  🎶


## Context

A few years ago, my father asked me to make him a little quiz game to help him practice hearing intervals by ear. He had specific recommendations on how the game should work, and provided individual recordings of guitar notes he played to supply the notes.

You can find that original application and its associated repository here:
- [Original quiz game](https://music-notes.vercel.app/)
- [Original quiz game's Git Repository](https://github.com/emikjackson/music-notes)

When updating my portfolio, I decided I wanted to revisit this application with some adjustments:
- Programatically generate notes using AudioContext from the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- Revamp the styling, including more color and adding a note player machine loosely inspired by an electronic metronome
- Add some "easy mode" options and some more positive feedback on answering correctly


## To run this project ...
To run this project locally, you should have at least Node version 16 installed.

First, clone this directory. Once inside at the root level, run npm install.

Once all dependencies are installed, run npm run dev or npm run dev -- --open (to open a new browser tab) to start the development server.

<img width="593" alt="Screenshot 2024-07-20 at 5 21 56 PM" src="https://github.com/user-attachments/assets/b63558d9-5046-4232-b434-eecc99142c36">

