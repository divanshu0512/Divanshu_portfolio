import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from './component/Header'
import GradientText from './component/GradientText'
import potrait from "./assets/potrait.png"
import linkedin from "./assets/images/linkedin.png";
import gmail from "./assets/images/gmail.png";
import calender from "./assets/images/calendar.png";
import location from "./assets/images/location.png";
import react from "./assets/images/react.webp";
import CountUp from './component/CountUp'

const About = () => {
  return (
    <Box sx={{ backgroundColor:'#171717', minHeight:'100vh', width:"100%", position:"absolute", top:0 }} >
        <Header />
        <Box sx={{ mt:13 }} >
        <Typography sx={{ fontSize: '4rem', textAlign: 'center' }}>
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa", "#48de43"]}
                  animationSpeed={5}
                  showBorder={false}
                >
                 Something About Divanshu
                </GradientText>
              </Typography>

            <Box sx={{ display:"flex", justifyContent:'space-evenly', width:"100%", }} >

                <Box sx={{ width:"50%", display:'flex', alignItems:'center', justifyContent:"center" }} >
                <Box component="img" src={potrait} sx={{ width:"20rem" }} />
                </Box>

                <Box sx={{ display:"flex", alignItem:'left', mt:3 , flexDirection:"column", width:"50%", gap:5 }} >
                    <Box sx={{ display:"flex", alignItems:"center", gap:2 }} >
                        <Box component="img" src={gmail} sx={{ width:"3rem" }} />
                        <Typography sx={{ fontSize:"1.2rem", color:"white", mt:2 }} >divanshu2211@gmail.com</Typography>
                    </Box>

                    <Box sx={{ display:"flex", alignItems:'center', gap:2 }} >
                        <Box component="img" src={linkedin} sx={{ width:"3rem" }} />
                        <Typography sx={{ fontSize:"1.2rem", color:"white", mt:2 }} >linkedin.com/in/divanshu-sharma-105a2b227/</Typography>
                    </Box>

                    <Box sx={{ display:"flex",  alignItems:'center', gap:2 }} >
                        <Box component="img" src={calender} sx={{ width:"3rem" }} />
                        <Typography sx={{ fontSize:"1.2rem", color:"white", mt:2 }} >05 Dec 2025</Typography>
                    </Box>

                    <Box sx={{ display:"flex",  alignItems:'center', gap:2 }} >
                        <Box component="img" src={location} sx={{ width:"3rem" }} />
                        <Typography sx={{ fontSize:"1.2rem", color:"white", mt:2 }} >Panipat</Typography>
                    </Box>

                    <Box sx={{ display:'flex', alignItems:'center', justifyContent:"space-between" }} >

                    <Box>
                        <Typography sx={{ color:'gray' }} >Projects Undertaken</Typography>
                            <CountUp
                            from={0}
                            to={8}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                            id="count"
                          />
                    </Box>
                    
                    <Box>
                        <Typography sx={{ color:'gray' }} >Satisfied Submission</Typography>
                        <CountUp
                            from={0}
                            to={8}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                            id="count"
                          />
                    </Box>

                    <Box>
                        <Typography sx={{ color:'gray' }} >Project Contribution</Typography>
                        <CountUp
                            from={0}
                            to={12}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                            id="count"
                          />
                    </Box>

                    </Box>

                </Box>


            </Box>

        </Box>


    </Box>
  )
}

export default About