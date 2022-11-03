import { LinkedinLogo, GithubLogo, Envelope, TwitterLogo, InstagramLogo, BehanceLogo } from 'phosphor-react';
import './SocialLinks.scss';

export default function SocialLinks(){
    return(
        <ul className='social-container'>
            <li><a href='https://www.linkedin.com/in/nicoprten/' target='_blank'>{<LinkedinLogo size={45} />}</a></li>
            <li><a href='https://github.com/nicoprten' target='_blank'>{<GithubLogo size={45} />}</a></li>
            <li><a href='mailto:nicoprtenjaca@gmail.com' target='_blank'>{<Envelope size={45} />}</a></li>
            <li><a href='https://twitter.com/nikprten' target='_blank'>{<TwitterLogo size={45}/>}</a></li>
            <li><a href='https://www.behance.net/nicolasprtenja' target='_blank'>{<InstagramLogo size={45} />}</a></li>
            <li><a href='https://www.behance.net/nicolasprtenja' target='_blank'>{<BehanceLogo size={45} />}</a></li>
        </ul>
    )
}