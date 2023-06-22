import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PATHS from './constants/paths';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Header from './components/common/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.AUTH} element={<Auth />} />
        <Route path={PATHS.PROFILE} element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;