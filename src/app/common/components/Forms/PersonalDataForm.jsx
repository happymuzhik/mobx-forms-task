import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Form from './Form';
import Input from './Input';

@inject('appStore')
export default class PersonalDataForm extends Form {
    componentWillMount() {
        this.form = this.props.appStore.personalDataForm;
    }
    render() {
        const firstName = this.form.getField('first_name');
        const secondName = this.form.getField('second_name');
        return  <form className="form">
            <h3>{this.form.title}</h3>
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