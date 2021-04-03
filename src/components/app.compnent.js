import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import { AppRouting } from './app.routing';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    return (
        <>
            <AppRouting />
            <ToastContainer autoClose={2000} transition={Zoom} />
        </>
    );
}