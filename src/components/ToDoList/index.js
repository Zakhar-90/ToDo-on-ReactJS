import ToDoListItem from '../ToDoListItem';
import './toDoList.css';

const ToDoList = ( { todoData, onDeleted, onToggleImportant, onToggleDone } ) => {

    return (
        <ul className="list-group todo-list">
            {
                todoData.map(( {id, label, important, done} ) => {
                    return (
                        <li
                            key={ id }
                            className="list-group-item"
                        >
                            <ToDoListItem
                                label={label}
                                important={important}
                                done={done}
                                onDeleted={ () => onDeleted(id) }
                                onToggleImportant={ () => onToggleImportant(id) }
                                onToggleDone={ () => onToggleDone(id) }
                            />
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default ToDoList;
