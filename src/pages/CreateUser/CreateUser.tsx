import React from 'react';
import UserForm from "../../components/UserForm/UserForm";
import {Container, Grid} from "@mui/material";

const CreateUser: React.FC = () => {
  return (
    <Container>
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={10}>
          <UserForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateUser;
