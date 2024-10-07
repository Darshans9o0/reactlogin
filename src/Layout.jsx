import React from 'react'
import header from './components/Header/header'
import fotter from './components/Fotter/fotter'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>
   <header/>
   <Outlet/>

   <fotter/>
   
   </>
  )
}

export default Layout