import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CryptoList from './Pages/CryptoList';
import Crypto from './stores/Crypto';
import CryptoDetail from './Pages/CryptoDetail';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Crypto>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/trending' element={<CryptoList/>}/>
      <Route path='/details' element={<CryptoDetail/>}/>
     
    </Routes>
    </BrowserRouter>
    </Crypto>
  </React.StrictMode>
);
