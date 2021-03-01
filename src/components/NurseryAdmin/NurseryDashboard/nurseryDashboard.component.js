import React from 'react';
import { DashNav } from '../../Dashboard/DashNav/dashNav.component';
import { Sidebar } from '../../Dashboard/Sidebar/sidebar.component';
import './nurseryDashboard.component.css';


 export const NurseryDashboard = ()=>{
     return(
         <>
        <Sidebar/>
        <DashNav />
         </>
     )
 }
