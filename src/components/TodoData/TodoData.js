import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import * as Styled from "./style";
import Timer from '../Timer';

const TodoList = ({ userId }) => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [filter, setFilter] = useState('all'); 
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.log(error));
  }, [userId]);


  useEffect(() => {
    applyFilter();
  }, [filter, todos]);

  const applyFilter = () => {
    if (filter === 'all') {
      setFilteredTodos(todos);
    } else if (filter === 'completed') {
      setFilteredTodos(todos.filter(todo => todo.completed));
    } else if (filter === 'incomplete') {
      setFilteredTodos(todos.filter(todo => !todo.completed));
    }
  };
  const addTodo = () => {
    if (newTodoTitle.trim() !== '') {
      const newTodo = {
        userId: userId,
        id: todos.length + 1,
        title: newTodoTitle,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle('');
    }
  };

  const updateTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, title: editTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditingTodoId(null); 
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Styled.TableData>
    <div className='container' >
      <Styled.TodoDataDetails>
      <div className='break'>
          <span className='hey'>Hey there! it's time for a quick 5-second break</span >
        </div>
        <div className='heading'>
          <h1><b>Todo</b></h1>
          <div className='dropBtn'>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
              </select>
              <div>
              <button className='timer'><Timer/></button>
            </div>
              </div>
        </div>
        <Styled.Details>
          <div><h5>Today</h5></div>
          <div className='task'>
            <input
              type="text"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              placeholder="Enter todo title"
            />
            <button onClick={addTodo} style={{backgroundColor:"white"}}>Add</button>
          </div>
          {filteredTodos.map(todo => (
              <div key={todo.id} className='task'>
                {editingTodoId === todo.id ? (
                  <div className='Abask'>
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <button onClick={() => updateTodo(todo.id)} style={{backgroundColor:"white"}}>Save</button>
                  </div>
                ) : (
                  <div className='btnTitle'>
                    <div className='title'><IoIosArrowForward/>&nbsp; {todo.title}</div>
                    <div  className='updateBtn'>
                      <button onClick={() => { setEditingTodoId(todo.id); setEditTitle(todo.title); }} style={{backgroundColor:"white"}}>Update</button>
                      <button onClick={() => deleteTodo(todo.id)} style={{backgroundColor:"white"}}>Delete</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </Styled.Details>
      </Styled.TodoDataDetails>
    </div>
    </Styled.TableData>
  );
};

export default TodoList;
