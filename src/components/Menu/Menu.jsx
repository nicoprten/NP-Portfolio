import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import style from './Menu.scss';
import projects from './../../projects/Projects';

export default function Menu({handleToggle, menuActive}){
    console.log(projects)
    return(
        <>
            <div id='toggle-container'>
                { menuActive === 'inactive' ? 
                    <div className='button--portfolio' onClick={() => handleToggle()}>
                        <ChevronLeftIcon sx={{fontSize: 50}}/>
                        <p>PORTFOLIO</p>
                    </div>
                : 
                    <div className='button--portfolio' onClick={() => handleToggle()}>
                        <p>PROFILE</p>
                        <ChevronRightIcon sx={{fontSize: 50}}/>
                    </div>
                }
            </div>
            <div className={`menu-container ${menuActive}`}>
                <h2>Projects</h2>
                <ul className='projects-container'>
                    {projects && projects.map((p, i) => {
                        return(
                            <li key={i}>
                                <h3>{p.name.toUpperCase()}</h3>
                                <img src={p.img} alt={`image of my project ${p.name}`} />
                                <div className='container-code'>
                                    <p>{p.desc}</p>
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