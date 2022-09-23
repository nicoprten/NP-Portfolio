import './ProfileInfo.scss';

export default function ProfileInfo({profileActive}){
    return(
        <div className={`container-info ${profileActive}`}>
            <div className="profile-info">
                <h1>Nicolás Prtenjaca</h1>
                <h2>Frontend Developer</h2>
                <p><span>STACK:</span> HTML, CSS, SASS, Bootstrap, Tailwind, Material UI, Javascript, JQuery, React, Redux, APIs, NodeJS, GitHub, Photoshop, Illustrator, AfterEffects, Figma.</p>
            </div>
            <div className='container-button'>
                <button onClick={() => window.open('./nicolas-prtenjaca-cv.pdf')}>DOWNLOAD RESUME</button>
            </div>
        </div>
    )
}