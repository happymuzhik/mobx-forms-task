import React, { Component } from 'react';
import { inject } from 'mobx-react';
import PersonalDataForm from 'components/Forms/PersonalDataForm';

@inject('appStore')
export default class PersonalDataPage extends Component {
    render() {
        const store = this.props.appStore;
        return <div className="personal-data-page">
            <PersonalDataForm store={store} form={store.personalDataForm}  />
        </div>
    }
};