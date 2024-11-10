import React from 'react';
import { useParams } from 'react-router-dom';  
import { useSelector } from 'react-redux'; 

function ViewPaste() {
  const { id } = useParams();  

  const pastes = useSelector((state) => state.pastes.pastes);

  const paste = pastes.find((paste) => paste._id === id);

  if (!paste) {
    return <div>Paste not found</div>;  
  }

  return (
    <div className="p-0.5 bg-gradient-to-r from-blue-600 to-black rounded-lg">
      <div className="bg-black text-white p-6 flex flex-col space-y-6 min-w-[70vw] mx-auto min-h-[50vh] rounded-lg shadow-lg">
        <div>
          <input
            type="text"
            value={paste.title}
            disabled
            className="w-full p-3 font-serif bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          value={paste.content}
          disabled
          className="w-full p-3 font-mono bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ minHeight: '50vh' }}
        />
      </div>
    </div>
  );
}

export default ViewPaste;
