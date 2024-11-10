import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
    pastes:localStorage.getItem("pastes")
    ?JSON.parse(localStorage.getItem("pastes"))
    :[]
}

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes:(state,action)=>{
        state.pastes.push(action.payload)
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
        toast.success("Paste Created Successfully")
    },
    updatePastes:(state,action)=>{
      const p= action.payload
      console.log(p)
      const idx = state.pastes.findIndex((item) => item._id === p._id);

      if(idx>=0){
        state.pastes[idx]=p;
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
        toast.success("Paste Updated Successfully")
      }
      else toast.error("Got Error")

    },
    resetAllPastes:(state)=>{
        state.pastes=[];
        localStorage.removeItem("pastes")
        toast.success("All Pastes are Cleared")
    },
    removeFromPastes: (state, action) => {
      const p = action.payload;
      const idx = state.pastes.findIndex((item) => item._id === p._id); 
    
      if (idx >= 0) {
        state.pastes.splice(idx, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Deleted Successfully");
      }
    },
  },
})

export const { addToPastes, updatePastes, resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer