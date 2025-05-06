import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import GradientText from './component/GradientText'
import SpotlightCard from './component/SpotLightCard'

import website from "./assets/images/ux.png";
import backend from "./assets/images/api.png"
import robotic from "./assets/images/robotic.png";
import mobile from "./assets/images/mobile.png";

const Services = () => {
  return (
    <Box sx={{ backgroundColor:"black" , height:"100vh" }} >
        <Typography sx={{ fontSize:'4rem', paddingTop:'5rem' }} >
      <GradientText
      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa", "#48de43"]}
      animationSpeed={5}
      showBorder={false}
      className="custom-class"
      style={{ marginTop:5 }}
    >
     What Services I Actuall Provide..  
</GradientText>
      </Typography>

<Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-evenly', mt:"7rem" }} >

      <SpotlightCard  className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <Box sx={{ width:"15rem", height:"12rem", display:'flex', alignItems:'center', flexDirection:'column', cursor:'pointer' }} >
                <Box>
                    <Box component='img' src={website} sx={{ width:'4rem' }} />
                </Box>
                <Divider variant="middle" sx={{ width:"100%" , backgroundColor:"white", mt:1 }} />
                <Typography sx={{ fontFamily:"roboto", fontSize:'1.2rem', mt:2 }} >Web Development Service</Typography>

                <Typography sx={{ fontSize:'0.8rem', fontWeight:300, color:'gray', mt:1, fontFamily:'poppins' }} >A responsive and scalable website isn’t just design—it’s a promise of seamless experience, everywhere, for everyone, at any size and scale</Typography>

            </Box>
</SpotlightCard>

<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <Box sx={{ width:"15rem", height:"12rem", display:'flex', alignItems:'center', flexDirection:'column', cursor:'pointer' }} >
                <Box>
                    <Box component='img' src={backend} sx={{ width:'4rem' }} />
                </Box>
                <Divider variant="middle" sx={{ width:"100%" , backgroundColor:"white", mt:1 }} />
                <Typography sx={{ fontFamily:"roboto", fontSize:'1.2rem', mt:2 }} >API Development Service</Typography>

                <Typography sx={{ fontSize:'0.8rem', fontWeight:300, color:'gray', mt:1, fontFamily:'poppins' }} >A well-crafted API is the silent engine behind every great app—scalable, secure, and ready to connect the world, one request at a time.</Typography>

            </Box>
</SpotlightCard>

<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <Box sx={{ width:"15rem", height:"12rem", display:'flex', alignItems:'center', flexDirection:'column', cursor:'pointer' }} >
                <Box>
                    <Box component='img' src={mobile} sx={{ width:'4rem' }} />
                </Box>
                <Divider variant="middle" sx={{ width:"100%" , backgroundColor:"white", mt:1 }} />
                <Typography sx={{ fontFamily:"roboto", fontSize:'1.2rem', mt:2 }} >Mobile App Development</Typography>

                <Typography sx={{ fontSize:'0.8rem', fontWeight:300, color:'gray', mt:1, fontFamily:'poppins' }} >Mobile application development turns ideas into interactive experiences, enabling businesses to connect and grow anywhere.</Typography>

            </Box>
</SpotlightCard>
</Box>

    </Box>
  )
}

export default Services