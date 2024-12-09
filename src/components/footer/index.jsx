import './index.scss';

import logo from '../../assets/logo.png';

import { TiSocialLinkedin } from 'react-icons/ti';

const Footer = () => {
    const isHome = window.location.pathname === '/';

    return (
        <>
            <footer className='footer' style={{ marginTop: isHome ? 'calc(100vh - 245px)' : 0 }}>
                <div className="row">
                    <div className="company-logo">
                        <img src={logo} />
                    </div>
                    <div className="main-menu">
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/team'>Team</a></li>
                            <li><a href='/strategies'>Strategies</a></li>
                            <li><a href='/contact'>Contact</a></li>
                            <li><a href='/disclaimers'>Disclaimers</a></li>
                            <li><a href='/auth'>Login</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="linkedin">
                        <a href='https://www.linkedin.com/in/apexmont'><TiSocialLinkedin /></a>
                    </div>
                    <div className="info">
                        Copyright © 2024 Apexmont.Inc. All rights reserved. | <a href='/legal-notices'>Legal Notices</a> | <a href='privacy-policy'>Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;