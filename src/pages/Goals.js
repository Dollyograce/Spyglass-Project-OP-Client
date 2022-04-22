import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function VacationGoalCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.pngitem.com/pimgs/m/407-4070149_visitor-travel-vacation-white-icon-png-transparent-png.png"
          alt="Vacation"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Vacation 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Vacation
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    
  );
}
