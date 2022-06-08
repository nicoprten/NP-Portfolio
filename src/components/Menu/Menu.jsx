import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import style from './Menu.scss';
import projects from './../../projects/Projects';

export default function Menu({handleToggle, menuActive}){

    return(
        <>
            <div id='toggle-container'>
                { menuActive === 'inactive' ? <ListIcon onClick={() => handleToggle()}sx={{fontSize: 50}}/> : 
                <CloseIcon onClick={() => handleToggle()}sx={{fontSize: 50}}/>}
            </div>
            <div className={`menu-container ${menuActive}`}>
                <h2>Projects</h2>
                <ul className='projects-container animate__animated animate__backInRight'>
                    {projects && projects.map((p, i) => {
                        return(
                            <li key={i}>
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