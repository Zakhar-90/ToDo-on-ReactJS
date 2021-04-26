import React from 'react';

import './app.css';

const App = () => {

    const todoData = [
        { label: 'Item 1', important: false, id: 1 },
        { label: 'Item 2', important: true, id: 2 },
        { label: 'Item 3', important: false, id: 3 }
    ];

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <h1>ToDoList</h1>
                <h2>1 more to do, 3 done</h2>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
                <input type="text" placeholder='Search' style={{marginRight: '10px'}}></input>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Done</button>
                </div>
            </div>
            <ul style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '25px'}}>
                {
                    todoData.map(( {id, label} ) => {
                        return (
                            <li key={ id }>
                                { label }
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default App;
