/* eslint-disable react/prop-types */
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ title, description, updateMode, deleteToDo }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-between space-x-8">
        <div className="font-bold uppercase">{title}</div>
        <div className="flex space-x-4 text-lg">
          <BiEdit className="text-green-600" onClick={updateMode} />
          <AiFillDelete className="text-red-600" onClick={deleteToDo} />
        </div>
      </div>
      <div className="text">{description}</div>
    </div>
  );
};

export default ToDo;
