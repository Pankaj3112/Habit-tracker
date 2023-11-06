import React from "react";
import HabitDetail from "./HabitDetail";
import { useSelector } from "react-redux";

function HabitDetailList() {
  const habits = useSelector((state) => state.habits.habits);

  return (
    <div className="flex flex-col items-center gap-2 p-4">
      {habits.map((habit) => (
        <HabitDetail habit={habit} key={habit.id} />
      ))}

      {habits.length === 0 && (
        <p className="w-full h-[60vh] flex justify-center items-center text-xl">
          No habits yet. Add one to get started!
        </p>
      )}
    </div>
  );
}

export default HabitDetailList;
