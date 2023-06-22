import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Container, Divider, Flex, Paper, PasswordInput, TextInput, Title } from '@mantine/core'
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const DEFAULT_FORM_FIELDS = {
  name: '',
  email: '',
  password: ''
}
const Auth = () => {
  // context
  const { login, signup } = useContext(AuthContext);
  // states
  const [form, setForm] = useState(DEFAULT_FORM_FIELDS);
  const location = useLocation();
  // type of form
  const type = new URLSearchParams(location.search).get('type');
  const isLoginForm = type === 'login';

  // handlers
  const handleChange = e => {
    const fieldName = e.target.name;
    setForm({ ...form, [fieldName]: e.target.value });
  }
  const handleSubmit = e => {
    e.preventDefault();

    if(isLoginForm) {
      login(form)
    } else {
      signup(form)
    }
  }

  return (
    <Container h={'calc(100vh - 60px)'}>
      <Flex h={'100%'} justify={'center'} align={'center'}>
        <Paper withBorder p={'lg'} maw={500} w={'100%'}>
          <Title order={3}>{isLoginForm ? 'Log In' : 'Sign Up'}</Title>
          <Divider my={15} />
          <Box component='form' onSubmit={handleSubmit}>
            <Flex gap={15} direction={'column'}>
              {!isLoginForm && <TextInput
                placeholder='Eg. John Doe'
                label='Enter Name'
                value={form.name}
                name='name'
                onChange={handleChange}
              />}
              <TextInput
                placeholder='Eg. example@email.com'
                label='Enter Email'
                value={form.email}
                name='email'
                onChange={handleChange}
              />

              <PasswordInput
                placeholder='*********'
                label="Enter Password"
                value={form.password}
                name='password'
                onChange={handleChange}
              />

              <Button variant='gradient' type='submit'>
                {isLoginForm ? 'Log In' : 'Sign Up'}
              </Button>
            </Flex>
          </Box>
        </Paper>
      </Flex>
    </Container>
  )
}

export default Auth