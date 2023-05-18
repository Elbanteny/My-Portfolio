import './index.scss'
import Animatedletters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <Animatedletters
                            letterClass={letterClass}
                            strArray={'About me'.split("")}
                            idx={15}
                        />
                    </h1>

                    <p>
                        Saya adalah seorang fullstack web developer dan freelancer yang memiliki passion dan minat besar dalam dunia teknologi dan pengembangan aplikasi web. Saya memiliki pengalaman bekerja pada proyek-proyek beragam, mulai dari proyek-proyek skala kecil hingga proyek besar dan terintegrasi dengan tim.
                    </p>
                    <p>
                        Saya memiliki kemampuan dalam menggunakan beragam bahasa pemrograman seperti JavaScript, HTML, CSS, dan PHP untuk membangun aplikasi web yang memiliki performa dan fungsi yang optimal. Saya juga memahami arsitektur dan desain database yang baik, sehingga dapat membuat aplikasi web yang mudah digunakan dan memiliki performa yang baik.
                    </p>
                    <p>
                        Saya juga memiliki pengalaman bekerja sebagai freelancer dan memahami pentingnya deadline dan kualitas pekerjaan. Saya selalu berusaha untuk memenuhi harapan klien dan memastikan pekerjaan diterima tepat waktu dan sesuai dengan spesifikasi. Saya memiliki pemahaman yang kuat tentang proses pengembangan aplikasi web dan dapat bekerja dengan baik secara individu maupun tim.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faNodeJs} color='#44883e' />
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type='pacman' />
        </>
    );
}

export default About;