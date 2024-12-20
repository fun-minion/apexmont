import logo from '../../assets/logo.png'
import './index.css'

const Header = () => {
    const isHome = window.location.pathname === '/'
    const menu = [
        {
            href: '/',
            name: 'Home',
        },
        {
            href: '/team',
            name: 'Team',
        },
        {
            href: '/strategies',
            name: 'Strategies',
        },
        {
            href: '/contact',
            name: 'Contact',
        },
        {
            href: '/terms-of-service',
            name: 'Terms of Service',
        },
        {
            href: '/auth',
            name: 'Login',
        },
    ]

    return (
        <div className='header' style={{ background: isHome ? 'rgba(66, 82, 110, 0.3)' : '#42526E' }}>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='menu'>
                <ul>
                    {
                        menu.map((m, index) => {
                            return <li key={index} className={m.href === window.location.pathname && 'activeMenu'}>
                                <a href={m.href} style={{ color: isHome ? 'white' : '#575757' }}>
                                    {m.name}
                                </a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header;