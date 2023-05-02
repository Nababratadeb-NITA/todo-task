/* eslint-disable no-unused-vars */
import axios from "axios";

const baseUrl = "http://localhost:5000/api/v1/todos";

const getAllToDo = async (setToDo) => {
  const response = await axios.get(baseUrl);
  setToDo(response.data);
};

const addToDo = (title, setTitle, description, setDescription, setToDo) => {
  axios
    .post(`${baseUrl}/`, { title, description })
    .then((data) => {
      setTitle("");
      setDescription("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (
  toDoId,
  title,
  description,
  setDescription,
  setToDo,
  setTitle,
  setIsUpdating
) => {
  axios
    .put(`${baseUrl}/${toDoId}`, { _id: toDoId, title, description })
    .then((data) => {
      setTitle("");
      setDescription("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .delete(`${baseUrl}/${_id}`, { _id })
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
