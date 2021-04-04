import React from 'react';
import './nurseryArticle.component.css';
import AddArticle from './../../AddArticle/addArticle.component';

export const NurseryArticle = () => {
    return (
        <>
            <div className="main-content">
                <main>
                    <div className="form">
                        <AddArticle />
                    </div>

                </main>
            </div>
        </>
    )
}