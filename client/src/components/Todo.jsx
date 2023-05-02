/* eslint-disable react/prop-types */
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ title, description, updateMode, deleteToDo }) => {
  return (
    <div className="flex flex-col justify-center items-center border-2 p-2 border-black/20 rounded-lg">
      <div className="flex items-center justify-between space-x-8">
        <div className="font-bold uppercase">{title}</div>
        <div className="flex space-x-4 text-lg">
          <BiEdit
            className="text-green-600 h-8 w-8 bg-white p-1 shadow-lg rounded-full cursor-pointer"
            onClick={updateMode}
          />
          <AiFillDelete
            className="text-red-600 h-8 w-8 bg-white p-1 shadow-lg rounded-full cursor-pointer"
            onClick={deleteToDo}
          />
        </div>
      </div>
      <div className="text-base">{description}</div>
    </div>
  );
};

export default ToDo;
