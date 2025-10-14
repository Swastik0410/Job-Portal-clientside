import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [resume, setResume] = useState(null)

  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        {/* Resume Section */}
        <h2 className='text-xl font-semibold'>Your Resume</h2>
        <div className='flex gap-2 mb-6 mt-3'>
          {isEdit ? (
            <>
              <label htmlFor="resumeUpload" className='flex items-center'>
                <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2 cursor-pointer'>
                  Select Resume
                </p>
                <input
                  type="file"
                  hidden
                  accept='application/pdf'
                  onChange={e => setResume(e.target.files[0])}
                  id='resumeUpload'
                />
                <img src={assets.profile_upload_icon} alt="upload icon"  />
              </label>
              <button
                onClick={() => setIsEdit(false)}
                className='bg-green-100 border border-green-400 rounded-lg px-4 py-2 cursor-pointer hover:bg-green-200 transition'
              >
                Save
              </button>
            </>
          ) : (
            <div className='flex gap-2'>
              <a
                href={resume ? URL.createObjectURL(resume) : "#"}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition'
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-100 transition'
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* Jobs Applied Section */}
        <h2 className='text-xl font-semibold mb-4'>Jobs Applied</h2>

        <div className='overflow-x-auto'>
          <div className='bg-white rounded-2xl shadow-sm border border-gray-100'>
            <table className='min-w-full text-left border-separate border-spacing-y-2'>
              <thead className='bg-gray-50'>
                <tr className='text-gray-600 text-sm font-medium'>
                  <th className='py-3 px-6 rounded-tl-2xl'>Company</th>
                  <th className='py-3 px-6'>Job Title</th>
                  <th className='py-3 px-6 max-sm:hidden'>Location</th>
                  <th className='py-3 px-6 max-sm:hidden'>Date</th>
                  <th className='py-3 px-6 rounded-tr-2xl'>Status</th>
                </tr>
              </thead>
              <tbody>
                {jobsApplied.map((job, index) => (
                  <tr
                    key={index}
                    className='bg-white hover:bg-gray-50 transition shadow-sm rounded-xl'
                  >
                    <td className='py-3 px-6 flex items-center gap-3'>
                      <img
                        className='w-9 h-9 rounded-full border border-gray-200'
                        src={job.logo}
                        alt={job.company}
                      />
                      <span className='font-medium text-gray-800'>{job.company}</span>
                    </td>
                    <td className='py-3 px-6 text-gray-700'>{job.title}</td>
                    <td className='py-3 px-6 text-gray-500 max-sm:hidden'>{job.location}</td>
                    <td className='py-3 px-6 text-gray-500 max-sm:hidden'>
                      {moment(job.date).format('ll')}
                    </td>
                    <td className='py-3 px-6'>
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full
                          ${
                            job.status === 'Accepted'
                              ? 'bg-green-100 text-green-700'
                              : job.status === 'Rejected'
                              ? 'bg-red-100 text-red-600'
                              : 'bg-gray-100 text-gray-600'
                          }
                        `}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Applications
