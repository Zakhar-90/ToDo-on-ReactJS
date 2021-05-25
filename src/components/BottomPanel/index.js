import { Component } from 'react';
import './bottomPanel.css';

export default class BottomPanel extends Component {

    state = {
        label: '',
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onAddItem(this.state.label);

        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit={ this.onSubmit }
            >
                <input
                    type="text"
                    className="form-control new-todo-label"
                    placeholder="What needs to be done?"
                    onChange={ this.onLabelChange }
                    value={this.state.label}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Add
                </button>
            </form>
        )
    }
};
