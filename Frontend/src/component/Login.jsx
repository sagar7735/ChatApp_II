import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    // const [authUser, setAuthUser] = useAuth();
          //  const navigate= useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    };
    

    axios
      .post('http://localhost:2000/user/login', userInfo)
      .then((response) => {
        if (response.data) {
          alert('Login successful');
        //  navigate('/')
          localStorage.setItem('ChatApp', JSON.stringify(response.data));
        }
      })
      .catch((error) => {
        if (error.response) {
          alert('Error: ' + (error.response?.data?.error || 'Something went wrong'));
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-screen ml-[30%]">
      <form onSubmit={handleSubmit(onSubmit)} className="border border-white px-6 py-2 rounded-md space-y-3 w-96">
        <h1 className="text-2xl text-center">
          Chat <span className="text-green-500 font-semibold">App</span>
        </h1>
        <h2 className="text-2xl font-bold text-white">Login</h2>

        <label className="input validator">
          <input
            type="email"
            placeholder="mail@site.com"
            {...register('email', { required: 'Email is required' })}
          />
        </label>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <label className="input validator">
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: 8,
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                message: 'Must contain uppercase, lowercase, and number'
              }
            })}
          />
        </label>
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <div className="flex justify-between">
          <p>
            New User?
            <Link to="/signup" className="text-blue-500 underline cursor-pointer ml-1">Signup</Link>
          </p>
          <input
            type="submit"
            value="Login"
            className="text-white bg-green-500 px-4 py-2 cursor-pointer rounded-2xl"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
