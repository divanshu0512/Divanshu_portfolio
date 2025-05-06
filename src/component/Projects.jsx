import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from './Header';
import Aurora from './Aurora';
import GradientText from './GradientText';
import maker from "../assets/projects/maker.png"
import checker from "../assets/projects/checker.png"
import b2c from "../assets/projects/b2c.png"
import dmt from "../assets/projects/dmt.png"
import giftVoucher from "../assets/projects/giftVoucher.png"
import login from "../assets/projects/login.png"
import bills from "../assets/projects/bills.png"

const Projects = () => {
  const items = [
    {
      image: maker,
      link: 'https://google.com/',
      title: 'Maker Portal',
      description: 'This is pretty cool, right?',
    },
    {
      image: checker,
      link: 'https://google.com/',
      title: 'Checker Portal',
      description: 'This is pretty cool, right?',
    },
    {
      image: b2c,
      link: 'https://google.com/',
      title: 'Consumer Portal',
      description: 'This is pretty cool, right?',
    },
    {
      image: dmt,
      link: 'https://google.com/',
      title: 'Secure Pay',
      description: 'This is pretty cool, right?',
    },
    {
      image: giftVoucher,
      link: 'https://google.com/',
      title: 'Gift & Brand Voucher',
      description: 'This is pretty cool, right?',
    },{
      image: login,
      link: 'https://google.com/',
      title: 'Master Login',
      description: 'This is pretty cool, right?',
    },
    {
      image: bills,
      link: 'https://google.com/',
      title: 'Utility & Bills',
      description: 'This is pretty cool, right?',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Header />

      <Aurora />

      <Box sx={{ mt:12 }} >
        <Typography sx={{ fontSize: '3.5rem', textAlign: 'center', fontWeight:600 }}>  
            Showcase and Creations
        </Typography>
      </Box>

        <Box sx={{  display:"grid", gridTemplateColumns:"repeat(2,1fr)", gridRowGap:"2rem", gridColumnGap:"5rem", mt:3 }} >
          {
            items?.map((data) => (
              <Box sx={{ border:'1px solid white', width:"30rem", paddingX:1.5 , paddingY:1, borderRadius:2, boxShadow:"0px 5px 10px 2px rgba(151, 201, 255, 0.86)", borderStyle:'dashed' }} >
                <Typography sx={{ textAlign:"center" }} >{data?.title}</Typography>
                <Box component='img' src={data?.image} sx={{ width:"30rem", borderRadius:2, mt:1, cursor:"pointer" }} />
              </Box>
            ))
          }
        </Box>

    </Box>
  );
};

export default Projects;
