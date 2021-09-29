import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodoAction } from '../../actions/todos'

const TodoList: React.FC = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos);
  const handleAddTodo = () => {
    dispatch(createTodoAction(content));
  }

  return (
    <>
      <h1>TODO: </h1> 
      <ul>
        {
          todos.map((t: any) => (
            <li>{t.item}</li>
          ))
        }
      </ul>
      <input type="text" placeholder="Ex: fazer café" onChange={e => setContent(e.target.value)} />
      <button onClick={handleAddTodo} type="button">Enviar</button>
    </>
  );
} 

export default TodoList;