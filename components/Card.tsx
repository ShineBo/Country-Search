import { CardMedia, CardContent, Typography} from '@mui/material'
import MuiCard from '@mui/material/Card';
import React from 'react'

const Card = () => {
  return (
    <MuiCard sx={{ width: "20vw" }}>
    <CardMedia
      sx={{ height: "10vw" }}
      image=""
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
  </MuiCard>
  )
}

export default Card