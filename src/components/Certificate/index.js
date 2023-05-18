import './index.scss'
import Loader from 'react-loaders';
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from 'react';
import certificateData from "../../data/certificate.json"
import Modal from 'react-modal';

const Certificate = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const renderCertificate = (certificate) => {
        return (
            <div className="images-container">
                {
                    certificate.map((cert, idx) => {
                        return (
                            <div className="image-box" key={idx} onClick={() => {
                                setModalIsOpen(true);
                                setSelectedImg(cert.img);
                            }} >
                                <img src={cert.img} alt="certificate" />
                                <div className="content">
                                    <h4 className='description'>{cert.description}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


    return (
        <>
            <div className="container certificate-page">
                <h1 className='page-title'>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Sertifikat".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderCertificate(certificateData.certificate)}</div>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: { backgroundColor: 'rgba(0,0,0,0.5)' },
                    content: {
                        maxWidth: 'calc(55% - (-70px))',
                        width: 'auto',
                        height: 'auto',
                        margin: 'auto',
                        maxHeight: 'calc(40% - (-10px))',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        position: "absolute"
                    },
                }}

            >
                <button onClick={() => setModalIsOpen(false)}>X</button>
                <img src={selectedImg} alt="certificate" className="popup-image" />

            </Modal>
            <Loader type='pacman' />
        </>
    );
}

export default Certificate;