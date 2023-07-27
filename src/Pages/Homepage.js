import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/LANDING PAGE COMPONENTS/JS FILES/Banner'
import NightModeToggle from '../Components/LANDING PAGE COMPONENTS/JS FILES/NightModeToggle'
import GenderStore from '../Components/LANDING PAGE COMPONENTS/JS FILES/GenderStore'
import Cat from '../Components/LANDING PAGE COMPONENTS/JS FILES/Cat'
import Videocard from '../Components/LANDING PAGE COMPONENTS/JS FILES/Videocard'
import Newin from '../Components/LANDING PAGE COMPONENTS/JS FILES/Newin'
import Bestseller from '../Components/LANDING PAGE COMPONENTS/JS FILES/Bestseller'
import Footer from '../Components/Footer'


// Firebase imports
import {auth} from "../Components/config/firebase-config"

export default function Homepage() {

  useEffect(() => {
    document.title = "Hype - Home";
  }, []);
  return (
    <>
      <Navbar opt1='MENS' opt2='WOMENS' opt3='KIDS' signoutButton={false} />
      <Banner/>
      <NightModeToggle/>
      <GenderStore/>
      <Cat/>
      <Videocard/>
      <Newin/>
      <Bestseller/>
      <Footer/>
    </>
  )
}
