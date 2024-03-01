import React from 'react'
import Footer from './Footer'
import Header1 from './Header1'

function Layout1({children}) {
  return (
    <div>
    <Header1 />
    
    <div>{children}</div>
    <Footer /> 
    </div>
  )
}

export default Layout1