import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { JobCategories, JobLocations } from '../assets/assets'

const AddJob = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('Bangalore')
  const [category, setCategory] = useState('Programming')
  const [level, setLevel] = useState('Beginner level')
  const [salary, setSalary] = useState(0)
  const editorref = useRef(null)
  const quilref = useRef(null)

  useEffect(() => {
    // Initiate quill only once
    if (!quilref.current && editorref.current) {
      quilref.current = new Quill(editorref.current, { theme: 'snow' })
    }
  }, [])

  return (
    <form
      action=""
      className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 space-y-6 mt-8"
    >
      <div>
        <p className="font-semibold mb-1 text-gray-700">Job Title</p>
        <input
          type="text"
          placeholder="Type Here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <p className="font-semibold mb-1 text-gray-700">Job Description</p>
        <div
          ref={editorref}
          className="border border-gray-300 rounded-md min-h-[200px]"
        ></div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <p className="font-semibold mb-1 text-gray-700">Job Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {JobCategories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="font-semibold mb-1 text-gray-700">Job Location</p>
          <select
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {JobLocations.map((location, index) => (
              <option value={location} key={index}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="font-semibold mb-1 text-gray-700">Job Level</p>
          <select
            onChange={(e) => setLevel(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Beginner Level">Beginner Level</option>
            <option value="Intermediate Level">Intermediate Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>
      </div>

      <div>
        <p className="font-semibold mb-1 text-gray-700">Job Salary</p>
        <input
          type="Number"
          placeholder="25000"
          onChange={(e) => setSalary(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all hover:cursor-pointer"
      >
        Add
      </button>
    </form>
  )
}

export default AddJob
