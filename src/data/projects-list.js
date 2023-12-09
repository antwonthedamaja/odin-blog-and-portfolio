import signupL from '../assets/signup_l.png';
import libraryL from '../assets/library_l.png';
import battleshipsL from '../assets/battleships_l.png';
import etchasketchL from '../assets/etchasketch_l.png';
import memememoryL from '../assets/memememory_l.png';
import igpageL from '../assets/igclone_l.png';
import { v4 } from 'uuid';

const data = [
    {
        name: 'Social media clone',
        liveLink: 'https://odin-ig-page.web.app/',
        codeLink: 'https://github.com/tonyissa/odin-ig-page',
        desc: 'Instagram-inspired social media clone for TOP final Javascript project.',
        image: igpageL,
        key: v4()
    },
    {
        name: 'Sign-up form',
        liveLink: 'https://htmlpreview.github.io/?https://github.com/tonyissa/sign-up-form/blob/main/index.html',
        codeLink: 'https://github.com/tonyissa/odin-sign-up-form',
        desc: 'Mock sign-up form showcasing HTML, CSS, and form validation.',
        image: signupL,
        key: v4()
    },
    {
        name: 'Library',
        liveLink: 'https://htmlpreview.github.io/?https://github.com/tonyissa/library/blob/main/index.html',
        codeLink: 'https://github.com/tonyissa/odin-library',
        desc: 'Library card app to track a book collection.',
        image: libraryL,
        key: v4()
    },
    {
        name: 'Etch-a-sketch',
        liveLink: 'https://htmlpreview.github.io/?https://github.com/tonyissa/Etch-a-Sketch/blob/main/index.html',
        codeLink: 'https://github.com/tonyissa/odin-Etch-a-Sketch',
        desc: 'Etch-a-sketch HTML app.',
        image: etchasketchL,
        key: v4()
    },
    {
        name: 'Battleships',
        liveLink: 'https://htmlpreview.github.io/?https://github.com/tonyissa/odin-battleships/blob/main/dist/index.html',
        codeLink: 'https://github.com/tonyissa/odin-battleships',
        desc: 'Battleships app against a computer player utilizing principles of OOP (object-oriented programming).',
        image: battleshipsL,
        key: v4()
    },
    {
        name: 'Meme memory',
        liveLink: 'https://tonyissa.github.io/odin-memory-cards/',
        codeLink: 'https://github.com/tonyissa/odin-memory-cards',
        desc: 'Meme-themed memory card game.',
        image: memememoryL,
        key: v4()
    }
];

export default data;
