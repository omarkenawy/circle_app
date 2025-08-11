import React, { useContext, useState } from 'react'
import { Input, Button } from "@heroui/react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '../schema/loginSchema';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../services/loginServices';
import { authContext } from '../context/AuthContext';



export default function LoginPage() {


  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      email: 'omarehab@gmail.com',
      password: 'Omar@123',
    },
    resolver: zodResolver(schema)
  })

  let nav = useNavigate();
  let { setIsLogged } = useContext(authContext);

  async function login(userData) {
    setLoading(true);

    const response = await userLogin(userData)
    if (response.message) {
      localStorage.setItem('token', response.token);
      setIsLogged(response.token);
      nav('/');
    } else {
      setApiError(response)
    }
    setLoading(false);
  }


  return <>
    <div className="flex justify-center items-center bg-sky-300 h-screen">
      <div className="text-center bg-white rounded-2xl p-8 w-full max-w-md">
        <h1 className='text-center mb-4'>Login </h1>
        <form className='space-y-3' onSubmit={handleSubmit(login)}>
          <Input variant="bordered" isInvalid={Boolean(errors.email)} errorMessage={errors.email?.message}  {...register('email')} label='E-mail' type="email" />
          <Input variant="bordered" isInvalid={Boolean(errors.password)} errorMessage={errors.password?.message} {...register('password')} label='Password' type="password" />
          <Button isLoading={loading} type="submit" color="primary" className="px-40">Login</Button>
          {apiError ? <span className='text-center text-red-600'>{apiError}</span> : ''}
          <p className='pt-4'>If you don't have an accont please <Link to={'/register'} className='text-blue-500'>Create an account</Link></p>
        </form>
      </div>
    </div>

  </>
}

