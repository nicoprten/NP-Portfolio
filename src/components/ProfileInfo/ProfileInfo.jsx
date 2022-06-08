import style from './ProfileInfo.scss';

export default function ProfileInfo(){
    return(
        <div className="container-info">
            <div className="profile-info">
                <h1>Nicolás Prtenjaca</h1>
                <h2>Frontend Developer</h2>
            </div>
            <div className="container-button">
                <button onClick={() => window.open('./CV-v5-english.pdf')}>DOWNLOAD RESUME</button>
            </div>
        </div>
    )
}