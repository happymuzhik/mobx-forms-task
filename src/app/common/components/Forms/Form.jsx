import React, { Component } from 'react';

export default class Form extends Component {
    handleChange(e) {
        this.props.form.getField(e.target.name).onChange(e.target.value)
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('this.props.form.validate()', this.props.form.validate())
        console.log('this.props.form.valid', this.props.form.valid)
        console.log('this.props.form.getValues()', this.props.form.getValues())
    }
};