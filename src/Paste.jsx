import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PasteCard from './PasteCard';
import {setPop} from './redux/popslice';
import Popup from './Popup';

function Paste() {
  const dispatch=useDispatch()
  const allPastes = useSelector((state) => state.pastes.pastes);
  const [searchItem, setSearchItem] = useState('');
  const [filteredPastes, setFilteredPastes] = useState(allPastes);
  const popvalue=useSelector((state)=>state.popslice.value)

  useEffect(() => {
    const result = (searchItem==='')?allPastes:allPastes.filter(paste =>
      paste.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      paste.content.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredPastes(result);
  }, [searchItem, allPastes]);

  return (
    <div>
      <div className='flex-row'>
        <input 
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search Paste" 
          type="text" 
          className="p-2 mr-2 border rounded-md mb-4 mx-auto min-w-[60vw] overflow-hidden" 
        />
        <button
        onClick={()=>dispatch(setPop(true))}
        className="p-2 bg-red-600 border hover:bg-red-700 text-white font-semibold rounded-md mb-4 mx-auto min-w-[10vw] overflow-hidden">
          Delete All
        </button>
      </div>
      <div>
        {filteredPastes.map((paste) => (
          <PasteCard key={paste._id} paste={paste} />
        ))}
      </div>
      {popvalue && <Popup />}
    </div>
  );
}

export default Paste;
