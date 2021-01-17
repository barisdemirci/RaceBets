import React from 'react';

class RaceBox extends React.Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }

    render() {
        return (
            <aside id="rightBar" role="complementary">
                <div className="l-sticky" style={{ width: "240px" }}>
                    <div rb-disable-animate="" ng-hide="!vm.nextrace" id="m-nextrace--rightBar"
                        className="m-nextrace m-nextrace--rightBar c-box c-box--dark ng-isolate-scope">
                        <div className="c-box__wrap" ng-show="vm.nextrace">
                            <div className="c-box__head">
                                <h3 className="c-box__title">
                                    <a ng-href="race/details/id/3813774" className="c-link ng-binding"
                                        title="Next Race:: Cagnes-sur-Mer R3" href="race/details/id/3813774">
                                        <span className="c-flag isCountryFR"></span> Cagnes-sur-Mer
                                    <span className="pullRight ng-binding">Due</span>
                                    </a>
                                </h3>
                                <hr className="c-ruler c-ruler--grey" />
                            </div>
                            <div className="c-box__body">
                                <a ng-href="race/details/id/3813774" className="m-nextrace__meta c-link"
                                    title="Next Race:: Cagnes-sur-Mer R3" href="race/details/id/3813774">
                                    <span className="ng-binding">11 Runners</span>
                                    <span ng-if="vm.nextrace.distance"
                                        className="ng-binding ng-scope">| 2,150 m</span>
                                    <span ng-if="vm.nextrace.purse.amount"
                                        className="ng-binding ng-scope">| 22,000 EUR</span>

                                    <span className="c-icon c-icon--raceType isInverted pullRight isTypeT"></span>
                                </a>
                            </div>
                            <div className="c-box__body c-box__body--pullOff">
                                <ul className="c-dataTable c-dataTable--runners">
                                    <li className="c-dataTable__row ng-scope" ng-repeat="runner in vm.nextrace.runners">

                                        <div ng-if="vm.showSilks"
                                            className="c-dataTable__cell c-dataTable__cell--silk ng-scope">
                                            <a ng-href="race/details/id/3813774" className="c-link"
                                                href="race/details/id/3813774">
                                                <span className="c-runnerSilk ng-isolate-scope c-runnerSilk--s hasSilk"
                                                    ng-style="silkExtension &amp;&amp; {
'background-image': 'url(/cache/img/silks/' + silkId + '_w' + vm.silkWidth + '.' + silkExtension + ')'
}" silk-id="180700_13bf" silk-extension="png" silk-size="s">
                                                </span>
                                            </a>
                                        </div>
                                        <div className="c-dataTable__cell c-dataTable__cell--runner" ng-click="vm.gotoRace()">
                                            <a ng-href="race/details/id/3813774" className="c-link ng-binding"
                                                href="race/details/id/3813774">Fragon D'avignère</a>
                                        </div>
                                        <div className="c-dataTable__cell c-dataTable__cell--odds"><a
                                            ng-if="!vm.nextrace.fixed_odds &amp;&amp; runner.odds"
                                            ng-href="race/details/id/3813774"
                                            className="c-btn c-btn--s c-btn--odds ng-scope" href="race/details/id/3813774">
                                            <span data-odds="3.7" className="ng-binding">3.7</span>
                                        </a>
                                        </div>
                                    </li>
                                    <li className="c-dataTable__row ng-scope" ng-repeat="runner in vm.nextrace.runners">

                                        <div ng-if="vm.showSilks"
                                            className="c-dataTable__cell c-dataTable__cell--silk ng-scope">
                                            <a ng-href="race/details/id/3813774" className="c-link"
                                                href="race/details/id/3813774">
                                                <span className="c-runnerSilk ng-isolate-scope c-runnerSilk--s hasSilk"
                                                    ng-style="silkExtension &amp;&amp; {
'background-image': 'url(/cache/img/silks/' + silkId + '_w' + vm.silkWidth + '.' + silkExtension + ')'
}" silk-id="364729_b7f1" silk-extension="png" silk-size="s">
                                                </span>
                                            </a>
                                        </div>
                                        <div className="c-dataTable__cell c-dataTable__cell--runner" ng-click="vm.gotoRace()">
                                            <a ng-href="race/details/id/3813774" className="c-link ng-binding"
                                                href="race/details/id/3813774">Faubourg Du Perche</a>
                                        </div>
                                        <div className="c-dataTable__cell c-dataTable__cell--odds"><a
                                            ng-if="!vm.nextrace.fixed_odds &amp;&amp; runner.odds"
                                            ng-href="race/details/id/3813774"
                                            className="c-btn c-btn--s c-btn--odds ng-scope" href="race/details/id/3813774">
                                            <span data-odds="3.8" className="ng-binding">3.8</span>
                                        </a>
                                        </div>
                                    </li>
                                    <li className="c-dataTable__row ng-scope" ng-repeat="runner in vm.nextrace.runners">

                                        <div ng-if="vm.showSilks"
                                            className="c-dataTable__cell c-dataTable__cell--silk ng-scope">
                                            <a ng-href="race/details/id/3813774" className="c-link"
                                                href="race/details/id/3813774">
                                                <span className="c-runnerSilk ng-isolate-scope c-runnerSilk--s hasSilk"
                                                    ng-style="silkExtension &amp;&amp; {
'background-image': 'url(/cache/img/silks/' + silkId + '_w' + vm.silkWidth + '.' + silkExtension + ')'
}" silk-id="234801_dc96" silk-extension="png" silk-size="s">
                                                </span>
                                            </a>
                                        </div>
                                        <div className="c-dataTable__cell c-dataTable__cell--runner" ng-click="vm.gotoRace()">
                                            <a ng-href="race/details/id/3813774" className="c-link ng-binding"
                                                href="race/details/id/3813774">Falco Fun</a>
                                        </div>
                                        <div className="c-dataTable__cell c-dataTable__cell--odds">
                                            <a
                                                ng-if="!vm.nextrace.fixed_odds &amp;&amp; runner.odds"
                                                ng-href="race/details/id/3813774"
                                                className="c-btn c-btn--s c-btn--odds ng-scope" href="race/details/id/3813774">
                                                <span data-odds="3.9" className="ng-binding">3.9</span>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}

export default RaceBox