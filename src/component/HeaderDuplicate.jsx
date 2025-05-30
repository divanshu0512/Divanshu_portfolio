import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderDuplicate = () => {

  const navigate = useNavigate();

  const handleSkills = () => {
    navigate("/");
  }

  return (
    <Box sx={{ color:"white", border:"1px solid white", width:'95%', p:2, borderRadius:"100px 100px 100px ", position:"absolute", top:10,
        backdropFilter: 'blur(5px)',
        background: 'rgba(79, 135, 220, 0.36)', // translucent white
        border: '1px solid rgba(65, 65, 65, 0.2)',
        boxShadow: '0 4px 30px rgba(239, 239, 239, 0.19)',
     }} >
        <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between' }} >
        <Typography sx={{ fontSize:'1.5rem', color:'#bfbbbb', fontWeight:800, color:"white", letterSpacing:1.3 }} >Divanshu's Portfolio</Typography>

        <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-evenly', width:'40%' }}  >
            <Typography onClick={() => navigate("/")} className='cursor'  >Home</Typography>
            <Typography onClick={() => navigate("/about")} className='cursor' >About</Typography>
            {/* <Typography className='cursor' >Contact</Typography> */}
            <Typography onClick={()=> navigate("/skills") } className='cursor' >Skills</Typography>
            <Typography onClick={() => navigate("/projects")} className='cursor' >Projects</Typography>

        </Box>
        </Box>

    </Box>
  )
}

export default HeaderDuplicate