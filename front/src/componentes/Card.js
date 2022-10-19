import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";

const CardA = ({url,name,data,to}) => {
  const navigate = useNavigate();
  const handleClick= ()=>{
    navigate(to);
  }

    return ( 
        <Card sx={{ maxWidth: 345,margin:"20px",width:"300px" }}>
      <CardMedia
        component="img"
        height="300"
        image={url}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' onClick={handleClick} size="small">Ir</Button>
      </CardActions>
    </Card>

     );
}
 
export default CardA;