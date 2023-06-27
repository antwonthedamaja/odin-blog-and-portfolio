/* eslint-disable react/prop-types */
import React from 'react';
import openIcon from '../assets/open-in-new.svg';

export default function Project(props) {
    const data = props.data;

    return <section className='project'>
        <img srcSet={`${data.imageS[0]} ${data.imageS[1]}, ${data.imageM[0]} ${data.imageM[1]}`}
        sizes="(max-width: 600px) 95vw, (max-width: 1000px) 20vw, 400px" />
        <div className='about-project'>
            <div className='project-header'>
                <div className='title'>{data.name}</div>
                <div className='icon-container'>
                    <a href={data.codeLink} target='_blank' rel="noreferrer">
                        <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    </a>
                    <a href={data.liveLink} target='_blank' rel="noreferrer">
                        <img className='icon' src={openIcon} />
                    </a>
                </div>
            </div>
            <div className='description'>{data.desc}</div>
        </div>
    </section>;
}