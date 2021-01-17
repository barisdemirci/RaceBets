import React from 'react';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }

    render() {
        return (
            <footer id="footer" className="m-footer" role="contentinfo">
                <div className="g-cont">
                    <div className="g-row">
                        <div className="m-footer__lang">
                            <div className="select-language">
                                <div className="select-box">

                                </div>
                            </div>

                            <div className="m-footer__settings">
                            </div>

                            <div className="m-footer__cookies">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-footer__licence">
                    <div className="g-cont">
                        <p className="m-footer__licenceCOM">RaceBets International Gaming Ltd, Dragonara Business Centre, Dragonara
                Road, St. Julian's STJ 3141, Malta, is licensed and regulated by the <a
                                href="https://www.authorisation.mga.org.mt/verification.aspx?lang=en&amp;company=a0fb30b0-a5e4-4041-b715-80a963f4e497"
                                target="_blank">Malta Gaming Authority (MGA)</a> under licence number MGA/CRP/108/2004 issued on
                01/08/2018 (initially issued on 18/12/2010). RaceBets.com® is a registered trade mark. Data on RaceBets
                website(s) (including pricing data) is protected by © and database rights. It may not be used for any
                purpose without a licence. All rights reserved. Reach us from 10:00 am to 11:45 pm 0808 238 0022 (free
                from UK) or +44 203 747 6778. <b>Gambling can be addictive - please play responsibly.</b></p>
                        <a href="https://www.authorisation.mga.org.mt/verification.aspx?lang=EN&amp;company=a0fb30b0-a5e4-4041-b715-80a963f4e497&amp;details=1"
                            className="m-footer__licenceLogo isMGA" target="_blank" rel="noopener nofollow"
                            title="Authorised by Malta Gaming Authority (MGA)">Authorised by Malta Gaming Authority (MGA)</a>

                    </div>
                </div>

                <div className="m-footer__partners">
                    <p className="g-cont">
                        <span className="m-footer__partnersLabel">Proud to be partner of:</span>
                        <a href="/en/horse-racing/static/partners/" className="m-footer__partnersList ajaxify">
                            <span className="m-footer__partnersLogo isGER">German Racing</span>
                            <span className="m-footer__partnersLogo isRUK">Racing UK</span>
                            <span className="m-footer__partnersLogo isATR">At The Races</span>
                        </a>
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer