import { Box, FormControl, InputAdornment, InputLabel, Link, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import Card from './Card'
import { useStore } from "../store";

const ConntrySearch = () => {

    const [region, setRegion] = React.useState('');

    const [ countrydata,setCountryData ] = useState([{
      name: {common: ""},
      flags: {png: ""},
      capital: [""],
      population: 0,
      region: "",
      ccn3: "",
      maps: {googleMaps: ""}
    },])
    
    const isDarkMode = useStore((state) => state.isDarkMode);
    const [ filteredByCountry, setFilteredByCountry ] = useState(countrydata)
    const [ searchValue, setSearchValue] = useState("")

    // const filterCountry = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //   if(e.target.value == ""){
    //     setFilteredByCountry(countrydata)
    //   }
    //   else{
    //     setFilteredByCountry(filteredByCountry.filter((country) => 
    //     country.name.common.toLowerCase().includes(e.target.value.toLowerCase())))
    //   }
    // }
 
    const handleChange = (event: SelectChangeEvent) => {
      setRegion(event.target.value as string);
    };

    const handleTyping = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSearchValue(e.target.value)
    }

    const handleClear = () => {
      setSearchValue('');
      setFilteredByCountry(countrydata);
    };

    useMemo(() => {
      let filteredCountries = countrydata;
    
      if (region !== "") {
        filteredCountries = countrydata.filter((country) => country.region === region);
      }
    
      if (searchValue !== "") {
        filteredCountries = filteredCountries.filter((country) =>
          country.name.common.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
    
      setFilteredByCountry(filteredCountries);
    }, [countrydata, region, searchValue]);

    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
        setFilteredByCountry(data)    
      })
      console.log(countrydata)
    },[])

  return (
    <Box sx={{padding:"2rem"}}>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem"}}>
            <TextField sx={{width: "40vw", 
            backgroundColor: isDarkMode ? "#2b3743" : "#ffffff", 
            color: isDarkMode ? "#ffffff" : "#000000", 
            '& label': 
            {
            color: isDarkMode ? "#b0bec5" : "#000000",
            }
            }} 
            id="outlined-basic" 
            label="Search for a country..." 
            value={searchValue}
            variant="outlined" 
            onChange={(e) => {handleTyping(e)}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {searchValue && (
                    <ClearIcon
                      style={{ cursor: 'pointer', color: isDarkMode ? "#b0bec5" : "#000000" }}
                      onClick={handleClear}
                    />
                  )}
                </InputAdornment>
              ),
            }}
            />
            <FormControl sx={{width: "20vw", backgroundColor: isDarkMode ? "#2b3743" : "#ffffff"}}>
            <InputLabel id="demo-simple-select-label" style={{ color: isDarkMode ? "#b0bec5" : "#000000" }}>Filter By Region</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={region}
                label="Region"
                onChange={handleChange}
                style={{ color: isDarkMode ? "#b0bec5" : "#000000" }}
            >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Americas">Americas</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
            </FormControl>
        </Box>
        <Box sx={{ display:"flex", justifyContent: "space-between", flexWrap: "wrap"}}>
            {filteredByCountry.map((country) => {
            return <Card 
            name={country.name.common} 
            capital={country.capital && country.capital[0]}
            flag={country.flags.png} 
            population={country.population} 
            region={country.region} 
            key={country.name.common}
            ccn3={country.ccn3}
            map={country.maps.googleMaps}
            />;
            })}
        </Box>
    </Box>
  )
}

export default ConntrySearch
