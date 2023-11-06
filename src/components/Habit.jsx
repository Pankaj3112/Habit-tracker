import { useDispatch } from "react-redux";
import { addDay } from "../slice/HabitSlice";

import { Card, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

function Habit({ habit }) {
  const date = new Date();
  const today = date.toDateString();
  const defaultState = habit.days[today] || "None";

  const dispatch = useDispatch();

  return (
    <Card>
      <div className="flex justify-between items-center p-5">
        <CardHeader>
          <CardTitle>{habit.name}</CardTitle>
        </CardHeader>

        <RadioGroup defaultValue={defaultState}>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Have you done this today?
          </p>

          <div
            className="flex items-center space-x-2"
            onClick={() => {
              dispatch(
                addDay({
                  habitId: habit.id,
                  date: today,
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
                  date: today,
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
                  date: today,
                  state: "None",
                })
              );
            }}
          >
            <RadioGroupItem value="None" id="r2" />
            <Label htmlFor="r2">None</Label>
          </div>
        </RadioGroup>
      </div>
    </Card>
  );
}

export default Habit;
