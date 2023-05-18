//Yg dikomentari untuk Firebase

import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss";
import PortfolioData from "../../data/portfolio.json"
// import { getDocs, collection } from "firebase/firestore"
// import { db } from "../../firebase"

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    // const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    // useEffect(() => {
    //     getPortfolio();
    // }, []);

    // const getPortfolio = async () => {
    //     const querySnapshot = await getDocs(collection(db, 'portfolio'));
    //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    // }


    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img
                                    className='portfolio-image'
                                    src={port.cover}
                                    alt="portofolio" />
                                <div className='content' onClick={() => window.open(port.url)}>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <button className='btn'
                                        onClick={() => window.open(port.url)}>Buka</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <> <div className='container portfolio-page'>
            <h1 className='page-title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portofolio".split("")}
                    idx={15}
                />
            </h1>
            <div>{renderPortfolio(PortfolioData.portfolio)}</div>
        </div>

            <Loader type='pacman' />
        </>

    );
}

export default Portfolio;