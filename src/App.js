import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Signup } from './components/Signup';

import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import './styles/global.css'

function App() {
  return (
    <>
      <Header />

      <Link to='/signup'>SignUp</Link>

      <Routes>
        <Route exact path='/signup' element={<Signup />}>

        </Route>
      </Routes>

      <Layout />
    </>
  );
}

export default App;
