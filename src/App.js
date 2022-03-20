import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { LogIn } from './components/LogIn';

import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import './styles/global.css'
import { SignUp } from './components/Signup';

function App() {
  return (
    <>
      <Header />

      <Link to='/login'>LogIn</Link>
      <Link to='/signup'>SignUp</Link>

      <Routes>
        <Route exact path='/login' element={<LogIn />}></Route>
        <Route exact path='/signup' element={<SignUp />}></Route>
      </Routes>

      <Layout />
    </>
  );
}

export default App;
