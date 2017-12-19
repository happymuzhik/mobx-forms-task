import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Form from './Form';
import Input from './Input';

@inject('appStore')
export default class PayDataForm extends Form {
    componentWillMount() {
        this.form = this.props.appStore.payDataForm;
    }
    render() {
        const cardNumber = this.form.getField('card_number');
        return <form className="form">
            <h3>{this.form.title}</h3>
            <div className="form-row">
                <Input field={cardNumber} onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form-row">
                <button onClick={this.onSubmit.bind(this)}>Next</button>
            </div>
        </form>
    }
};