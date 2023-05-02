import { useState, useEffect } from "react";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";
import Todo from "./components/Todo";
const App = () => {
  const [toDo, setToDo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, title) => {
    setIsUpdating(true);
    setTitle(title);
    setToDoId(_id);
  };

  return (
    <div className="bg-gray-100 h-full">
      <h1 className=" bg-white shadow-lg mb-4 mt-4 flex justify-center items-center font-bold title-lg">
        GET THINGS DONE
      </h1>
      <div className="flex flex-col justify-center items-center mb-4">
        {" "}
        <div className="mt-8 flex flex-col space-y-4 justify-center items-center">
          <input
            className=" outline-none rounded-md p-2 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
            type="title"
            placeholder="Add ToDo Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="  outline-none rounded-md p-2 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
            type="title"
            placeholder="Add ToDo description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div
            className="border cursor-pointer border-green-500 bg-green-500 title-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, title, setToDo, setTitle, setIsUpdating)
                : () =>
                    addToDo(
                      title,
                      setTitle,
                      description,
                      setDescription,
                      setToDo
                    )
            }>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="mt-8 space-y-4 bg-indigo-200 mx-6 md:mx-[450px] rounded-md shadow-lg p-8">
          <h1 className="flex justify-center items-center font-bold text-xl uppercase">
            My Todos :
          </h1>
          {toDo.map((item) => (
            <Todo
              key={item._id}
              title={item.title}
              description={item.description}
              updateMode={() => updateMode(item._id, item.title)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
