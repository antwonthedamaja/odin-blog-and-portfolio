import React from 'react';
import './style/App.css';
import data from './data/projects-list';
import Antwon from './assets/antwon.webp';
import Project from './components/Project';
import AntwonFooter from './assets/antwon_footer.jpg';

export default function App() {
    return <>
            <header>
                <img id='pfp' aria-hidden='true' src={Antwon} />
                <section id='about-me'>
                    <h1>Antwon The Damaja</h1>
                    <div aria-hidden='true'>&nbsp;</div>
                    <h2>About Me:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
            </header>
            <main>
                <div id='projects'>
                    <h3>My works:</h3>
                    <div aria-hidden='true' id='placeholder'></div>
                    {data.map((entry, index) => {
                        return <Project data={entry} key={index}/>;
                    })}
                </div>
            </main>
            <footer>
                <div id='footer-about'>
                    <h4>Contact me</h4>
                    <p>Please get in contact with me if you think our work could be mutually beneficial!</p>
                    <div>
                        <div>1234 Random Road</div>
                        <div>East Palestine, Ohio. 44444</div>
                    </div>
                    <div>Phone number: 21</div>
                    <div>Email address: iamtrashman@gmail.com</div>
                    <a href='https://github.com/antwonthedamaja/' target='_blank' rel="noreferrer">
                        https://github.com/antwonthedamaja/</a>
                </div>
                <img aria-hidden='true' src={AntwonFooter} />
            </footer>
        </>;
}
