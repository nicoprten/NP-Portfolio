import style from './ProfileInfo.scss';

export default function ProfileInfo({profileActive}){
    return(
        <div className={`container-info ${profileActive}`}>
            <div className="profile-info animate__animated animate__backInLeft">
                <h1>Nicolás Prtenjaca</h1>
                <h2>Frontend Developer</h2>
                <p><span>STACK:</span> HTML, CSS, SASS, Bootstrap, Tailwind, Javascript, JQuery, React, Redux, APIs.</p>
            </div>
            <div className='container-button'>
                <button onClick={() => window.open('./CV-v5-english.pdf')}>DOWNLOAD RESUME</button>
            </div>
        </div>
    )
}