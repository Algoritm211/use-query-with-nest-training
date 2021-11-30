import React from 'react';
import {Button, Grid} from "@mui/material";

const MainPage = () => {
  return (
    <Grid
      container
      sx={{padding: '45px 0'}}
      alignItems='center'
      flexDirection='column'
      spacing={2}
    >
      <Grid item>
        <Button variant='contained' href='/create'>
          Create user
        </Button>
      </Grid>
      <Grid item>
        <Button variant='contained' href='/all'>
          All users
        </Button>
      </Grid>
    </Grid>
  );
};

export default MainPage;
