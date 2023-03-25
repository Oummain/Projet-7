import './nav.scss'
import Logo from '../../assets/LOGO.svg'
import { NavLink, useLocation } from 'react-router-dom'


export function Nav() {
    let location = useLocation()
    const underLineHome = location.pathname === '/' ? { textDecoration: 'underline black' } : 'none'
    const underLineAbout = location.pathname === '/about' ? { textDecoration: 'underline black' } : 'none'

    return (
        <nav className='nav'>
            <img className='nav_img' src={Logo} alt="logo KASA" />
            <div className='nav_barre'>
                <NavLink className='nav_barre_link link1' to={'/'} style={({ isActive }) => {
                    return {
                        textDecoration: isActive ? "underline" : ""
                    }
                }} >
                    Acceuil
                </NavLink>

                <NavLink className='nav_barre_link link2' to={'/about'} style={({ isActive }) => {
                    return {
                        textDecoration: isActive ? "underline" : ""
                    }
                }} >
                    A Propos
                </NavLink>
            </div>
        </nav>
    )
}