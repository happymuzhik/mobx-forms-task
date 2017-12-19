import React, { Component } from 'react';

export default class Form extends Component {
    form = null
    handleChange(e) {
        this.form.getField(e.target.name).onChange(e.target.value)
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.form.validate())
        console.log(this.form.getValues())
    }
};