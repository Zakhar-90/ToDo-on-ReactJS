import React from 'react';
import BottomPanel from '../BottomPanel';
import Header from '../Header';
import ToDoList from '../ToDoList';
import TopPanel from '../TopPanel';

import './app.css';

const App = () => {

    const todoData = [
        { label: 'Item 1', important: false, id: 1 },
        { label: 'Item 2', important: true, id: 2 },
        { label: 'Item 3', important: false, id: 3 }
    ];

    return (
        <div className="todo-app">
            <Header 
                toDo={1}
                done={3}
            />
            <TopPanel />
            <ToDoList
                todoData={todoData}
            />
            <BottomPanel />
        </div>
    );
};

export default App;
