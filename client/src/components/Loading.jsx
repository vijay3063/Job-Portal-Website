import React from 'react'

const Loading = () => {
  return (
    <div className="p-6 space-y-4">
    <div className="h-4 w-2/3 bg-gray-300 animate-pulse rounded"></div>
    <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded"></div>
    <div className="h-24 w-full bg-gray-200 animate-pulse rounded"></div>
    <div className="h-24 w-full bg-gray-200 animate-pulse rounded"></div>
    </div>
  )
}

export default Loading;