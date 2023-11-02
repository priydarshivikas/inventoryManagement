import { createSlice } from "@reduxjs/toolkit";
const myUserList = [
  { id: "1", fullName: "John Doe", email: "johndoe@example.com" },
  { id: "2", fullName: "Jane Smith", email: "janesmith@example.com" },
  { id: "3", fullName: "Rock Smith", email: "rocksmith@example.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState: myUserList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      // console.log(action);
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const userIndex = state.findIndex((user) => user.id === updatedUser.id);
      if (userIndex !== -1) {
        state[userIndex] = updatedUser;
      }
      // console.log(action);
    },
    deleteUser: (state, action) => {
      const userIdToDelete = action.payload;
      // console.log(action);
      return state.filter((user) => user.id !== userIdToDelete);
    },
  },
});
export const { addUser, updateUser, deleteUser } = userSlice.actions;
// console.log(userSlice.actions);
export default userSlice.reducer;
