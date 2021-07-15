import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex justify-between pt-8 pb-6">
        <div className="text-4xl w-2/3 h-8 mr-4 bg-gray-300 shadow-sm rounded"></div>
        <div className="text-2xl w-1/3 h-8 ml-3 bg-gray-200 shadow-sm rounded"></div>
      </div>
      <div>
        <div className="bg-gray-300 h-8 mb-6 text-lg shadow-sm rounded"></div>
        <div className="bg-gray-200 h-8 mb-6 text-lg shadow-sm rounded"></div>
        <div className="bg-gray-200 h-8 text-lg shadow-sm rounded"></div>
      </div>
    </div>
  )
}

export default LoadingSkeleton
