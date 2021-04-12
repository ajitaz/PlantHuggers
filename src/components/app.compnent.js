import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import { AppRouting } from './app.routing';
import { Provider } from 'react-redux';
import { store } from './../store';

export const App = () => {
    return (
        <>
            <Provider store={store}>
                <AppRouting />
            </Provider>
            <ToastContainer autoClose={2000} transition={Zoom} />
        </>
    );
}