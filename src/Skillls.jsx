import { Box, Typography } from '@mui/material';
import React from 'react';
import GradientText from './component/GradientText';

import html from "./assets/images/html.webp";
import css from "./assets/images/css.png";
import javascript from "./assets/images/javascript.webp";
import node from "./assets/images/node.webp";
import react from "./assets/images/react.webp";
import mongodb from "./assets/images/mongo.webp";
import redux from "./assets/images/redux.webp";
import material from "./assets/images/mui.png";
import postman from "./assets/images/postman.png";

const skills = [
  { src: html, alt: 'HTML', glow: '#e44d26' },
  { src: css, alt: 'CSS', glow: '#2965f1' },
  { src: javascript, alt: 'JavaScript', glow: '#f0db4f' },
  { src: react, alt: 'React', glow: '#61dafb' },
  { src: node, alt: 'Node.js', glow: '#8cc84b' },
  { src: mongodb, alt: 'MongoDB', glow: '#4db33d' },
  { src: redux, alt: 'Redux', glow: '#764abc' },
  { src: material, alt: 'MUI', glow: '#007fff' },
  // { src: postman, alt: 'Postman', glow: '#ff6c37' },
];

const Skillls = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        py: 5,
      }}
    >
      <Typography sx={{ fontSize: '4rem', textAlign: 'center' }}>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa", "#48de43"]}
          animationSpeed={5}
          showBorder={false}
        >
          Technologies Being Worked On
        </GradientText>
      </Typography>

      <Box
        className="tech-container"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(4, 1fr)" },
          gap: "6rem",
          mt: "5rem",
          justifyItems: "center",
          px: 3,
        }}
      >
        {skills.map(({ src, alt, glow }, index) => (
  <Box
    key={index}
    className="tech-wrapper"
    sx={{
      position: 'relative',
      '&:hover img': {
        transform: 'scale(1.1)',
        transition: 'transform 0.3s ease-in-out',
        filter: `drop-shadow(0 0 10px ${glow})`,
        cursor: 'pointer',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${glow}66 0%, transparent 70%)`,
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
        filter: 'blur(25px)',
      },
      '&:hover::before': {
        opacity: 1,
      },
    }}
  >
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "10rem",
        height: "auto",
        objectFit: "contain",
        position: "relative",
        zIndex: 2,
      }}
    />
    <Typography
      sx={{
        // position: 'absolute',
        // bottom: '-2rem',
        // left: '50%',
        // transform: 'translateX(-50%)',
        fontFamily: 'poppins',
        fontSize: '1.5rem',
        color: '#fff',
        textAlign: 'center',
        zIndex: 2,
      }} >{alt}</Typography>
  </Box>
))}

      </Box>
    </Box>
  );
};

export default Skillls;
