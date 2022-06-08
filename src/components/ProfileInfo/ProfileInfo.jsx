import style from './ProfileInfo.scss';

export default function ProfileInfo({profileActive}){
    return(
        <div className={`container-info ${profileActive}`}>
            <div className="profile-info">
                <h1>Nicolás Prtenjaca</h1>
                <h2>Frontend Developer</h2>
                <p><span>STACK:</span> HTML, CSS, SASS, Bootstrap, Tailwind, Javascript, JQuery, React, Redux, APIs, NPM, GitHub, Photoshop, Illustrator, AfterEffects.</p>
            </div>
            <div className='container-button'>
                <button onClick={() => window.open('./CV-v5-english.pdf')}>DOWNLOAD RESUME</button>
            </div>
        </div>
    )
}