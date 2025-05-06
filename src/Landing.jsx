
// import './App.css'
import { Box, Typography, Button } from '@mui/material'
import Aurora from './component/Aurora.jsx'
import Header from './component/Header.jsx'
import RotatingText from './component/RotatingText.jsx'
import NextPage from './NextPage.jsx'

const Landing = () => {
  return (
     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh', width: '100%', overflow: 'hidden' }}>
      <Header />
    <Aurora sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    //   zIndex:1,
    }} />

    <Box sx={{ mt:10 }} >
      {/* <Typography sx={{ fontSize:'1.5rem', color:'#bfbbbb' }} >Hii👋, This Side..</Typography> */}
      <Typography sx={{ fontSize:'6rem', color:'white', fontWeight:600, mt:-1 }} > I'm <span style={{ color:"#60ff40" }} > Divanshu </span> Sharma</Typography>
      <Box sx={{ zIndex:1 }} >
        
      <RotatingText
        texts={['Frontend', 'Mern_Stack', 'React_JS']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
    />
      </Box>
    </Box>

  <Button variant='contained' sx={{ fontFamily:'poppins', fontSize:"1.2rem", mt:15, backgroundColor:"#36f75a", boxShadow:'0px 0px 10px 2px rgba(115, 241, 138, 0.76)' }} >Download Resume..</Button>    

    </Box>
  )
}

export default Landing