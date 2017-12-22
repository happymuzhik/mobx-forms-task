import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Input extends Component {
    render() {
        const { field } = this.props;
        return <div className={'form__input' + ((!field.valid) ?' form__input--error': '')}>
            <input
                {...this.props}
                name={field.name}
                placeholder={field.placeholder}
                defaultValue={field.value || field.defaultValue}
                type={field.type} />
            {
                (!field.valid) ? 
                    <div className="form__error-msg">{field.error_text}</div>
                :false
            }
        </div>
    }
};