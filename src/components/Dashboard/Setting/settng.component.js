import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import AddArticle from '../AddArticle/addArticle.component';
import AddCategory from '../AddCategory/addCategory.component';
import './setting.component.css';

export const Setting = (props) => {

    return (
        <>
            <div className="main-content">
                <main>
                    <h2 className="dash-title">Setting</h2>
                    <div className="setting-div">

                        <Popup trigger={<button className="primary" style={{ cursor: 'pointer' }}><i className="fa fa-plus-circle"></i> Add Article</button>} position="right center" modal >
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>&times;</button>
                                    <AddArticle close={close} />
                                </div>
                            )}
                        </Popup>
                        <Popup trigger={<button className="primary" style={{ cursor: 'pointer' }}><i className="fa fa-plus-circle"></i> Add category</button>} position="right center" modal>
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>&times;</button>
                                    <AddCategory close={close} />
                                </div>
                            )}
                        </Popup>
                    </div>

                </main>
            </div>
        </>
    )
}