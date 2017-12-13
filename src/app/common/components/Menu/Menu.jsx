import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { inject } from 'mobx-react';

@inject('appStore')
export default class Menu extends Component {
    render() {
        return  <div>
            <h1>My test app</h1>
            <div className="menu">
                <NavLink exact className="menu__item" activeClassName="active" to="/">
                    { this.props.appStore.personalDataForm.title }
                </NavLink>>
                <NavLink className="menu__item" activeClassName="active" to="/paydata">
                    { this.props.appStore.payDataForm.title }
                </NavLink>>
                <NavLink className="menu__item" activeClassName="active" to="/submit">
                    { this.props.appStore.finishForm.title }
                </NavLink>
            </div>
        </div>
    }
};