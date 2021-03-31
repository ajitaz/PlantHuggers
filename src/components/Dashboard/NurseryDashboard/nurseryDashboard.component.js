import React from 'react';
import { DashNav } from '../DashNav/dashNav.component';
import { Sidebar } from '../Sidebar/sidebar.component';
import { Overview } from '../Overview/overview.component';
import './nurseryDashboard.component.css';


 export const NurseryDashboard = ()=>{
     return(
         <>
         <Sidebar isNurseryAdmin= {true} />
              <div className="main-content">
                    <DashNav />
                    <Overview isNursery= {true} />
                </div>
         </>
     )
 }
