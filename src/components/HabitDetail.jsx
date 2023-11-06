import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

import { addDay } from "../slice/HabitSlice";
import { useDispatch } from "react-redux";

function HabitDetail({ habit }) {
  const dispatch = useDispatch();

  //get past 6 days with day and date
  const getPastSixDays = () => {
    const days = [];
    for (let i = 0; i < 6; i++) {
      const day = new Date();
      day.setDate(day.getDate() - i);
      days.push(day.toDateString());
    }

    days.reverse();
    return days;
  };

  const getDayState = (day) => {
    if (habit.days[day] === "Done") return <Done />;
    if (habit.days[day] === "Not Done") return <NotDone />;
    return <None />;
  };

  const getStreak = () => {
	let today = new Date();
	let streak = 0;

	while (habit.days[today.toDateString()] === "Done") {
		streak++;
		today.setDate(today.getDate() - 1);
	}

	return streak;
  };

  return (
    <div className="w-[70%] m-auto border-2 rounded-md p-4">
      <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {habit.name}
      </h1>
      <div className="flex justify-between">
        {getPastSixDays().map((day) => (
          <div
            className="flex flex-col items-center border-r border-l p-4"
            key={day}
          >
            <p className="text-sm font-light py-2">{day}</p>

            <Popover>
              <PopoverTrigger>{getDayState(day)}</PopoverTrigger>

              <PopoverContent className="w-48">
                <RadioGroup defaultValue={habit.days[day] || "None"}>
                  <div
                    className="flex items-center space-x-2"
                    onClick={() => {
                      dispatch(
                        addDay({
                          habitId: habit.id,
                          date: day,
                          state: "Done",
                        })
                      );
                    }}
                  >
                    <RadioGroupItem value="Done" id="r1" />
                    <Label htmlFor="r1">Done</Label>
                  </div>

                  <div
                    className="flex items-center space-x-2"
                    onClick={() => {
                      dispatch(
                        addDay({
                          habitId: habit.id,
                          date: day,
                          state: "Not Done",
                        })
                      );
                    }}
                  >
                    <RadioGroupItem value="Not Done" id="r3" />
                    <Label htmlFor="r3">Not Done</Label>
                  </div>

                  <div
                    className="flex items-center space-x-2"
                    onClick={() => {
                      dispatch(
                        addDay({
                          habitId: habit.id,
                          date: day,
                          state: "None",
                        })
                      );
                    }}
                  >
                    <RadioGroupItem value="None" id="r2" />
                    <Label htmlFor="r2">None</Label>
                  </div>
                </RadioGroup>
              </PopoverContent>
            </Popover>
          </div>
        ))}
      </div>

	  <p className="leading-7 [&:not(:first-child)]:mt-6">
		You have a streak of {getStreak()} days!
	  </p>
    </div>
  );
}

function Done() {
  return (
    <div className="w-8 h-8 bg-green-500 rounded-full flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-check text-white"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
  );
}

function NotDone() {
  return (
    <div className="w-8 h-8 bg-red-500 rounded-full flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-x text-white"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </div>
  );
}

function None() {
  return (
    <div className="w-8 h-8 bg-zinc-400 rounded-full flex justify-center items-center"></div>
  );
}

export default HabitDetail;
