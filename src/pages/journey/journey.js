import { Button, Typography } from '@mui/material';
import JourneyModules from '../../molecules/journey-modules/journey-modules';
import './journey.css'

const Journey = ()=>{
    return (
        <>
            <div className="journey-header">
                <Typography fontSize="1.5rem">Computer Science Journey</Typography>
                <Button variant='contained'>Community Page</Button>
            </div>
            <div className="journey-container">
                <div className="modules-container">
                    <JourneyModules/>
                </div>
                <div className="game-container">
                    <h1>game</h1>
                </div>
            </div>
        
        </>
       
    );
}
export default Journey;