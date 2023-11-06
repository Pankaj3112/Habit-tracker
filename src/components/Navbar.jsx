import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "../components/ui/menubar";

export function Navbar() {
  return (
    <Menubar className="h-14 fixed w-full">
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/"}>Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/add-habit"}>Add a Habit</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link to={"/detailed"}>Details</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}

export default Navbar;
