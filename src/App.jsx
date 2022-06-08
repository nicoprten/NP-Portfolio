import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Menu from './components/Menu/Menu';
import style from './App.scss';
import 'animate.css';

export default function App(){
    return(
        <>
            <Menu />
            <ProfileInfo />
            <SocialLinks />
            <img id='ball01' src='./ball-01.png' alt='ball to animate' />
            <img id='ball02' src='./ball-02.png' alt='ball to animate' />
            <img id='ball03' src='./ball-03.png' alt='ball to animate' />
            <img id='ball04' src='./ball-01.png' alt='ball to animate' />
            {/* <video className="video-bg" autoplay='true' loop muted>
                <source src='./bg-fire-03.mp4' />
            </video> */}
        </>
    )
}