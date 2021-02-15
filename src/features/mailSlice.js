import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail:null,
    sendMessageIsOpen: false,
  },
  reducers: {
    selectMail : (state,action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen= true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectMail ,openSendMessage , closeSendMessage} = mailSlice.actions;

export const selectOpenMail = state => state.mail.selectedMail;
export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
