import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';

const AddJob = () => {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('Bangalore');
    const [category, setCategory] = useState('Programming');
    const [level, setLevel] = useState('Fresher');
    const [salary, setSalary] = useState(0);

    const editorRef = useRef(null)
    const quillRef = useRef(null)

    useEffect(() => {
        // Initial Quill only once
        if (!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
            })
        }
    },[])

  return (

    <form className='w-full max-w-screen-sm mx-auto p-4 sm:p-6 md:p-8 flex flex-col items-start gap-5 bg-white rounded-xl'>

  <div className='w-full'>
    <p className='mb-2 font-semibold text-gray-700'>Job Title</p>
    <input
      required
      className='w-full max-w-lg px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm hover:shadow-md transition duration-200'
      type="text"
      placeholder='Type here'
      onChange={e => setTitle(e.target.value)}
      value={title}
    />
  </div>

  <div className='w-full'>
    <p className='my-2 font-semibold text-gray-700'>Job Description</p>
    <div
      ref={editorRef}
      className='border-2 border-gray-300 rounded-md min-h-[150px] p-2 bg-white focus:outline-none shadow-sm hover:shadow-md transition duration-200'
    ></div>
  </div>

  <div className='flex flex-col sm:flex-row gap-4 w-full'>
    <div className='flex-1'>
      <p className='mb-2 font-semibold text-gray-700'>Job Category</p>
      <select
        className='w-full px-4 py-2 border-2 border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm hover:shadow-md transition duration-200'
        onChange={e => setCategory(e.target.value)}
      >
        {JobCategories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>

    <div className='flex-1'>
      <p className='mb-2 font-semibold text-gray-700'>Job Location</p>
      <select
        className='w-full px-4 py-2 border-2 border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm hover:shadow-md transition duration-200'
        onChange={e => setLocation(e.target.value)}
      >
        {JobLocations.map((location, index) => (
          <option key={index} value={location}>{location}</option>
        ))}
      </select>
    </div>

    <div className='flex-1'>
      <p className='mb-2 font-semibold text-gray-700'>Job Level</p>
      <select
        className='w-full px-4 py-2 border-2 border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm hover:shadow-md transition duration-200'
        onChange={e => setLevel(e.target.value)}
      >
        <option value={"Fresher"}>Fresher</option>
        <option value={"Intermediate Level"}>Intermediate Level</option>
        <option value={"Senior Level"}>Senior Level</option>
      </select>
    </div>
  </div>

  <div className='w-full'>
    <p className='mb-2 font-semibold text-gray-700'>Job Salary</p>
    <input
      min={0}
      className='w-full sm:w-[150px] px-4 py-2 border-2 border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm hover:shadow-md transition duration-200'
      onChange={e => setSalary(e.target.value)}
      type="number"
      placeholder='2500'
    />
  </div>

  <button
    className='w-full sm:w-32 py-3 mt-6 bg-black text-white border-2 border-black rounded-lg hover:bg-white hover:text-black transition duration-300 font-medium shadow-md hover:shadow-lg'
  >
    Add
  </button>
</form>

  )
}

export default AddJob;