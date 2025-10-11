import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import kConvert from 'k-convert'
import moment from 'moment'
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'

const ApplyJob = () => {
  const { id } = useParams()
  const [jobData, setJobData] = useState(null)
  const { jobs } = useContext(AppContext)

  const fetchJob = async () => {
    const data = jobs.filter(job => job._id === id)
    if (data.length !== 0) setJobData(data[0])
  }

  useEffect(() => {
    if (jobs.length > 0) fetchJob()
  }, [id, jobs])

  return jobData ? (
    <>
      <Navbar />
      <div className='min-h-screen py-10 bg-gray-50'>
        <div className='container mx-auto px-4 2xl:px-20'>
          {/* Job Header Card */}
          <div className='bg-white rounded-2xl shadow-md p-8 md:p-12 border border-gray-200 mb-10'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
              {/* Left Side */}
              <div className='flex flex-col md:flex-row items-center text-center md:text-left'>
                <img
                  src={jobData.companyId.image}
                  alt=''
                  className='h-24 w-24 object-contain bg-white rounded-xl border border-gray-200 p-3 mb-4 md:mb-0 md:mr-6'
                />
                <div>
                  <h1 className='text-3xl font-semibold text-gray-800'>
                    {jobData.title}
                  </h1>
                  <div className='flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-gray-600 text-sm'>
                    <span className='flex items-center gap-2'>
                      <img src={assets.suitcase_icon} alt='' className='h-4 w-4' />
                      {jobData.companyId.name}
                    </span>
                    <span className='flex items-center gap-2'>
                      <img src={assets.location_icon} alt='' className='h-4 w-4' />
                      {jobData.location}
                    </span>
                    <span className='flex items-center gap-2'>
                      <img src={assets.person_icon} alt='' className='h-4 w-4' />
                      {jobData.level}
                    </span>
                    <span className='flex items-center gap-2'>
                      <img src={assets.money_icon} alt='' className='h-4 w-4' />
                      CTC: {kConvert.convertTo(jobData.salary)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className='flex flex-col items-center md:items-end'>
                <button className='bg-blue-600 hover:bg-blue-700 transition p-2.5 px-10 text-white rounded-lg shadow'>
                  Apply Now
                </button>
                <p className='mt-2 text-gray-500 text-sm'>
                  Posted {moment(jobData.date).fromNow()}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className='flex flex-col lg:flex-row gap-10'>
            {/* Left: Job Description */}
            <div className='w-full lg:w-2/3 bg-white rounded-2xl shadow-sm p-8 border border-gray-200'>
              <h2 className='font-bold text-2xl mb-4 text-gray-800'>
                Job Description
              </h2>
              <div
                className='prose prose-slate max-w-none text-gray-700 leading-relaxed'
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              ></div>

              <button className='bg-blue-600 hover:bg-blue-700 transition p-2.5 px-10 text-white rounded-lg mt-10 shadow'>
                Apply Now
              </button>
            </div>

            {/* Right: More Jobs */}
            <div className='w-full lg:w-1/3'>
              <h2 className='font-semibold text-xl mb-4 text-gray-800'>
                More from {jobData.companyId.name}
              </h2>
              <div className='space-y-4'>
                {jobs
                  .filter(
                    job =>
                      job._id !== jobData._id &&
                      job.companyId._id === jobData.companyId._id
                  )
                  .slice(0, 4)
                  .map((job, index) => (
                    <JobCard key={index} job={job} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  )
}

export default ApplyJob
