import React from 'react';
import { unsetPop } from './redux/popslice';
import { useSelector, useDispatch } from 'react-redux';
import { resetAllPastes } from './redux/pasteSlice';

function Popup() {
    const dispatch = useDispatch();
    const popvalue = useSelector((state) => state.popslice.value);

    return (
        <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center'>
            <div className='bg-gradient-to-l to-black from-blue-900 text-white font-serif p-8 rounded-md text-center'>
                <div className='mb-4 text-lg font-semibold'>Delete All Notes?</div>
                <div className='space-x-4'>
                    <button 
                        onClick={() => {
                            dispatch(unsetPop());
                            dispatch(resetAllPastes());
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                        Yes
                    </button>
                    <button 
                        onClick={() => dispatch(unsetPop())}
                        className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
