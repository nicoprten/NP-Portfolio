import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import './Menu.scss';

export default function Menu({ handleToggle, view }){
    return(
        <>
            <div id='toggle-container'>
                { view === 'active' ? 
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
        </>
    )
}