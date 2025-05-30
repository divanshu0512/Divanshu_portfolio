import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from './component/Header'
import GradientText from './component/GradientText'
import potrait from "./assets/potrait.png"
import potrait2 from "./assets/chaiwati.jpg";
import linkedin from "./assets/images/linkedin.png";
import whatsapp from "./assets/images/whatsapp.png";
import instagram from "./assets/images/instagram.png";
import github from "./assets/images/github.png";
import HeaderDuplicate from './component/HeaderDuplicate'

const About = () => {
  return (
    <Box sx={{ backgroundColor:'#171717', minHeight:'100vh', width:"100%", position:"absolute", top:0 }} >
        <HeaderDuplicate />

            <Box sx={{ display:"flex", justifyContent:'space-evenly', width:"100%", mt:3,  mt:13 }} >

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <Box sx={{ position: 'relative', width: '22rem', height: 'auto' }}>
    
    {/* Green background box behind the image */}
    <Box
      sx={{
        position: 'absolute',
        top: 10,
        right: -10,
        width: '22rem',
        height: '100%',
        backgroundColor: '#43c732',
        borderRadius: '1rem',
        zIndex: 0, 
        boxShadow: '0px 1px 7px 1px white',

      }}
    />

    <Box
      component="img"
      src={potrait2}
      sx={{
        width: '22rem',
        borderRadius: '1rem',
        boxShadow: '0px 1px 7px 1px white',
        position: 'relative',
        zIndex: 1,
      }}
    />

  </Box>
</Box>


                <Box sx={{ width:"50%", position:'relative' }} >
                  <Box sx={{ position:'absolute' }} >
                  <Typography sx={{ fontSize: '4rem', textAlign:"left", display:'inline-block' }}>
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa", "#48de43"]}
                      animationSpeed={5}
                      showBorder={false}
                      className="custom-class"
                    >
                    About Me
                    </GradientText>
                  </Typography>

                    <Typography sx={{ fontSize:"1rem", fontWeight:400, }} >React.JS | Mern Stack Developer</Typography>
                    
                    <Box sx={{ mt:"1rem" }} >

                    <ul className="list" >
                      <li> Integrated frontend components with backend APIs to fetch and display real-time card management data, ensuring
                         seamless user interactions and up-to-date information
                      </li>

                      <li>
                        Built a platform offering users access to discounted brand vouchers by integrating the XOXO Days, Amazon and Flipkart API,
                         fetching real-time data on available deals, and presenting them through a user-friendly interface
                      </li>
                      <li>
                        Developed an advanced B2B web application to streamline order management processes, allowing users to efficiently manage and 
                        process incoming orders with features to accept or reject orders, thereby optimizing decision-making and enhancing operational
                         workflows
                      </li>
                      <li>
                        Ensured a seamless browsing experience across devices by developing a fully responsive frontend using React.js, HTML, CSS,
                         JavaScript, and MaterialUI, catering to mobile, tablet, and desktop users.
                      </li>
                      <li>
                        Utilized custom libraries and Material-UI components to create a sophisticated and user-friendly interface, enabling users to 
                        navigate and view detailed order information, including order names, numbers, timestamps, and specifics.
                      </li>         
                    </ul>

                    <Box>

                    </Box>
                    </Box>
                  </Box>

            </Box>
            <Box className="glass-box" sx={{ display:"flex", alignItems:'center', justifyContent:"space-between", flexDirection:'column' }} >
                <Box component="img" src={whatsapp} sx={{ width:"3rem" , cursor:"pointer" }} />
                <Box component="img" src={linkedin} sx={{ width:"3rem" , cursor:"pointer" }} />
                <Box component="img" src={instagram} sx={{ width:"3rem" , cursor:"pointer" }} />
                <Box component="img" src={github} sx={{ width:"3rem" , cursor:"pointer" }} />

            </Box>
            </Box>

    </Box>
  )
}

export default About