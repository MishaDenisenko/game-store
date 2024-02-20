import React from 'react';
import styles from './App.module.css';

import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';
import HomePage from '../HomePage';


const App = () => {
    return (
        <div className={styles.App}>
            <Router>
                <Routes>
                    <Route path={'/'}>
                        <HomePage/>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
