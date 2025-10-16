import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-3 py-3 text-left">#</th>
              <th className="px-3 py-3 text-left">User Name</th>
              <th className="px-3 py-3 text-left">Job Title</th>
              <th className="px-3 py-3 text-left">Location</th>
              <th className="px-3 py-3 text-left">Resume</th>
              <th className="px-3 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-all text-sm text-gray-700"
              >
                <td className="px-3 py-3">{index + 1}</td>

                <td className="px-3 py-3 flex items-center gap-3">
                  <img
                    src={applicant.imgSrc}
                    alt=""
                    className="w-9 h-9 rounded-full object-cover border"
                  />
                  <span className="font-medium">{applicant.name}</span>
                </td>

                <td className="px-3 py-3">{applicant.jobTitle}</td>
                <td className="px-3 py-3">{applicant.location}</td>

                <td className="px-3 py-3">
                  <a
                    href={applicant.resumeLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700"
                  >
                    Resume
                    <img
                      src={assets.resume_download_icon}
                      alt=""
                      className="w-4 h-4"
                    />
                  </a>
                </td>

                <td className="px-3 py-3 relative">
                  <div className="inline-block group">
                    <button className="px-2 py-1 rounded hover:bg-gray-200">
                      ...
                    </button>

                    {/* Dropdown (hover) */}
                    <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-md mt-1 right-0 z-10">
                      <button className="block w-full text-left px-4 py-2 hover:bg-green-50 text-blue-600">
                        Accept
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-red-50 text-red-600">
                        Reject
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile message */}
      <p className="text-xs text-gray-500 mt-3 md:hidden text-center">
        Tip: Scroll horizontally to view all columns →
      </p>
    </div>
  )
}

export default ViewApplications
