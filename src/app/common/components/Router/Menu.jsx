import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { inject } from 'mobx-react';

import style from './style.styl';

@inject('appStore')
export default class Menu extends Component {
    render() {
        return  <div className="header">
            <h1>My test app</h1>
            <div className="menu">
                <NavLink exact className="menu__item" activeClassName="menu__item--active" to="/">
                    { this.props.appStore.personalDataForm.title }
                </NavLink>>
                <NavLink className="menu__item" activeClassName="menu__item--active" to="/paydata">
                    { this.props.appStore.payDataForm.title }
                </NavLink>>
                <NavLink className="menu__item" activeClassName="menu__item--active" to="/submit">
                    { this.props.appStore.finishForm.title }
                </NavLink>
            </div>
        </div>
    }
};