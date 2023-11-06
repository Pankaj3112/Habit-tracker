import { createSlice } from "@reduxjs/toolkit";
import { getHabits, setHabits } from "../localStorage";

const initialState = {
  habits: [...getHabits()],
};

export const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addDay: (state, action) => {
	  const { habitId, date, state: dayState } = action.payload;
	  const habit = state.habits.find((habit) => habit.id === habitId);
	  habit.days[date] = dayState;
	//   setHabits(state.habits);
	},
	addHabit: (state, action) => {
	  state.habits.push(action.payload);
	//   setHabits(state.habits);
	}
  },
});

export const { addDay, addHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
