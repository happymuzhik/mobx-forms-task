import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('appStore')
export default class FinishForm extends Component {
    render() {
        const form = this.props.appStore.finishForm;
        return <form className="form">
            <h3>{form.title}</h3>
            <div className="form-row">
                <button>Submit</button>
            </div>
        </form>
    }
};