import React from 'react';

import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import HomePage from '../HomePage';
import Header from '../../components/Header';

import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
