const ItemStatusFilter = ( { onFilter, filter } ) => {

    const buttons = [
        { name: "all", label: "All"},
        { name: "active", label: "Active"},
        { name: "done", label: "Done"},
    ];

    return (
        <div className="btn-group">
            {
                buttons.map(( { name, label} ) => {
                    const isActive = filter === name;
                    const className = isActive ? 'btn-info' : 'btn-outline -second'; 
                    return (
                        <button
                            key={name}
                            type="button"
                            className={`btn ${className}`}
                            onClick={ () => onFilter(name) }
                        >
                            { label }
                        </button>
                    )
                })
            }
        </div>
    );
};

export default ItemStatusFilter;
