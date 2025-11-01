
import React from 'react';
// import vector1 from '../assets/vector1.png'

function Banner({ inProgressCount, resolvedCount }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto gap-3 md:gap-5 mt-5 rounded-lg overflow-hidden">
      <div className="flex-1 w-full flex items-center justify-center  bg-linear-to-r from-purple-600 to-purple-800 text-white h-40 md:h-52 py-4 shadow-lg transition duration-300 transform hover:scale-[1.02]">
        <div className="text-center">
          <h3 className="text-lg md:text-xl font-medium">In-Progress</h3>
          <p className="text-3xl md:text-5xl font-bold">{inProgressCount}</p>
        </div>
      </div>
      
      <div className="flex-1 w-full flex items-center justify-center bg-linear-to-r from-green-500 to-teal-600 text-white h-40 md:h-52 py-4 shadow-lg transition duration-300 transform hover:scale-[1.02]">
        <div className="text-center">
          <h3 className="text-lg md:text-xl font-medium">Resolved</h3>
          <p className="text-3xl md:text-5xl font-bold">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;