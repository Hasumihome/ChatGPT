import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    settionEstablished: false,
    conversations: [],
    selectedConversationId: null,
};

const dashbordSlice = createSlice({
    name: 'dashborad',
    initialState,
    reducers: {
        setSelectedConversationId: (state, action) => {
            state.selectedConversationId = action.payload;
        }
    }
});

export const { setSelectedConversationId } = dashbordSlice.actions;

export default dashbordSlice.reducer;