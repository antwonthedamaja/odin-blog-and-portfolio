import React from 'react';
import './style/App.css';
// import { data } from './data/project-list';
import antwonL from './assets/antwon-l.webp';
import antwonM from './assets/antwon-m.webp';
import antwonS from './assets/antwon-s.webp';

export default function App() {
    return <>
            <header>
                <img id='pfp' aria-hidden='true' srcSet={`${antwonS} 509w, ${antwonM} 816w, ${antwonL} 1240w`} src={antwonL}
                sizes="(max-width: 600px) 500px, (max-width: 1000px) 750px, 26.66rem" />
                <section id='about'>
                    <h1>Antwon The Damaja</h1>
                    <h2>About Me:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
            </header>
            <main>
                <div id='projects'>
                    <h3>My works:</h3>
                    <div aria-hidden='true' id='placeholder'></div>
                    <section className='project'>Project 1</section>
                    <section className='project'>Project 2</section>
                    <section className='project'>Project 3</section>
                    <section className='project'>Project 4</section>
                    <section className='project'>Project 5</section>
                </div>
            </main>
        </>;
}
