import { Box } from '@mui/material'
import React from 'react'
import ScrollVelocity from './component/ScrollVelocity'

const NextPage = () => {
  return (
    <Box sx={{ height:'50vh', width:"100%", backgroundColor:"black" }} >
        <ScrollVelocity
        texts={['Welcome', 'Professionals']} 
        velocity={100} 
        className="custom-scroll-text"
        />
    </Box>
  )
}

export default NextPage