import ToDoListItem from '../ToDoListItem';
import './toDoList.css';

const ToDoList = ( { todoData } ) => {

    return (
        <ul className="list-group todo-list">
            {
                todoData.map(( {id, label, important} ) => {
                    return (
                        <li
                            key={ id }
                            className="list-group-item"
                        >
                            <ToDoListItem
                                label={label}
                                important={important}
                            />
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default ToDoList;
