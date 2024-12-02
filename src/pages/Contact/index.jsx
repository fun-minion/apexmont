import './index.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="header-intro-text">
                <h1>For queries about<br />
                    York Capital, please<br />
                    contact us at our <br />
                    global offices.</h1>
                <div className="group-lines">
                    <div className="bigLine"></div>
                </div>
            </div>
            <div className="office">
                <div className="office-details">
                    <h5>US &amp; European Hedge Funds</h5>
                    <p>1330 Avenue of the Americas, 20th Floor<br />
                        New York, NY 10019<br />
                        United States<br />
                        Main. +1 (212) 300-1300<br />
                        Investor Relations. +1 (212) 300-1311<br />
                        <a href="mailto:ycm@yorkcapital.com">ycm@yorkcapital.com</a></p>
                </div>
                <div className="office-details">
                    <h5>Private Equity</h5>
                    <p>1330 Avenue of the Americas, 20th Floor<br />
                        New York, NY 10019<br />
                        United States<br />
                        Main. +1 (212) 300-1300<br />
                        Investor Relations. +1 (212) 300-1311<br />
                        <a href="mailto:YSOFinfo@yorkcapital.com">YSOFinfo@yorkcapital.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;