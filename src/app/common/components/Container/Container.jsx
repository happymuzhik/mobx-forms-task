import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from 'components/Async/Async';

const PersonalDataForm = asyncComponent(() =>
    import('components/Forms/PersonalDataForm').then(module => module.default)
);
const PayDataForm = asyncComponent(() =>
    import('components/Forms/PayDataForm').then(module => module.default)
);
const FinishForm = asyncComponent(() =>
    import('components/Forms/FinishForm').then(module => module.default)
);

export default class Container extends Component {
    render() {
        return  <div className="forms-container">
            <Switch>
                <Route exact path="/" component={PersonalDataForm} />
                <Route path="/paydata" component={PayDataForm} />
                <Route path="/submit" component={FinishForm} />
            </Switch>
        </div>
    }
};