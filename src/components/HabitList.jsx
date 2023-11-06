import React, { useEffect } from "react";
import Habit from "./Habit";
import { useSelector } from "react-redux";

function HabitList() {
  const habits = useSelector((state) => state.habits.habits);

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      {habits.map((habit) => (
        <div className="w-1/2" key={habit.id}>
          <Habit habit={habit} />
        </div>
      ))}

      {habits.length === 0 && (
        <p className="w-full h-[60vh] flex justify-center items-center text-xl">
          No habits yet. Add one to get started!
        </p>
      )}
    </div>
  );
}

export default HabitList;
