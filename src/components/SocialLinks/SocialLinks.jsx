import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import style from './SocialLinks.scss';

export default function SocialLinks(){
    return(
        <ul className='social-container'>
            <li><a href='https://www.linkedin.com/in/nicoprten/' target='_blank'>{<LinkedInIcon sx={{fontSize: 50}}/>}</a></li>
            <li><a href='https://github.com/nicoprten' target='_blank'>{<GitHubIcon sx={{fontSize: 50}}/>}</a></li>
            <li><a href='' target='_blank'>{<EmailIcon sx={{fontSize: 50}}/>}</a></li>
            <li><a href='https://twitter.com/nikprten' target='_blank'>{<TwitterIcon sx={{fontSize: 50}}/>}</a></li>
            <li><a href='https://www.instagram.com/designby_np/' target='_blank'>{<InstagramIcon sx={{fontSize: 50}}/>}</a></li>
        </ul>
    )
}