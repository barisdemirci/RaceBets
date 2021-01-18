import React from 'react';
import store from '../store';

class RaceType extends React.Component {
    constructor() {
        super();
        this.state = {
            isOn: true
        };
    }

    componentDidMount() {
        this.setState({ type: this.props.type });
        store.dispatch({ type: 'addRaceType', payload: this.props.type });
    }

    handleClick(e) {
        e.preventDefault();

        this.setState({ isOn: !this.state.isOn });

        if (!this.state.isOn) {
            store.dispatch({ type: 'addRaceType', payload: this.props.type });
            e.currentTarget.className = "c-btn c-btn--default isOn";
        }
        else {
            store.dispatch({ type: 'removeRaceType', payload: this.props.type });
            e.currentTarget.className = "c-btn c-btn--default";
        }
        
    }

    render() {
        return (
            <li className="c-btnBar__item">
                <a className="c-btn c-btn--default isOn" onClick={this.handleClick.bind(this)} title={this.props.title}>
                    <span className={"c-raceType " + this.props.class}></span>
                    <span className={"c-icon c-icon--raceType " + this.props.class}></span>
                </a>
            </li>
        )
    }
}

export default RaceType