import React from 'react';


class RaceType extends React.Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }

    render() {
        return (<aside id="sidebar" role="complementary">
            <div className="m-sidebar c-tab c-tab--sidebar ng-isolate-scope">
                <div className="c-tab__control c-tab--extended">
                    <div className="c-btnGroup">
                        <button className="c-btn c-btn--tab ng-scope isSelected"
                            translate="label_current">Current</button>
                        <button className="c-btn c-btn--tab ng-scope"
                            translate="label_ante_post">Ante
                        Post</button>
                        <button ng-if="vm.isVirtualAvailable" className="c-btn c-btn--tab ng-binding ng-scope">Virtuals
              <div className="c-tag c-tag--small isVirtuals c-btn--badge ng-scope" translate="label_new">New
                        </div>
                        </button>
                        <button className="c-btn c-btn--tab">
                            <span className="c-iconFont c-iconFont--calendar-o"></span>
                            <span className="isPositioned ng-binding">17</span>
                        </button>
                    </div>
                </div>

                <div id="m-sidebar__filters">
                    <div className="c-bar c-bar--dark">
                        <ul className="c-btnBar">
                            <li className="c-btnBar__item">
                                <a className="c-btn c-btn--default isOn" ng-click="vm.toggleFilter('G')" title="Gallop">
                                    <span className="c-raceType isTypeG"></span>
                                    <span className="c-icon c-icon--raceType isTypeG"></span>
                                </a>
                            </li>
                            <li className="c-btnBar__item">
                                <a className="c-btn c-btn--default isOn" ng-click="vm.toggleFilter('J')" title="Jumps">
                                    <span className="c-raceType isTypeJ"></span>
                                    <span className="c-icon c-icon--raceType isTypeJ"></span>
                                </a>
                            </li>
                            <li className="c-btnBar__item">
                                <a className="c-btn c-btn--default isOn" ng-click="vm.toggleFilter('T')" title="Trot">
                                    <span className="c-raceType isTypeT"></span>
                                    <span className="c-icon c-icon--raceType isTypeT"></span>
                                </a>
                            </li>
                            <li className="c-btnBar__item ng-scope" ng-if="!vm.hideGreyhoundsFilter()">
                                <a className="c-btn c-btn--default" ng-click="vm.toggleFilter('D')" title="Greyhounds">
                                    <span className="c-raceType isTypeD"></span>
                                    <span className="c-icon c-icon--raceType isTypeD"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>

                </div>
                <div className="c-tab__content c-tab__content--sidebarCurrent c-bar c-bar--plainDark">
                    <ul className="c-list" ng-show="vm.eventsIdsList.countries.current.length > 0">
                        <li ng-repeat="country in vm.eventsList.countries.current track by country"
                            ng-show="vm.eventsIdsList.countries.current[country]"
                            className="c-list__item c-accordion c-accordion--sidebar ng-scope ng-hide">

                            <div className="c-accordion__head"
                                ng-click="vm.toggleCollapsed(country, 'current')">
                                <h3 className="c-accordion__title ng-binding"><span
                                    className="c-flag isCountryGB"></span>United Kingdom</h3>
                            </div>

                            <div className="c-accordion__body">
                                <ul className="c-dataList c-dataList--sidebar c-dataList--currentEvents rowsBordered">
                                    <li className="c-dataList__row ng-scope ng-hide"
                                        ng-repeat="event in vm.eventsList.current[country].running | orderBy: ['title'] track by event.id"
                                        ng-show="vm.eventsIdsList.current[country].running[event.id]">

                                        <div className="c-dataList__cell c-dataList__cell--type">
                                            <span className="c-dataList__data">
                                                <span className="c-raceType isType"></span>
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
                                        <div ng-show="event.next_race_time"
                                            className="c-dataList__cell c-dataList__cell--time isHighlighted"
                                            ng-click="openUrl(event.next_race_url)">
                                            <span className="c-dataList__data">
                                                <span className="ng-binding">11m</span>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        );
    }
}

export default RaceType;