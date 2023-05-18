import './index.scss'
import LogoS from '../../assets/images/logo-a.png'
import LogoSubtitle from '../../assets/images/name.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faHome, faPalette, faUser, faClose, faAward } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false)


    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" className='logo-a' />
                <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
            </Link>

            <nav className={showNav ? 'mobile-show' : ''} >
                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>

                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>

                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faPalette} color="#4d4d4e" />
                </NavLink>

                <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="certificate-link" to="/certificate">
                    <FontAwesomeIcon icon={faAward} color="#4d4d4e" />
                </NavLink>

                <div className='sosmed-mobile'>
                    <li onClick={() => setShowNav(false)} exact="true">
                        <a className='linkedin'
                            href="https://www.linkedin.com/in/m-amiryan-p-28543023b"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                color="#4d4d4e"
                                className="anchor-icon"
                            />
                        </a>
                    </li >
                    <li onClick={() => setShowNav(false)} exact="true">
                        <a
                            className='github'
                            href="https://github.com/Elbanteny"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                color="#4d4d4e"
                                className="anchor-icon"
                            />
                        </a>
                    </li>
                    <li onClick={() => setShowNav(false)} exact="true">
                        <a
                            className='instagram'
                            href="https://instagram.com/el_banteny?utm_medium=copy_link"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                color="#4d4d4e"
                                className="anchor-icon"
                            />
                        </a>
                    </li>
                </div>

                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />
            </nav>

            <ul >
                <li onClick={() => setShowNav(false)} exact="true">
                    <a
                        href="https://www.linkedin.com/in/m-amiryan-p-28543023b"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li >
                <li onClick={() => setShowNav(false)} exact="true">
                    <a
                        href="https://github.com/Elbanteny"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li onClick={() => setShowNav(false)} exact="true">
                    <a
                        href="https://instagram.com/el_banteny?utm_medium=copy_link"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>

            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color='#ffd700'
                size='3x'
                className='hamburger-icon'
            />

        </div>
    )
}
export default Sidebar