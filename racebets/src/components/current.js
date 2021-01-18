import React from 'react';
import RaceType from './raceType';
import Races from './races';


class Current extends React.Component {
    constructor() {
        super();
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
                            <RaceType class={"isTypeG"} title={"Gallop"} type={"G"} />
                            <RaceType class={"isTypeJ"} title={"Jumps"} type={"J"} />
                            <RaceType class={"isTypeT"} title={"Trot"} type={"T"} />
                            <RaceType class={"isTypeD"} title={"Greyhounds"} type={"D"} />
                        </ul>
                    </div>
                </div>

                <div>

                </div>
                <div className="c-tab__content c-tab__content--sidebarCurrent c-bar c-bar--plainDark">
                    <Races />
                </div>
            </div>
        </aside>
        );
    }
}

export default Current;