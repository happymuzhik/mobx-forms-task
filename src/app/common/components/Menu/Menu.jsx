import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return  <div>
                    <h1>My test app</h1>
                    <div className="menu">
                        <div className="menu__item">
                            <Link to="/">Form 1</Link>
                        </div>
                    </div>
                </div>
    }
};