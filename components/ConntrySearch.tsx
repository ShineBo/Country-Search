import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import React from 'react'
import Card from './Card'
import { useStore } from "../store";

const ConntrySearch = () => {

    const [age, setAge] = React.useState('');
    const mockData = ["Germany", "India", "USA", "Thailand"]
    const isDarkMode = useStore((state) => state.isDarkMode);
    
    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };

  return (
    <Box sx={{padding:"2rem"}}>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem"}}>
            <TextField sx={{width: "40vw", backgroundColor: isDarkMode ? "#2b3743" : "#ffffff",}} id="outlined-basic" label="Search for a country..." variant="outlined" />
            <FormControl sx={{width: "20vw", backgroundColor: isDarkMode ? "#2b3743" : "#ffffff"}}>
            <InputLabel id="demo-simple-select-label">Filter By Region</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Region"
                onChange={handleChange}
            >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Americas">Americas</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
            </FormControl>
        </Box>
        <Box sx={{ display:"flex", justifyContent: "space-between"}}>
            {mockData.map((country) => {
            return <Card key={country}/>;
            })}
        </Box>
    </Box>
  )
}

export default ConntrySearch
