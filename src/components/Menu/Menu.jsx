import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import style from './Menu.scss';
import projects from './../../projects/Projects';
import { useState } from 'react';

export default function Menu(){
    const [active, setActive] = useState('inactive');
    function handleToggle(){
        console.log('toggle')
        active === 'inactive' ? setActive('active') : setActive('inactive');
    }

    return(
        <>
            <div id='toggle-container'>
                { active === 'inactive' ? <ListIcon onClick={() => handleToggle()}sx={{fontSize: 50}}/> : 
                <CloseIcon onClick={() => handleToggle()}sx={{fontSize: 50}}/>}
            </div>
            <div className={`menu-container ${active}`}>
                <h2>Projects</h2>
                <ul className='projects-container animate__animated animate__backInRight'>
                    {projects && projects.map((p) => {
                        return(
                            <li>
                                <h3>{p.name}</h3>
                                <div className='container-code'>
                                    <a href={p.code} target="_blank">CODE</a>
                                    <a href={p.deploy} target="_blank">DEPLOY</a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}