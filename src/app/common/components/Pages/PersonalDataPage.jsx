import React, { Component } from 'react';
import { inject } from 'mobx-react';
import PersonalDataForm from 'components/Forms/PersonalDataForm';

@inject('appStore')
export default class PersonalDataPage extends Component {
    render() {
        return <div className="personal-data-page">
            <PersonalDataForm form={this.props.appStore.personalDataForm} />
        </div>
    }
};