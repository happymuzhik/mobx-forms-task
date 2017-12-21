import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Form extends Component {
    componentWillMount() {
        this.fields = {}
        this.props.form.fields.map(field => {
            this.fields[field.name] = field
        })
    }
    checkForm() {
        return this.props.form.validate();
    }
    handleChange(e) {
        this.props.form.getField(e.target.name).onChange(e.target.value)
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('this.props.form.validate()', this.props.form.validate())
        console.log('this.props.form.valid', this.props.form.valid)
        console.log('this.props.form.getValues()', this.props.form.getValues())
        if (typeof this.afterSubmit == 'function'){
            this.afterSubmit.call(this)
        }
    }
};