import './bottomPanel.css';

const BottomPanel = () => {

    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                className="form-control new-todo-label"
                placeholder="What needs to be done?"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
            >
                Add
            </button>
        </form>
    )
};

export default BottomPanel;
