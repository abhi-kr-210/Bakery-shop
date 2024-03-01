
import React from 'react'
import Layout from '../../Component/Layouts/Layout'
import Section1 from './Section1'
import "../../Styles/HomeStyle.css"
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
function Homes() {
  return (
    <div>
    <Layout>
         {/* Home Section Hero Banner */}
         <Section1 />
        {/* Home  about Section  */}
        <Section2 />  
        {/* Home   Menu Section  */}
        <Section3 />
        {/* Home   promotion Section  */}
        <Section4 />
         {/* Home   Shop Section  */}
        <Section5 />
       {/* Home   blog Section  */}
       <Section6 />
       {/* Home   contact Section  */}
       <Section7 />
    </Layout>
    
    </div>
  )
}

export default Homes