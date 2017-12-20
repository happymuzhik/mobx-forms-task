import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Form from './Form';
import Input from './Input';

@observer
export default class PersonalDataForm extends Form {
    render() {
        const { form } = this.props;
        const firstName = form.getField('first_name');
        const secondName = form.getField('second_name');
        return  <form className="form">
            <h3>{form.title}</h3>
            <div className="form-row">
                <Input field={firstName} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form-row">
                <Input field={secondName} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form-row">
                <button onClick={this.onSubmit.bind(this)}>Next</button>
            </div>
        </form>
    }
};