import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
    const navigate=useNavigate()
  return (
    <div className='min-h-screen'>
     {/* Navbar for Recruiter panel*/}
     <div className='shadow py-4'>
        <div className='px-5 flex justify-between items-center'>
            <img src={assets.logo} alt="" className=' max-sm:w-32 cursor-pointer' onClick={e=>navigate('/')}/>
            <div className='flex items-center gap-3'>
                <p className='max-sm:hidden'>Welcome , Swastik</p>
                <div className='relative group'>
                    <img src={assets.company_icon} alt="" className='w-8 border rounded-full' />
                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                        <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                            <li className='py-1 px-2 cursor-pointer pr-10'>LogOut</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Dashboard