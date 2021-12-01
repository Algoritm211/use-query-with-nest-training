import {Button, FormControl, FormHelperText, Input, InputLabel} from '@mui/material';
import React, {useState} from 'react';
import {useMutation} from "react-query";
import UserAPI from '../../api/user.api';
import {CreateUserDto} from "./dto/createUser.dto";

const UserForm: React.FC = () => {
  const mutation = useMutation(
    'createUser',
    (data: CreateUserDto) => UserAPI.create(data)
  )
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const createUser = async () => {
    mutation.mutate({
      name: userName,
      email: userEmail,
      password: userPassword,
    })
  };

  return (
    <>
      <FormControl fullWidth sx={{margin: '20px 0'}}>
        <InputLabel htmlFor='user-name'>User name</InputLabel>
        <Input
          onChange={(event) => setUserName(event.target.value)}
          id='user-name'
          aria-describedby='user-name-helper-text' />
        <FormHelperText id='user-name-helper-text'>
          We'll never share your name.
        </FormHelperText>
      </FormControl>
      <FormControl fullWidth sx={{margin: '20px 0'}}>
        <InputLabel htmlFor='user-email'>Email address</InputLabel>
        <Input
          onChange={(event) => setUserEmail(
            event.target.value)}
          id='user-email'
          aria-describedby='user-email-helper-text' />
        <FormHelperText id='user-email-helper-text'>
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl fullWidth sx={{margin: '20px 0'}}>
        <InputLabel htmlFor='user-password'>Password</InputLabel>
        <Input
          onChange={(event) => setUserPassword(event.target.value)}
          id='user-password'
          type='password'
          aria-describedby='user-password-helper-text' />
        <FormHelperText id='user-password-helper-text'>
          We'll never share your password.
        </FormHelperText>
      </FormControl>
      <Button
        onClick={createUser}
        disabled={mutation.isLoading}
        variant='contained'>
        Add new user
      </Button>
      {mutation.isSuccess && (
        <div style={{margin: '20px 0'}}>
          User with name {mutation.data.name} was created
        </div>
      )}
      {mutation.isError && (
        <div style={{margin: '20px 0'}}>
          And error was occurred
        </div>
      )}
    </>
  );
};

export default UserForm;
