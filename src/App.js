import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import LogRegPage from './Login_register.jsx';
import ProfilePage from './Profile.jsx';
import LoggedInRoute from './LoggedinRoutes.jsx';
import ProtectedRoute from './ProtectedRoutes'
// import NavBar from './Navbar.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<LoggedInRoute />}>
          <Route path="/" element={<LogRegPage />} exact />
        </Route>
        
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<ProfilePage />} exact />
        </Route>
      </Routes>
    </>
  );
}

export default App;
