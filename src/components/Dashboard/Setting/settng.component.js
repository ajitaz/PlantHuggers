import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import AddArticle from '../AddArticle/addArticle.component';
import AddCategory from '../AddCategory/addCategory.component';
import { DashNav } from '../DashNav/dashNav.component';
import './setting.component.css';

export const Setting = (props) => {
    const [state, setState] = useState({
        isPopup: false
    })

    useEffect(() => {

        if (props.location.fromPopup === true) {
            setState({
                isPopup: props.location.fromPopup ? true : false
            })
            props.location.fromPopup = false
        }
    })

    return (
        <>
            <div className="main-content">
                <DashNav />
                <main>
                    <h2 className="dash-title">Setting</h2>
                    <div className="setting-div">

                        <Popup trigger={<button className="primary" style={{ cursor: 'pointer' }}><i className="fa fa-plus-circle"></i> Add Article</button>} position="right center" modal >
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>&times;</button>
                                    <AddArticle />
                                </div>
                            )}
                        </Popup>
                        <Popup trigger={<button className="primary" style={{ cursor: 'pointer' }}><i className="fa fa-plus-circle"></i> Add category</button>} position="right center" modal>
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