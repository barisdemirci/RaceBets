import React from 'react';
import store from '../store';

class Races extends React.Component {
    constructor() {
        super();
        this.state = {
            raceTypes: []
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            const data = store.getState();
            let raceTypes = data.raceTypes;
            this.setState({ raceTypes: raceTypes });
        });
    }

    render() {
        const items = [];

        for (const [index, value] of this.state.raceTypes.entries()) {
            items.push(<li key={index}
                className="c-list__item c-accordion c-accordion--sidebar ng-scope">

                <div className="c-accordion__head">
                    <h3 className="c-accordion__title ng-binding"><span
                        className="c-flag isCountryGB"></span>United Kingdom</h3>
                </div>

                <div className="c-accordion__body">
                    <ul className="c-dataList c-dataList--sidebar c-dataList--currentEvents rowsBordered">
                        <li className="c-dataList__row ng-scope">
                            <div className="c-dataList__cell c-dataList__cell--type">
                                <span className="c-dataList__data">
                                    <span className="c-raceType {isType}"></span>
                                </span>
                            </div>
                            <a ng-href="event/details/id/362974"
                                className="c-dataList__cell c-dataList__cell--title hasChildEvent--0 ajaxify"
                                href="event/details/id/362974">
                                <span className="c-dataList__data ng-binding hasTag--pricedUp">Towcester
                      Dogs</span>
                                <span ng-if="event.is_priced_up"
                                    className="c-dataList__data ng-scope">
                                    <span className="c-tag c-tag--small isPricedUp ng-binding"
                                        title="Fixed Odds">F</span>
                                </span>
                            </a>
                            <div className="c-dataList__cell c-dataList__cell--time isHighlighted">
                                <span className="c-dataList__data">
                                    <span className="ng-binding">11m</span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>)
        }

        return (
            <ul className="c-list">
                {items}
            </ul>
        )
    }
}

export default Races