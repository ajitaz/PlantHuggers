import React from 'react';
import { DashNav } from '../../Dashboard/DashNav/dashNav.component';
import { Sidebar } from '../../Dashboard/Sidebar/sidebar.component';
import { Overview } from '../../Dashboard/Overview/overview.component';
import './nurseryDashboard.component.css';


 export const NurseryDashboard = ()=>{
     return(
         <>
         <Sidebar isNurseryAdmin= {true} />
              <div className="main-content">
                    <DashNav />
                    <Overview isOverview= {true} />
                </div>
         </>
     )
 }
