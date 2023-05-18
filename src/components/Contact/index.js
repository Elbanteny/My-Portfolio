import emailJs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailJs
            .sendForm('service_m5uw1nl', 'template_63teptf', form.current, '6lW68druQ6jqlD2tv')
            .then(
                () => {
                    alert('Pesan Berhasil Dikirim!')
                    window.location.reload(false)
                },
                () => {
                    alert('Gagal mengirim pesan, coba lagi !')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Hubungi Saya'.split('')}
                            idx={15} />
                    </h1>
                    <p>
                        Halo, terima kasih telah mengunjungi profil saya. Saya seorang fullstack web developer dan freelancer yang berdedikasi dan berpengalaman dalam membangun aplikasi web dan memecahkan masalah teknis. Jika Anda membutuhkan bantuan untuk proyek web Anda atau ingin bekerja sama, silakan hubungi saya melalui form email di bawah ini atau melalui kontak saya. Saya akan segera menjawab dan membahas lebih lanjut mengenai kebutuhan Anda. Terima kasih dan saya berharap dapat bekerja sama dengan Anda!
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail} >
                            <ul>
                                <li className="half">
                                    <input placeholder="Nama" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subjek"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Pesan..."
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="KIRIM" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                {/* MAP */}
                <div className="info-map">
                    M Amiryan P,
                    <br />
                    Indonesia,
                    <br />
                    Serang, Banten<br />
                    Cikande Permai <br />
                    <br />
                    <span>
                        <a href="http://wa.me/+6281389954335">
                            <p><FontAwesomeIcon icon={faWhatsapp} color="#25d366" /> Hubungi saya melalui Whatspapp</p>
                        </a>
                    </span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[-6.226226, 106.346360]} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {/* <Marker position={[-6.226226, 106.346360]}>
                            <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
                        </Marker> */}
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Contact;