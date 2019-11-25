import React, { Component } from 'react';
import Clock from './Clock';

export default class Countdown extends Component {
    constructor (props) {
        super(props);
        this.state = {
            deadline: "November, 30, 2019"
        };
    }

    render () {
        return (
            <div>
                <Clock deadline={this.state.deadline} />
            </div>
        );
    }
}
