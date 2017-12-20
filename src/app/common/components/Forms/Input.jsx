import React, { Component } from 'react';

export default class Input extends Component {
    render() {
        const { field } = this.props;
        console.log('class Input', field)
        return <span>
            <input
                {...this.props}
                name={field.name}
                placeholder={field.placeholder}
                value={field.value}
                type={field.type} />
            {(!field.valid) ? 
                <div>Error!</div>
                :false
            }
        </span>            
    }
};