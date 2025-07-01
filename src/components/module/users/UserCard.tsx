import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";
interface IProps {
  user: IUser;
}
const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {/* <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div> */}
          <h1>{user?.name}</h1>
        </div>
        <div className=" flex gap-3 items-center">
          <Button
            onClick={() => {
              dispatch(removeUser(user.id));
            }}
            variant="link"
            className="p-0 text-red-500 cursor-pointer"
          >
            <Trash2 />
          </Button>
          {/* <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          /> */}
        </div>
      </div>
      {/* <p className="mt-5 "> {task?.description}</p> */}
    </div>
  );
};

export default UserCard;
