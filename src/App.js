import React, { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import FilteredTodo from './components/FilteredTodo';
import TodoList from './components/TodoList';

function App() {

  const [todoList, setTodoList] = useState([{ id: 1, todoText: "todo1", isChecked: true, date: '2024-01-19'}, { id: 2, todoText: "todo2", isChecked: true,date: '2024-01-19' }, { id: 3, todoText: "todo3", isChecked: false,date: '2024-01-19' }, { id: 4, todoText: "todo4", isChecked: true,date: '2024-01-19' }]);
  const [isFiltered, setIsFiltered] = useState(true);
  const [filteredList, setFilteredList] = useState([]);

  const addTodo = (newTodo) => {
    const updatedTodoList = [...todoList];
    setTodoList([...updatedTodoList, newTodo]);
  };

  useEffect(() => {
    if (isFiltered) {
      setFilteredList(todoList)

    } else {
      const filteredTodoList = todoList.filter((todo) => {
        return todo.isChecked === false;
      });
      setFilteredList(filteredTodoList);
    }
  }, [todoList, isFiltered]);

  // const deleteTodo = (id) => {
  //   const updatedTodoList = [...todoList];
  //   const index = updatedTodoList.findIndex((todo) => {
  //     return todo.id === id;
  //   });
  //   updatedTodoList.splice(index, 1);
  //   setTodoList(updatedTodoList);
  // }

  // const updateTodo = (id, updatedText, updatedCheckboxValue) => {
  //   const updatedTodoList = [...todoList];
  //   const index = updatedTodoList.findIndex((todo) => {
  //     return todo.id === id;
  //   });

  //   const updatedTodo = { ...updatedTodoList[index], todoText: updatedText };
  //   setTodoList([...todoList.slice(0, index), updatedTodo, ...todoList.slice(index + 1, todoList.length)]);
  //}

  const handleUpdates = (id, operation, data) => {
    const updatedTodoList = [...todoList];
    const index = updatedTodoList.findIndex((todo) => {
      return todo.id === id;
    });

    if (operation === "delete") {
      updatedTodoList.splice(index, 1);
      setTodoList(updatedTodoList);

    } else if (operation === "update text") {
      const updatedTodo = { ...updatedTodoList[index], todoText: data.updatedText, date: data.updatedDate };
      setTodoList([...todoList.slice(0, index), updatedTodo, ...todoList.slice(index + 1, todoList.length)]);

    } else if (operation === "checkbox value") {
      const updatedTodo = { ...updatedTodoList[index], isChecked: data.checked };
      setTodoList([...todoList.slice(0, index), updatedTodo, ...todoList.slice(index + 1, todoList.length)]);

    }
  };


  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <FilteredTodo isFiltered={isFiltered} setIsFiltered={setIsFiltered} />
      <TodoList todoList={filteredList} handleUpdates={handleUpdates} />
    </div>
  );
};

export default App;
