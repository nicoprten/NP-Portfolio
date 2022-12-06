import { useState } from 'react';

import './ProfileInfo.scss';

export default function ProfileInfo(){

    const [showResumes, setShowResumes] = useState(false);

    return(
        <div className={`container-info`}>
            <div className="profile-info">
                <h1>Nicolás Prtenjaca</h1>
                <h2>Full Stack Developer</h2>
                <p><span>STACK:</span> HTML, CSS, SASS, Bootstrap, Tailwind, Material UI, Javascript, JQuery, React, Redux, APIs, NodeJS, ExpressJS, PostgreSQL, Sequelize, GitHub.</p>
                <p><span>DESIGN:</span> Photoshop, Illustrator, AfterEffects, Figma.</p>
            </div>
            <div className='container-button'>
                {showResumes ?
                    <div className='container-buttons-languages' onClick={() => setShowResumes(!showResumes)}>
                        <button onClick={() => window.open('./resume-nicolas-prtenjaca.pdf')}>ENGLISH</button>
                        <button onClick={() => window.open('./cv-nicolas-prtenjaca.pdf')}>SPANISH</button>
                    </div>
                :
                    <button onClick={() => setShowResumes(!showResumes)}>DOWNLOAD RESUME</button>
                }
            </div>
        </div>
    )
}