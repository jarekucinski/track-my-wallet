import React from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const { register, handleSubmit } = useForm()

  const handleSignIn = (data) => {
    console.log(data)
  }

  return (
    <Box display={'flex'} justifyContent="center">
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Box display={'flex'} flexDirection={'column'} width="300px">
          <TextField {...register('email')} label="email" variant="standard" />
          <TextField {...register('password')} label="password" variant="standard" />
          <Button type="submit" variant="contained">
            Singin
          </Button>
          <div>
            Need an account?{' '}
            <Link to="/auth/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </Box>
      </form>
    </Box>
  )
}

export default SignIn
