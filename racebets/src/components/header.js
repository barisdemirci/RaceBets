import React from 'react';

class Header extends React.Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }

    render() {
        return (
            <header id="header" className="m-header">
                <div id="header-container" className="m-header__cont">
                    <p className="m-header__logo">
                        <a href="/en/horse-racing/home" className="c-link ajaxify">RaceBets.com</a>
                    </p>


                    <ol id="m-header__menu" className="m-header__menu c-btnGroup c-btnGroup--menu" role="navigation">
                        <li className="c-dropover c-btnGroup__item" data-key="home">
                            <a href="/en/horse-racing/home"
                                className="c-dropover__controller c-btn c-btn--link c-btn--menu ajaxify isSelected">Home</a>
                        </li>

                        <li className="c-dropover c-btnGroup__item hasChild" data-key="racing">
                            <a href="/en/horse-racing/calendar/today"
                                className="c-dropover__controller c-btn c-btn--link c-btn--menu ajaxify">Racing</a>

                            <div className="c-dropover__panel c-dropover__panel--dark">
                                <ul className="m-header__subMenu c-btnGroup c-dropover__content">
                                    <li>
                                        <ul className="m-header__subMenuGroup c-btnGroup">
                                            <li className="c-btnGroup__item" data-key="today">
                                                <a href="/en/horse-racing/calendar/today"
                                                    className="c-btn c-btn--link c-btn--subMenu ajaxify">Today</a>
                                            </li>
                                            <li className="c-btnGroup__item" data-key="tomorrow">
                                                <a href="/en/horse-racing/calendar/tomorrow"
                                                    className="c-btn c-btn--link c-btn--subMenu ajaxify">Tomorrow</a>
                                            </li>
                                            <li className="c-btnGroup__item" data-key="yesterday">
                                                <a href="/en/horse-racing/calendar/yesterday"
                                                    className="c-btn c-btn--link c-btn--subMenu ajaxify">Yesterday</a>
                                            </li>
                                        </ul>
                                        <hr className="c-ruler c-ruler--darkCarved" />
                                    </li>
                                    <li>
                                        <ul className="m-header__subMenuGroup c-btnGroup">
                                            <li className="c-btnGroup__item" data-key="highlights">
                                                <a href="/en/horse-racing/content/show/module/highlights"
                                                    className="c-btn c-btn--link c-btn--subMenu ajaxify">Highlights</a>
                                            </li>
                                            <li className="c-btnGroup__item" data-key="stars">
                                                <a href="/en/horse-racing/content/show/module/featuredhorses/cat/stars"
                                                    className="c-btn c-btn--link c-btn--subMenu ajaxify">Stars</a>
                                            </li>
                                            <li className="c-btnGroup__item" data-key="bestbacked">
                                                <a href="/en/horse-racing/content/show/module/featuredhorses/cat/mostbetted"
                                                    className="c-btn c-btn--link c-btn--subMenu ajaxify">Best-Backed</a>
                                            </li>
                                            <li className="c-btnGroup__item" data-key="todaysrunners">
                                                <a href="/en/horse-racing/content/show/module/starters"
                                                    className="c-btn c-btn--link c-btn--subMenu ajaxify">Today's Runners</a>
                                            </li>
                                            <li className="c-btnGroup__item" data-key="internationalrunners">
                                                <a href="/en/horse-racing/content/show/module/featuredhorses/cat/abroad"
                                                    className="c-btn c-btn--link c-btn--subMenu ajaxify">International Runners</a>
                                            </li>
                                            <li className="c-btnGroup__item" data-key="jackpotraces">
                                                <a href="/en/horse-racing/content/show/module/jackpots"
                                                    className="c-btn c-btn--link c-btn--subMenu ajaxify">Jackpot Races</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li className="c-dropover c-btnGroup__item" data-key="streams">
                            <a href="/en/horse-racing/media/streams"
                                className="c-dropover__controller c-btn c-btn--link c-btn--menu ajaxify">Streams</a>


                        </li>
                        <li className="c-dropover c-btnGroup__item hasChild" data-key="offers">
                            <a href="/en/horse-racing/content/show/module/offers"
                                className="c-dropover__controller c-btn c-btn--link c-btn--menu ajaxify">Offers</a>

                            <div className="c-dropover__panel c-dropover__panel--dark">
                                <ul className="m-header__subMenu c-btnGroup c-dropover__content">
                                    <li className="c-btnGroup__item" data-key="promotions">
                                        <a href="/en/horse-racing/content/show/module/offers"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Current Promotions</a>
                                    </li>
                                    <li className="c-btnGroup__item" data-key="picksix">
                                        <a href="/en/horse-racing/offers/picksix"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Pick 6</a>
                                    </li>
                                    <li className="c-btnGroup__item" data-key="bashthebookie">
                                        <a href="/en/horse-racing/offers/beatthetrader"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Bash the Bookie</a>
                                    </li>
                                    <li className="c-btnGroup__item" data-key="logingame">
                                        <a href="/en/horse-racing/offers/logingame"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Login Game</a>
                                    </li>
                                    <li className="c-btnGroup__item" data-key="racebetsmillion">
                                        <a href="/en/horse-racing/offers/milliongame"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">The RaceBets Million</a>
                                    </li>
                                    <li className="c-btnGroup__item" data-key="bettingpool">
                                        <a href="/en/horse-racing/offers/bettingpool"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Betting Pool</a>
                                    </li>
                                    <li className="c-btnGroup__item" data-key="refer">
                                        <a href="/en/horse-racing/offers/friendshipbonus"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Refer a Friend</a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li className="c-dropover c-btnGroup__item hasChild" data-key="statistics">
                            <a href="/en/horse-racing/formguide"
                                className="c-dropover__controller c-btn c-btn--link c-btn--menu ajaxify">Statistics</a>

                            <div className="c-dropover__panel c-dropover__panel--dark">
                                <ul className="m-header__subMenu c-btnGroup c-dropover__content">
                                    <li className="c-btnGroup__item" data-key="formguide">
                                        <a href="/en/horse-racing/formguide"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Form Guide</a>
                                    </li>
                                    <li className="c-btnGroup__item" data-key="jockeys">
                                        <a href="/en/horse-racing/statistics/persons/cat/jockeys"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Jockeys</a>
                                    </li>
                                    <li className="c-btnGroup__item" data-key="trainers">
                                        <a href="/en/horse-racing/statistics/persons/cat/trainers"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Trainers</a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li className="c-dropover c-btnGroup__item hasChild" data-key="editorial">
                            <a href="/en/horse-racing/content/show/module/tips/cat/gallop"
                                className="c-dropover__controller c-btn c-btn--link c-btn--menu ajaxify">Editorial</a>

                            <div className="c-dropover__panel c-dropover__panel--dark">
                                <ul className="m-header__subMenu c-btnGroup c-dropover__content">
                                    <li className="c-btnGroup__item" data-key="galloptips">
                                        <a href="/en/horse-racing/content/show/module/tips/cat/gallop"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Gallop Tips</a>
                                    </li>
                                    <li className="c-btnGroup__item" data-key="trottips">
                                        <a href="/en/horse-racing/content/show/module/tips/cat/trot"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Trot Tips</a>
                                    </li>
                                    <li className="c-btnGroup__item" data-key="blog">
                                        <a href="https://blog.racebets.com"
                                            className="c-btn c-btn--link c-btn--subMenu ajaxify">Blog</a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li className="c-dropover c-btnGroup__item" data-key="help">
                            <a href="https://support.help.racebets.com/en.html"
                                className="c-dropover__controller c-btn c-btn--link c-btn--menu ajaxify" target="_blank">Help</a>


                        </li>

                    </ol>

                    <div className="m-header__social">
                        <a className="c-btn c-btn--tiny c-btn--socialFacebook" title="Facebook" target="_blank"
                            rel="nofollow noopener" href="https://www.facebook.com/RaceBetsUk"><span
                                className="c-iconFont c-iconFont--facebook"></span></a>
                        <a className="c-btn c-btn--tiny c-btn--socialTwitter" title="Twitter" target="_blank"
                            href="https://twitter.com/RaceBetsCom" rel="nofollow noopener">
                            <span className="c-iconFont c-iconFont--twitter"></span>
                        </a>
                    </div>

                    <div id="m-header__user" className="m-header__user">
                        <div rb-disable-animate="" template="header" className="ng-isolate-scope">

                            <div id="m-accWidget--header" className="m-accWidget m-accWidget--header ng-scope">
                                <button id="m-accWidget--header__btnLogin" ng-click="vm.showLoginDialog()"
                                    className="m-accWidget__btnLogin c-btn c-btn--default ng-scope"
                                    translate="label_login">Login</button>

                                <a href="register" className="c-btn c-btn--action ng-scope" translate="label_register">Register</a>
                            </div>
                        </div>
                    </div>

                    <div id="responsibleGamingWeek" className="m-header__responsibleGaming">
                        <a href="https://responsiblegamblingweek.org" className="responsibleGamingLogo"></a>
                    </div>

                    <div id="m-header__clock" className="m-header__clock">
                        <span className="c-iconFont c-iconFont--clock-o"></span>
                        <span id="clock">18:17 h</span>
                    </div>

                </div>

            </header>
        )
    }
}

export default Header