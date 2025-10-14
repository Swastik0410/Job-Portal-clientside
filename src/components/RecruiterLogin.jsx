import React, { useState } from 'react'
import { assets } from '../assets/assets'

const RecruiterLogin = () => {
  const [state, setState] = useState('Login')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState(false)
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false)

  return (
    <div className='fixed inset-0 z-10 bg-black/40 backdrop-blur-sm flex justify-center items-center'>
      <form
        action=""
        className='bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-md border border-gray-100 flex flex-col gap-6'
      >
        <h1 className='text-2xl font-semibold text-gray-800 text-center'>
          Recruiter {state}
        </h1>
        <p className='text-center text-gray-500 text-sm'>
          Welcome back! Please sign in to continue
        </p>

        <>

            {state!=='Login' && (<div className='flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus-within:border-blue-500'>
            <img
              src={assets.person_icon}
              alt=""
              className='w-5 h-5 opacity-70'
            />
            <input
              type="text"
              placeholder='Company Name'
              required
              onChange={e => setName(e.target.value)}
              className='w-full bg-transparent outline-none text-gray-700 placeholder-gray-400'
            />
          </div>)}


          

          <div className='flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus-within:border-blue-500'>
            <img
              src={assets.email_icon}
              alt=""
              className='w-5 h-5 opacity-70'
            />
            <input
              type="email"
              placeholder='Email Id'
              required
              onChange={e => setEmail(e.target.value)}
              className='w-full bg-transparent outline-none text-gray-700 placeholder-gray-400'
            />
          </div>

          <div className='flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus-within:border-blue-500'>
            <img
              src={assets.lock_icon}
              alt=""
              className='w-5 h-5 opacity-70'
            />
            <input
              type="password"
              placeholder='Password'
              required
              onChange={e => setPassword(e.target.value)}
              className='w-full bg-transparent outline-none text-gray-700 placeholder-gray-400'
            />
          </div>
          <p className='text-sm text-blue-600 my-1 cursor-pointer'>Forgot Password?</p>
        </>

        <button
          className='w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-2.5 rounded-3xl font-semibold shadow'
        >
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>
                {
                    state==='Login'?<p>Don't have an Account?<span onClick={()=>setState("Sign Up")}>Sign Up</span></p>:<p>Already have an account?<span onClick={()=>setState('Login')}>Login</span></p>
                }
        
        
      </form>
    </div>
  )
}

export default RecruiterLogin
