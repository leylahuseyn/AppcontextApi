import React, { useReducer, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';

const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
  EDIT_TODO: 'edit-todo',
  UPDATE_TODO: 'update-todo'
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    case ACTIONS.EDIT_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, isEditing: true };
        }
        return todo;
      });
    case ACTIONS.UPDATE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name, isEditing: false };
        }
        return todo;
      });
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false, isEditing: false };
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please, add new todo!');
      return;
    }
    setError('');
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName('');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedName = e.target.elements.updatedName.value.trim();
    if (!updatedName) {
      alert('Please, enter a valid name!');
      return;
    }
    dispatch({ type: ACTIONS.UPDATE_TODO, payload: { id: editingTodo.id, name: updatedName } });
    setEditingTodo(null);
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  const handleClose = () => {
    setEditingTodo(null);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add new todo ..."
            className="form-control"
          />
          <button type="submit" className="btn btn-outline-success">Add</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ textDecoration: todo.complete ? 'line-through' : '' }} onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
              {todo.name}
            </span>
            <div>
              <button onClick={() => handleEdit(todo)} className="btn btn-outline-warning btn-sm me-2">Edit</button>
              <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })} className="btn btn-outline-danger btn-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <Modal show={editingTodo !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingTodo && (
            <Form onSubmit={handleUpdate}>
              <Form.Group>
                <Form.Label>Todo Name</Form.Label>
                <Form.Control type="text" name="updatedName" defaultValue={editingTodo.name} />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">Update</Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default App;
