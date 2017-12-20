import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';

import asyncComponent from 'components/Async/Async';
import Page404 from 'components/Pages/Page404';

const PersonalDataPage = asyncComponent(() =>
    import('components/Pages/PersonalDataPage').then(module => module.default)
);
const PayDataForm = asyncComponent(() =>
    import('components/Forms/PayDataForm').then(module => module.default)
);
const FinishForm = asyncComponent(() =>
    import('components/Forms/FinishForm').then(module => module.default)
);

@inject('appStore')
export default class Container extends Component {
    render() {
        return  <div className="forms-container">
            <Switch>
                <Route exact path="/" component={PersonalDataPage} />
                <Route path="/paydata" component={PayDataForm} />
                <Route path="/submit" component={FinishForm} />
                <Route component={Page404} />
            </Switch>
        </div>
    }
};