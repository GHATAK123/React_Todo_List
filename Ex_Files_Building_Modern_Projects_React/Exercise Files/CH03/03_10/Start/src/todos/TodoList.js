import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);