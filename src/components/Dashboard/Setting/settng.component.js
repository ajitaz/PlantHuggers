import React from 'react';
import Popup from 'reactjs-popup';
import { AddArticle } from '../AddArticle/addArticle.component';
import { AddCategory } from '../AddCategory/addCategory.component';
import { DashNav } from '../DashNav/dashNav.component';
import { Sidebar } from '../Sidebar/sidebar.component';
import './setting.component.css';

export const Setting = () => {
    return (
        <>
            <div className="main-content">
                <DashNav />
                <Sidebar />
                <main>
                    <h2 className="dash-title">Setting</h2>
                    <div className="setting-div">

                        <Popup trigger={<button className="primary"><i className="fa fa-plus-circle"></i> Add Article</button>} position="right center" modal >
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>&times;</button>
                                    <AddArticle />
                                </div>
                            )}
                        </Popup>
                        <Popup trigger={<button className="primary"><i className="fa fa-plus-circle"></i> Add category</button>} position="right center" modal>
                        {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>&times;</button>
                                    <AddCategory />
                                </div>
                            )}
                        </Popup>
                    </div>

                </main>
            </div>
        </>
    )
}