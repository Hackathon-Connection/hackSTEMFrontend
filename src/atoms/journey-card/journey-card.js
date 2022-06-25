import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import './journey-card.css'
const JourneyCard=({name, image, description})=> {
  const navigate = useNavigate();

  const goToTheJourney =()=>{
    navigate('/journey');
  };

    return (
      <Card sx={{ maxWidth: 345 }} className="card" >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
          />

          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className="card-content" >
          <button className="card-button" onClick={goToTheJourney}>
            <Typography>See more</Typography> 
          </button>
        </CardActions>
      </Card>
    );
  }

export default JourneyCard;