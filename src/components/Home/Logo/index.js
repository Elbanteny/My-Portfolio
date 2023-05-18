import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/logo-a.png'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            bgRef.current.classList.add('active')
            solidLogoRef.current.classList.add('active')
        }, 3200)
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoS}
                alt="JavaScript,  Developer"
            />


        </div>
    )
}

export default Logo
