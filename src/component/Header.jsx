import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box sx={{ color:"white", border:"1px solid white", width:'95%', p:2, borderRadius:"100px 100px 100px ", position:"absolute", top:10,
        backdropFilter: 'blur(5px)',
        background: 'rgba(118, 118, 118, 0.1)', // translucent white
        border: '1px solid rgba(65, 65, 65, 0.2)',
        boxShadow: '0 4px 30px rgba(173, 173, 173, 0.26)',
     }} >
        <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between' }} >
        <Typography sx={{ fontSize:'1.5rem', color:'#bfbbbb', fontWeight:800, color:"white", letterSpacing:1.3 }} >Divanshu's Portfolio</Typography>

        <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-evenly', width:'40%' }}  >
            <Typography className='cursor'  >Home</Typography>
            <Typography className='cursor' >About</Typography>
            <Typography className='cursor' >Contact</Typography>
            <Typography className='cursor' >Skills</Typography>
        </Box>
        </Box>

    </Box>
  )
}

export default Header