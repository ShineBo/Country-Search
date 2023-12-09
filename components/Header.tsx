import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useStore } from "../store";

const Header = () => {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", backgroundColor: isDarkMode ? "#2b3743" : "#ffffff", boxShadow: "0px 2px 2px lightgrey"}}>
        <Typography variant='h1' sx={{ fontSize: "2rem", fontWeight: 700, color: isDarkMode ? "#b0bec5" : "#2b3743", fontFamily: "fantasy"}}>
            Where in the world?
        </Typography>
        <Button onClick={toggleDarkMode}>
            <NightlightRoundIcon />
            Dark Mode
        </Button>
    </Box>
  )
}

export default Header