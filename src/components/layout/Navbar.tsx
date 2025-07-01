import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5 ">
      <div className="flex items-center">
        logo <span className="font-bold ml-2">Task </span>Master
      </div>

      <Link to={"/"}>Tasks</Link>
      <Link to={"users"}>Users</Link>

      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
