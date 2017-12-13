import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('appStore')
export default class PersonalDataForm extends Component {
    render() {
        const form = this.props.appStore.personalDataForm;
        return  <form className="form">
            <h3>{form.title}</h3>
            <div className="form-row">
                <input
                    name={form.getField('name').name}
                    placeholder={form.getField('name').placeholder}
                    value={form.getField('name').value}
                    type={form.getField('name').type}/>
            </div>
            <div className="form-row">
                <input
                    name={form.getField('second_name').name}
                    placeholder={form.getField('second_name').placeholder}
                    value={form.getField('second_name').value}
                    type={form.getField('second_name').type}/>
            </div>
            <div className="form-row">
                <button>Next</button>
            </div>
        </form>
    }
};