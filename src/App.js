import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { LogIn } from './components/LogIn';
import { Posts } from './components/Posts';
import { Upload } from './components/Upload';
import { Logout } from './components/Logout';

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
      <Link to='/posts'>Posts</Link>
      <Link to='/upload'>Upload</Link>

      <Routes>
        <Route exact path='/login' element={<LogIn />}></Route>
        <Route exact path='/signup' element={<SignUp />}></Route>
        <Route exact path='/posts' element={<Posts />}></Route>
        <Route exact path='/upload' element={<Upload />}></Route>
        <Route exact path='/logout' element={<Logout />}></Route>
      </Routes>

      <Layout />
    </>
  );
}

export default App;
