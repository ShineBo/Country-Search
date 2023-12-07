import React from 'react'
import Header from './Header'
import CountrySearch from './ConntrySearch'
import { Box } from '@mui/material'

const CountrySearchContainer = () => {
  return (
    <Box>
        <Header />
        <CountrySearch />
    </Box>
  )
}

export default CountrySearchContainer