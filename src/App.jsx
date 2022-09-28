import { useState } from 'react';

import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Menu from './components/Menu/Menu';
import Projects from './components/Projects/Projects';

import './App.scss';
import 'animate.css';

export default function App(){    
    const [view, setView] = useState('active');

    function handleToggle(){
        view === 'active' ? setView('inactive') : setView('active');
    }

    return(
        <>
            <Menu handleToggle={handleToggle} view={view} />
            {view === 'active' ? <ProfileInfo /> : <Projects />}
            <SocialLinks />
            <img id='ball01' src='./ball-01.png' alt='ball to animate' />
            <img id='ball02' src='./ball-02.png' alt='ball to animate' />
            <img id='ball03' src='./ball-03.png' alt='ball to animate' />
            <img id='ball04' src='./ball-01.png' alt='ball to animate' />
            {/* <video className="video-bg" autoplay='true' loop muted>
                <source src='./bg-waves.mp4' />
            </video> */}
        </>
    )
}