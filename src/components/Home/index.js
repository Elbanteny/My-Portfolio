import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-a.png';
import AnimatedLetters from '../AnimatedLetters';
import "./index.scss"
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const me = 'saya'
    const meArray = me.split("")
    const name = "miryan";
    const nameArray = name.split("")
    const job = "Web Developer."
    const jobArray = job.split("")

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={letterClass}>i</span>
                        <span className={letterClass}>,</span>
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={meArray}
                            idx={14} />
                        <img src={LogoTitle} alt="Developer" className='logo-title' />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={17} />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <h2>FullStack Web Developer | Freelancer </h2>
                    <Link to="/contact" className="flat-button">HUBUNGI SAYA</Link>
                </div>

                <Logo />

            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home;