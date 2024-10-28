import { Howl } from 'howler';
import clearSound from "../assets/mp3/clear.mp3";
import gameOverSound from '../assets/mp3/game-over.mp3';
import landSound from '../assets/mp3/land.mp3';
import nextLevelSound from '../assets/mp3/next-level.mp3';
import tetrisTheme from '../assets/mp3/tetris_theme.mp3';
import tetrisThemeBack from '../assets/mp3/tetris_theme-back.mp3';

export const sounds = {
    clear: new Howl({ src: [clearSound] }),
    gameOver: new Howl({ src: [gameOverSound] }),
    land: new Howl({ src: [landSound] }),
    nextLevel: new Howl({ src: [nextLevelSound] }),
    theme: new Howl({ src: [tetrisTheme], loop: true }),   // Loop theme sound
    themeBack: new Howl({ src: [tetrisThemeBack], loop: true })
};

export type SoundKey = keyof typeof sounds;

export const playSound = (sound: SoundKey) => {
    if (sounds[sound]) {
        sounds[sound].play();
    }
};

export const stopTheme = () => {
    sounds.theme.stop();
    sounds.themeBack.stop();
};
