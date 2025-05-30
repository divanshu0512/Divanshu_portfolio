import { Box, Typography } from '@mui/material'
import React from 'react'
import GradientText from './component/GradientText';
import work from "./assets/images/graduation.png";
import tool from "./assets/images/experience.png";

const Journey = () => {
  return (
    <Box sx={{ backgroundColor:'black' , minHeight:"100vh"}} > 
            <Typography sx={{ fontSize:'4rem', paddingTop:"2rem" }} >
      <GradientText
      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa", "#48de43"]}
      animationSpeed={5}
      showBorder={false}
      className="custom-class"
    >
      My Academic and Professional Journey..  
</GradientText>
      </Typography>


    <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-evenly', mt:'3rem' }} >

        <Box sx={{ display:'flex', alignItems:'center', justifyContent:"center", flexDirection:'column' }} >
        <Box component="img" src={work} sx={{ width:'5rem' }} />
        <Typography sx={{ fontFamily:'poppins', fontWeight:500, fontSize:"1.8rem", mt:2 }} >Education</Typography>


        </Box>


        <Box sx={{ display:'flex', alignItems:'center', justifyContent:"center", flexDirection:'column' }} >
            <Box component="img" src={tool} sx={{ width:'4.5rem' }} />
            <Typography sx={{ fontFamily:'poppins', fontWeight:500, fontSize:"1.8rem", mt:2 }} >Experience</Typography>
        </Box>

    </Box>

    <Box sx={{ display:'flex', justifyContent:'space-evenly', mt:2 }} >

    <Box sx={{  }} >

        
    <Box sx={{ width:"35rem", height:"10rem", border:"1px solid white", p:2, borderRadius:"2rem", mt:2, position:"relative" }} >
        <Box sx={{ display:'flex', alignItems:'center', position:'absolute', right:-20, top:5 }} >
            <Typography sx={{ fontFamily:'Poppins', fontWeight:500, fontSize:"0.85rem", backgroundColor:'#119400', color:"", padding:"3px", borderRadius:5, transform:"rotate(15deg)" }} >Highest Qualification</Typography>
        </Box>
            <Box sx={{ display:'flex', alignItems:"center", justifyContent:"space-evenly", mt:1 }} >  
                <Typography sx={{ fontFamily:"Poppins", fontSize:"0.9rem", color:"#bababa" }}  >08/2023</Typography>
                <Typography sx={{ fontFamily:"Poppins", fontSize:"0.9rem", color:"#bababa" }} >Present</Typography>
            </Box>

            <Box sx={{ mt:2 }} >
                <Typography sx={{ fontFamily:'Poppins', fontWeight:500, fontSize:"1.2rem", textAlign:"center" }} >APIIT SD INDIA , Panipat (Haryana)</Typography>
                <Typography sx={{ fontFamily:'poppins', fontSize:"1rem", color:"#bababa", mt:2, textAlign:"center" }} >B.Tech - Bachelor of Technology (Graduation) </Typography>
                <Typography sx={{ fontFamily:'poppins', fontSize:"1rem", color:"#bababa", mt:2, textAlign:"center", fontWeight:400 }} > Grade - 8.28 CGPA </Typography>

            </Box>
        </Box>


        {/* <Box sx={{ width:"35rem", height:"8 rem", border:"1px solid white", p:2, borderRadius:"2rem", mt:5 }} >
            <Box sx={{ display:'flex', alignItems:"center", justifyContent:"space-evenly", mt:1 }} >  
                <Typography sx={{ fontFamily:"Poppins", fontSize:"0.9rem", color:"#bababa" }}  >08/2018</Typography>
                <Typography sx={{ fontFamily:"Poppins", fontSize:"0.9rem", color:"#bababa" }} >10/2021</Typography>
            </Box>

            <Box sx={{ mt:2 }} >
                <Typography sx={{ fontFamily:'Poppins', fontWeight:500, fontSize:"1.2rem" }} >G.B.N Govt Polytechnic, Haryana</Typography>
                <Typography sx={{ fontFamily:'poppins', fontSize:"1rem", color:"#bababa", mt:2 }} >Technical Diploma - Polytechnic</Typography>
            </Box>
        </Box> */}
    </Box>



    <Box>
    <Box sx={{ width:"35rem", height:"10rem", border:"1px solid white", p:2, borderRadius:"2rem", mt:2 }} >
            <Box sx={{ display:'flex', alignItems:"center", justifyContent:"space-evenly", mt:1 }} >  
                <Typography sx={{ fontFamily:"Poppins", fontSize:"0.9rem", color:"#bababa" }}  >22 August 2022 </Typography>
                <Typography sx={{ fontFamily:"Poppins", fontSize:"0.9rem", color:"#bababa" }} >26 April 2025</Typography>
            </Box>

            <Box sx={{ mt:2 }} >
                <Box sx={{ display:'flex', alignItems:"center", justifyContent:"space-between" }} >  
                <Typography sx={{ fontFamily:'Poppins', fontWeight:500, fontSize:"1.2rem" }} >Eezib Technology, Jaipur, Rajasthan</Typography>
                <Typography sx={{ fontFamily:'poppins', fontSize:"0.9rem", color:"White", fontWeigh:400 }} >Software Developer</Typography>
                </Box>
                <ul style={{ marginLeft:"2rem", marginTop:"0.7rem" }} >
                    <li style={{ fontFamily:"poppins", fontWeight:400, fontSize:"0.8rem", color:"gray" }} >Developed APIs/modules for B2B & B2C</li>
                    <li style={{ fontFamily:"poppins", fontWeight:400, fontSize:"0.8rem", color:"gray" }} >Automated wallet, PG, and billing systems, web scrapping</li>
                    <li style={{ fontFamily:"poppins", fontWeight:400, fontSize:"0.8rem", color:"gray" }} >Delivered client-friendly reporting solutions</li>
                </ul>
            </Box>
        </Box>
    </Box>

    </Box>


    </Box>
  )
}

export default Journey