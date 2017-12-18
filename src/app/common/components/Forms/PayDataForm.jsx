import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('appStore')
export default class PayDataForm extends Component {
    handleChange(e) {
        const form = this.props.appStore.payDataForm;
        form.getField(e.target.name).onChange(e.target.value)
    }
    render() {
        const form = this.props.appStore.payDataForm;
        const cardNumber = form.getField('card_number');
        return <form className="form">
            <h3>{form.title}</h3>
            <div className="form-row">
                <input
                    onChange={::this.handleChange}
                    name={cardNumber.name}
                    placeholder={cardNumber.placeholder}
                    defaultValue={cardNumber.defaultValue}
                    type={cardNumber.type} />
            </div>
            <div className="form-row">
                <button>Next</button>
            </div>
        </form>
    }
};