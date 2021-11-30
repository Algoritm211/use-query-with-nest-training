import Container from '@mui/material/Container';
import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path='/create' element={<div>Some page</div>} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/*' element={<Navigate replace to='/main' />} />
    </Routes>
  );
}

export default App;
