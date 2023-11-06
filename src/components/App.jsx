import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "../components/ui/toaster";
import { useSelector } from "react-redux";

import AddHabit from "./AddHabit";
import HabitDetailList from "./HabitDetailList";
import HabitList from "./HabitList";
import Navbar from "./Navbar";
import { setHabits } from "../localStorage";
import { useEffect } from "react";

function App() {
  const habits = useSelector((state) => state.habits.habits);

  useEffect(() => {
    setHabits(habits);
  }, [habits]);

  return (
    <BrowserRouter>
      <Navbar />
      <Toaster />
	  <div className="h-14" />
	  
      <Routes>
        <Route exact path="/" element={<HabitList />} />
        <Route exact path="/add-habit" element={<AddHabit />} />
        <Route exact path="/detailed" element={<HabitDetailList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
