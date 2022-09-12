import React from 'react'
import { Button, TextField, Box } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const { register, handleSubmit } = useForm()

  const handleSubmitCallback = (e) => {
    console.log(e)
  }

  return (
    <Box display={'flex'} justifyContent="center">
      <form onSubmit={handleSubmit(handleSubmitCallback)}>
        <Box display={'flex'} flexDirection={'column'} width="300px">
          <TextField {...register('email')} label="email" variant="standard" />
          <TextField {...register('password')} label="password" variant="standard" />
          <TextField {...register('passwordConfirmation')} label="confirm password" variant="standard" />
          <Button type="submit" variant="contained">
            Singup
          </Button>
          <div>
            Already have an account?{' '}
            <Link to="/auth/signin">
              <Button>Log In</Button>
            </Link>
          </div>
        </Box>
      </form>
    </Box>
  )
}

export default SignUp
