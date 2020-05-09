import React, {Component} from "react";

import './item-add-form.css'

export default class ItemAddForm extends Component {

    constructor() {
        super();

        this.state = {
            label: ''
        };

        this.onLabelChange = (event) => {
            this.setState({
                label: event.target.value
            });
        };

        this.onSubmit = (event) => {
            event.preventDefault();
            this.props.addItem(this.state.label)
            this.setState({
                label: ''
            })
        };
    };

    render() {

        return (
            <form className="item-add-form d-flex"
                  onSubmit={ this.onSubmit }>
                <input
                    type="text"
                    className="form-control"
                    onChange={ this.onLabelChange }
                    placeholder="New task"
                    value={ this.state.label }/>
                <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={ this.onSubmit }>
                    Add Item
                </button>
            </form>
        );
    };
}