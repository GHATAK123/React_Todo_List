import {
    CREATE_TODO,
    REMOVE_TODO,
    MARK_TODO_AS_COMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from './actions';

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
        return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
        return false;
    default:
        return state;
    }
}

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { todo } = payload;
        return state.concat(todo);
    }
    case REMOVE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    case MARK_TODO_AS_COMPLETED: {
        const { text } = payload;
        return state.map(todo => {
            if (todo.text === text) {
                return { ...todo, isCompleted: true };
            }
            return todo;
        });
    }
    case LOAD_TODOS_SUCCESS: {
        const { todos } = payload;
        return todos;
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
        return state;
    }
}