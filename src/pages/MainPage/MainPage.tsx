import React from 'react';
import {Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";

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
        <Button
          component={Link}
          to='/create'
          variant='contained'>
          Create user
        </Button>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/all"
          variant="contained"
          color="primary">
          All users
        </Button>
      </Grid>
    </Grid>
  );
};

export default MainPage;
