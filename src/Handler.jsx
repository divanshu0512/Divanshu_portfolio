import React from 'react'
import Landing from './Landing'
import NextPage from './NextPage'
import Skillls from './Skillls'
import Services from './Services'
import Journey from './Journey'
import Contact from './Contact'

const Handler = () => {
  return (
    <div style={{ }} >
        <Landing />
        <NextPage/>
        <Skillls/>
        {/* <NextPage/> */}
        <Services/>
        <Journey/>
        <Contact/>
    </div>
  )
}

export default Handler