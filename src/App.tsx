import { Grid } from '@mui/material';
import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import CreateUser from "./pages/CreateUser/CreateUser";
import MainPage from './pages/MainPage/MainPage';

const App = () => {
  return (
    <Grid
      sx={{padding: '45px 0'}}
      container
    >
      <Routes>
        <Route path='/create' element={<CreateUser />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/*' element={<Navigate replace to='/main' />} />
      </Routes>
    </Grid>

  );
}

export default App;
