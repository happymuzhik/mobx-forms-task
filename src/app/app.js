import style from 'styles/common.styl';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';

import appStore from 'store/AppStore';

import Menu from 'components/Menu/Menu';
import Container from 'components/Container/Container';

const stores = { appStore };

render(
    <Provider {...stores}>
        <Router>
            <div>
                <Menu />
                <Container />
            </div>            
        </Router>
    </Provider>,
    document.getElementById('root')
);