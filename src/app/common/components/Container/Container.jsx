import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PersonalDataForm from 'components/Forms/PersonalDataForm';
import PayDataForm from 'components/Forms/PayDataForm';
import FinishForm from 'components/Forms/FinishForm';

export default class Container extends Component {
    render() {
        return  <div className="forms-container">
            <Switch>
                <Route exact path="/" component={PersonalDataForm} />
                <Route exact path="/paydata" component={PayDataForm} />
                <Route exact path="/submit" component={FinishForm} />
            </Switch>
        </div>
    }
};