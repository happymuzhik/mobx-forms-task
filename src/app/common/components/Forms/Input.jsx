import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Input extends Component {
    render() {
        const { field } = this.props;
        return <span>
            <input
                {...this.props}
                name={field.name}
                placeholder={field.placeholder}
                defaultValue={field.defaultValue}
                type={field.type} />
            {
                (!field.valid) ? 
                <div>{field.error_text}</div>
                :false
            }
        </span>
    }
};