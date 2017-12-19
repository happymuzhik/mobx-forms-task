import React, { Component } from 'react';

export default class Input extends Component {
    render() {
        const { field } = this.props;
        return <input
            {...this.props.attrs}
            name={field.name}
            placeholder={field.placeholder}
            value={field.value}
            type={field.type} />
    }
};