import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";
import { addHabit } from "../slice/HabitSlice";
import { useDispatch } from "react-redux";


function AddHabit() {
  const [name, setName] = useState("");
  const { toast } = useToast();
  const dispatch = useDispatch();

  const handleAddHabit = () => {
    if (!name) {
      toast({
        description: "Please enter a name for your habit.",
      });
      return;
    }

    const payload = {
      id: Date.now(),
      name,
      days: {},
    };

    dispatch(addHabit(payload));
    setName("");
	toast({
	  description: "Habit added successfully.",
	});
  };

  return (
    <Card className="w-[350px] m-auto mt-20">
      <CardHeader>
        <CardTitle>Add a Habit</CardTitle>
        <CardDescription>You can add a habit to track here.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your habit"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setName("");
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleAddHabit();
          }}
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AddHabit;
