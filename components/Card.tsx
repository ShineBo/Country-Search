import { CardMedia, CardContent, Typography, Link} from '@mui/material'
import MuiCard from '@mui/material/Card';
import React from 'react'
import { useStore } from "../store";

interface Props {
  name: string;
  region: string;
  capital: string;
  population: number;
  flag: string;
  ccn3: string;
  map: string;
}

const Card = ({name, region, population, flag, capital, ccn3, map }: Props) => {

  const isDarkMode = useStore((state) => state.isDarkMode);

  return (
  <MuiCard sx={{ width: "20vw", marginBottom: "2rem", backgroundColor: isDarkMode ? "#2b3743" : "#ffffff",
    color: isDarkMode ? "#b0bec5" : "#000000",
    transition: 'transform 0.3s ease-in-out', // Add a transition property for a smooth effect
    '&:hover': {
    transform: 'scale(1.05)', // Increase the scale on hover
    },
    }}>
    <CardMedia
      sx={{ height: "10vw" }}
      image={flag}
      title={name}
    />
    <CardContent>
      <Typography sx={{color: isDarkMode ? "#b0bec5" : "#000000"}} gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography sx={{color: isDarkMode ? "#b0bec5" : "#000000"}} variant="body2" color="text.secondary">
        <b>Population</b>: {population}
      </Typography>
      <Typography sx={{color: isDarkMode ? "#b0bec5" : "#000000"}} variant="body2" color="text.secondary">
        <b>Region</b>: {region}
      </Typography>
      <Typography sx={{color: isDarkMode ? "#b0bec5" : "#000000"}} variant="body2" color="text.secondary">
        <b>Capital</b>: {capital}
      </Typography>
      <Link href={map} target='_blank'>Google Map</Link>
    </CardContent>
  </MuiCard>
  )
}

export default Card