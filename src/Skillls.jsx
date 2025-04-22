import { Box, Typography } from '@mui/material'
import React from 'react'
import GradientText from './component/GradientText';
import html from "./assets/images/html.webp";
import css from "./assets/images/css.png";
import javascript from "./assets/images/javascript.webp"
import laravel from "./assets/images/laravel.png"
import python from "./assets/images/python.png"
import postman from "./assets/images/postman.png"
import SplashCursor from './component/SplashCursor';


const Skillls = () => {
  return (
    <Box sx={{ backgroundColor:'black', display:'flex', alignItems:"center", justifyContent:"center", flexDirection:'column', height:'100vh' }} >
      {/* <SplashCursor /> */}
      {/* <Typography sx={{ fontSize:"3rem", fontWeight:500, }} >Technologies Being Working On..</Typography> */}
      <Typography sx={{ fontSize:'4rem' }} >
      <GradientText
      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa", "#48de43"]}
      animationSpeed={5}
      showBorder={false}
      className="custom-class"
    >
      Technologies Being Working On..  
</GradientText>
      </Typography>

      {/* <Box
  sx={{
    position: 'relative',
    top: '30%',
    left: '50%',
    width: 200,
    height: 200,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(140, 255, 140, 0.64) 0%, transparent 70%)',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    filter: 'blur(40px)',
    zIndex: 1,
    animation: 'pulseGlow 2.5s ease-in-out infinite',
    '@keyframes pulseGlow': {
      '0%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.6 },
      '50%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 1 },
      '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.6 },
    },
  }}
/> */}


<Box 
  className="tech-container" 
  sx={{ 
    display: "grid", 
    gridTemplateColumns: "repeat(3, 1fr)", 
    gridColumnGap:"8rem", gridRowGap:"3rem", mt:"5rem",
    justifyItems: "center",
    cursor: "pointer",
  }}
>
  {[
    { src: html, class: 'html' },
    { src: css, class: 'css' },
    { src: javascript, class: 'javascript' },
    { src: python, class: 'python' },
    { src: laravel, class: 'laravel' },
    { src: postman, class: 'postman' },
  ].map(({ src, class: className }) => (
    <Box key={className} className={`tech-wrapper ${className}`}>
      <Box
        component="img"
        src={src}
        sx={{
          width: "8rem",
          height: "auto",
          objectFit: "contain",
          zIndex: 2,
          position: "relative",
        }}
      />
    </Box>
  ))}
</Box>

      
    </Box>
  )
}

export default Skillls