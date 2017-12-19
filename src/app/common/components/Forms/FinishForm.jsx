import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Form from './Form';

@inject('appStore')
export default class FinishForm extends Form {
    componentWillMount() {
        this.form = this.props.appStore.finishForm;
    }
    render() {
        return <form className="form">
            <h3>{this.form.title}</h3>
            <div className="form-row">
                <button>Submit</button>
            </div>
        </form>
    }
};