import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('appStore')
export default class PayDataForm extends Component {
    render() {
        const form = this.props.appStore.payDataForm;
        return <form className="form">
            <h3>{form.title}</h3>
            <div className="form-row">
                <input
                    name={form.getField('card_number').name}
                    placeholder={form.getField('card_number').placeholder}
                    value={form.getField('card_number').value}
                    type={form.getField('card_number').type} />
            </div>
            <div className="form-row">
                <button>Next</button>
            </div>
        </form>
    }
};