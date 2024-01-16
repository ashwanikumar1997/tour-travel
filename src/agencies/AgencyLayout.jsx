import React from 'react';
import Topbar from './topbar/components/Topbar'

 const AgencyLayout = ({children}) => {
  return (
    <>
        <Topbar/>
        {children}
   
    </>
  )
}

export default AgencyLayout;