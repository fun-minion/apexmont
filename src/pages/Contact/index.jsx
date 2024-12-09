import './index.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="header-intro-text">
                <h1>For inquiries regarding Apexmont,<br />
                    please reach out to us<br />
                    through our office: <br /></h1>
                <div className="group-lines">
                    <div className="bigLine"></div>
                </div>
            </div>
            <div className="office">
                <div className="office-details">
                    <h5>Apexmont Inc</h5>
                    <p>1741 LOWER WATER STREET<br />
                        SUITE 600<br />
                        HALIFAX NS B3J 0J2<br />
                        Investor Relations. +1 (212) 300-1311<br />
                        Canada<br />
                    </p>
                        {/* <a href="mailto:ycm@yorkcapital.com">ycm@yorkcapital.com</a> */}
                </div>
            </div>
        </div>
    )
}

export default Contact;