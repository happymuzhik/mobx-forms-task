import React, { Component } from 'react';
import Form from './Form';

export default class FinishForm extends Form {
    render() {
        return <form className="form">
            <h3>{this.props.form.title}</h3>
            <div className="form-row">
                <button>Submit</button>
            </div>
        </form>
    }
};