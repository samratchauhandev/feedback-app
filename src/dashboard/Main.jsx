import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/header'
import DashboardCard from '../components/DashboardCard'
import SideBar from '../scenes/sideBar'
import FeedBackForm from '../scenes/FeedBackForm'

function Main() {
  return (
    <Box>
        <Header/>
       {/* <Box sx={{display:'flex', gap:'34px', flexWrap:'wrap', m:'55px 0 0 44px'}}>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
        <DashboardCard/>
       </Box> */}
       <FeedBackForm/>
       <SideBar />
    </Box>
  )
}

export default Main