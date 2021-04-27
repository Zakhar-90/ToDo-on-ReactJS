import './toDoListItem.css';

const ToDoListItem = ( {label, important = false} ) => {

    const style = {
        color: important ? '#4682b4' : '#000000',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={style}
            >
                {label}
            </span>

            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
            >
                <i className="fa fa-exclamation" />
            </button>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
            >
                <i className="fa fa-trash-o"></i>
            </button>
        </span>
    );
};

export default ToDoListItem;
