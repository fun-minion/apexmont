import './index.css';

const Footer = () => {
    const isHome = window.location.pathname === '/';

    return (
        <>
            <footer className='footer' style={{ marginTop: isHome ? 'calc(100vh - 104px)' : 0 }}>
                <div className='footer-left'>
                    <p>© 2024 Apexmont. All Rights Reserved.</p>
                </div>
                <div className="footer-right">
                    <a href='#privacy-policy'>Privacy Policy</a>
                    <a href='#terms-of-service'>Terms of Service</a>
                </div>
            </footer>
        </>
    )
}

export default Footer;