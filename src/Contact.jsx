import { Box, Typography } from '@mui/material'
import React from 'react'
import Particles from './component/Particles'
import GradientText from './component/GradientText'
import mail from "./assets/images/communication.png";
import call from "./assets/images/telephone.png";
import linkedin from "./assets/images/linkedin.png";
import { link } from 'framer-motion/client';

const Contact = () => {
  return (
    <Box sx={{ backgroundColor:"black", height:"100vh", position:"absolute", width:'100%', display:'flex', alignItems:'center', flexDirection:'column'}} >
      <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />

        <Typography sx={{ fontSize:'4rem', paddingTop:"2rem" }} >
          <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa", "#48de43"]}
          animationSpeed={5}
          showBorder={false}
          className="custom-class"
        >
          Get In Touch.. 
    </GradientText>
          </Typography>
          <Typography sx={{  fontFamily:"poppins", fontSize:"1.5rem", fontWeight:500, color:'gray' }} >@Divanshu_Sharma</Typography>

          <Box sx={{ zIndex:50, border:'1px solid white', display:'flex', alignItems:'center', justifyContent:"space-evenly", width:"30rem", borderRadius:"20rem",mt:"5rem", position:"relative", padding:"1.3rem" }} >
            <Box component="img" src={mail} sx={{ width:"4.5rem", position:"absolute", left:10 }} />
            <Typography sx={{ fontFamily:'poppins', fontWeight:500, fontSize:"1.2rem" }}> divanshu2211@gmail.com</Typography>
          </Box>

          <Box onClick={() => window.open("https://www.linkedin.com/in/divanshu-sharma-105a2b227/")} sx={{ border:'1px solid white', display:'flex', alignItems:'center', justifyContent:"space-evenly", width:"25rem", borderRadius:"30rem",mt:"3rem", cursor:"pointer", zIndex:50, position:'relative', padding:"1.3rem" }} >
            <Box component="img" src={linkedin} sx={{ width:"4rem", paddingY:0.5, position:"absolute", left:5 }} />
            <Typography sx={{ fontFamily:'poppins', fontWeight:500, fontSize:"1.2rem", cursor:'pointer' }}> Click To Visit Linkedin Profile</Typography>
          </Box>
          

          <Box sx={{ zIndex:50, border:'1px solid white', display:'flex', alignItems:'center', justifyContent:"space-evenly", width:"20rem", borderRadius:"20rem",mt:"3rem", position:"relative", padding:"1.3rem" }} >
            <Box component="img" src={call} sx={{ width:"3.5rem", paddingY:0.5, position:'absolute', left:10 }} />
            <Typography sx={{ fontFamily:'poppins', fontWeight:500, fontSize:"1.2rem" }}>  +91 8168997024</Typography>
          </Box>


    </Box>
  )
}

export default Contact