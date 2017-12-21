import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LinkButton extends Component {
    changeURL() {
        const { url, history, onLeaveHook } = this.props;
        if (typeof onLeaveHook == 'function' && onLeaveHook(history)){
            history.push(url)
        }
        if (typeof onLeaveHook != 'function'){
            history.push(url)
        }
    }
    render() {
        return <button type='button' onClick={this.changeURL.bind(this)}>
                {this.props.children}
            </button>
    }
};

export default withRouter(LinkButton);