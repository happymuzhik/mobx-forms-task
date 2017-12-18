import React, { Component } from "react";
export default function asyncComponent(getComponent) {
    class Async extends Component {
        static Component = null;
        state = {
            Component: this.Component
        };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then( Component => {
                    this.Component = Component
                    this.setState({ Component })
                })
            }
        }

        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }
    return Async;
}