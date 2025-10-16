import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const ManageJobs = () => {
  const navigate=useNavigate()
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Table container */}
      <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
        <table className="w-full min-w-[650px] border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-3 py-3 text-left">#</th>
              <th className="px-3 py-3 text-left">Job Title</th>
              <th className="px-3 py-3 text-left">Date</th>
              <th className="px-3 py-3 text-left">Location</th>
              <th className="px-3 py-3 text-left">Applicants</th>
              <th className="px-3 py-3 text-left">Visible</th>
            </tr>
          </thead>

          <tbody>
            {manageJobsData.map((job, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-all text-sm text-gray-700"
              >
                <td className="px-3 py-3">{index + 1}</td>
                <td className="px-3 py-3 font-medium">{job.title}</td>
                <td className="px-3 py-3">{moment(job.date).format('ll')}</td>
                <td className="px-3 py-3">{job.location}</td>
                <td className="px-3 py-3">{job.applicants}</td>
                <td className="px-3 py-3">
                  <input
                    type="checkbox"
                    defaultChecked={job.visible}
                    className="w-5 h-5 accent-blue-600 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add new job button */}
      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition-all"
          onClick={()=>navigate('/dashboard/add-job')}
        >
          Add New Job
        </button>
      </div>

      {/* Mobile scroll hint */}
      <p className="text-xs text-gray-500 mt-3 md:hidden text-center">
        Tip: Scroll horizontally to view all columns →
      </p>
    </div>
  )
}

export default ManageJobs
