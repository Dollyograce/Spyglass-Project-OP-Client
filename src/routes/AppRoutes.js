import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import { ProtectedRoutes, PublicRoutes } from './ProtectedRoutes';
import Register from '../pages/Register';
import Goals from '../pages/Goals';
import CreateArea from '../pages/CreateArea';
import Note from '../pages/Note';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<ProtectedRoutes/>}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/create" element={<CreateArea />} />
                <Route path="/notes" element={<Note />} />
            </Route>
            <Route path="/" element={<PublicRoutes />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    )
}
