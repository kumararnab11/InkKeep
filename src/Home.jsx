import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updatePastes } from './redux/pasteSlice';
import toast from 'react-hot-toast';

function Home() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  const pasteId = searchParam.get("pasteId");
  const allPastes= useSelector((state) => state.pastes.pastes)

  useEffect(()=>{
    if(pasteId)console.log({pasteId})   
    const p=allPastes.find((paste) => paste._id === pasteId)
    setTitle(p?.title);
    setValue(p?.content)
  },[pasteId])

  const createPaste = () => {
    if(!title||!value){
      toast.error("Write your Content first");
    }
    else{
      const paste = {
        title:title,
        content: value,
        _id: pasteId || Date.now().toString(20),
        createdAt: new Date().toISOString(),
      };
  
      if (pasteId) {
        dispatch(updatePastes(paste));
      } else {
        dispatch(addToPastes(paste));
      }
  
      setTitle('');
      setSearchParam({});
      setValue('');
    }
  };

  return (
    <div className="p-0.5 bg-gradient-to-r from-blue-600 to-black rounded-lg">
      <div className="bg-black text-white p-6 flex flex-col space-y-6 min-w-[70vw] mx-auto min-h-[50vh] rounded-lg shadow-lg">
        <div>
          <input
            type="text"
            placeholder="Enter your Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 font-serif bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          placeholder="Enter your content here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-3 font-mono bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ minHeight: '50vh' }}
        />
        <button
          onClick={createPaste}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
    </div>
  );
}

export default Home;
