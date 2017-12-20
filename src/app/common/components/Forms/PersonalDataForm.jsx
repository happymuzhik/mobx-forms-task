import React, { Component } from 'react';
import Form from './Form';
import Input from './Input';

export default class PersonalDataForm extends Form {
    render() {
        return <form className="form">
            <h3>{this.props.form.title}</h3>
            <div className="form-row">
                <Input field={this.fields.first_name} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form-row">
                <Input field={this.fields.second_name} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form-row">
                <button onClick={this.onSubmit.bind(this)}>Next</button>
            </div>
        </form>
    }
};