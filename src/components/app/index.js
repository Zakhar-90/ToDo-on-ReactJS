import React, { Component } from 'react';
import BottomPanel from '../BottomPanel';
import Header from '../Header';
import ToDoList from '../ToDoList';
import TopPanel from '../TopPanel';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData : [
            { label: 'Iitem 1', done: false, important: false, id: 1 },
            { label: 'Ittem 2', done: false, important: false, id: 2 },
            { label: 'Item 3', done: false, important: false, id: 3 },
            { label: 'Item 4', done: false, important: false, id: 4 },
        ],
        term: ''
    };

    onDeleted = (id) => {
        this.setState(({ todoData }) => {
            const indx = todoData.findIndex((el) => el.id === id);

            const newArr = [
                ...todoData.slice(0, indx),
                ...todoData.slice(indx + 1)
            ];

            return {
                todoData: newArr
            }
        });
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++,
        };

        this.setState(({ todoData }) => {
            const newArr = [newItem, ...todoData];

            return {
                todoData: newArr
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const indx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[indx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice(0, indx),
            newItem,
            ...arr.slice(indx + 1)
        ];
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onSearch = (term) => {
        this.setState({ term });
    };

    render () {

        const { todoData, term } = this.state;
        const visibelItems = todoData.filter((el) => el.label.toLowerCase().includes(term.toLowerCase()));
        const doneCount = todoData.filter((el) => el.done === true).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <Header 
                    toDo={todoCount}
                    done={doneCount}
                />
                <TopPanel
                    onSearch={ this.onSearch }
                />
                <ToDoList
                    todoData={visibelItems}
                    onDeleted={this.onDeleted}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <BottomPanel
                    onAddItem={this.addItem}
                />
            </div>
        );
    }
};
