import projects from './../../projects/Projects';

import './Projects.scss';

export default function Projects({ menuActive }){

    return(
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
                )})
            }
            </ul>
        </div>
    )
}

