import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
        <img src={assets.logo} alt=""  width={160}/>
        <p className='flex-1 border-1 border-gray-50 pl-4 text-sm text-gray-500mmax-sm:hidden'>Copyright @Swastik.dev| All rights reserved</p>
        <div className='flex gap-2.5'>
            <img src={assets.twitter_icon} alt="" width={38} />
            <img src={assets.facebook_icon} alt="" width={38} />
            <img src={assets.instagram_icon} alt=""  width={38} />
        </div>
    </div>
  )
}

export default Footer