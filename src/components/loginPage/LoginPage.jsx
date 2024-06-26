import React, { useState } from 'react'
import "./loginPage.css"
import blockEye from "../../assets/images/blockEye.png"
import symbol from "../../assets/images/symbol 1.png"
import logo from "../../assets/images/logo.png"
import metaBrain from "../../assets/images/mataBrain.png"
import AramcoIcon from "../..//assets/icons/Aramco_icon.svg";
import WorldIcon from '../../assets/icons/world-icon.svg'
import circlePattern from '../../assets/images/circlePattern.png'
import lowerSidebar from "../../assets/images/smalIcon.png"
import singleSphere from "../../assets/images/singleSphere.png"
import arrow from "../../assets/images/arrowrounded.png"
import img1 from "../../assets/images/image1.png"
import img2 from "../../assets/images/image2.png"
import img4 from "../../assets/images/image4.png"

const tabs = [
    {
        label: "Aramco Knowledge",
        value: "aramco_knowledge",
    },
    {
        label: "World Knowledge",
        value: "world_knowledge",
    },
];

const LoginPage = () => {

    const [opacity, setOpacity] = useState(1);
    const [opacity1, setOpacity1] = useState(1);
    const [isPassowrd, setIsPassword] = useState(true)

    setTimeout(() => {
        opacity === 0 ? setOpacity(1) : setOpacity(0);
    }, 4000);

    setTimeout(() => {
        opacity1 === 0 ? setOpacity1(1) : setOpacity1(0);
    }, 8000);

    return (
        <>
            <div className='main-container'>
                <div className='first-container'>
                    <div className='LeftContent'>
                        <div className="main-head mb-3">
                            <div className="main-heading">
                                <img src={logo} alt="" />
                                <div className='metaBetabox'>
                                    <img src={metaBrain} alt="" />
                                    <button className='beta-button'>Beta</button>
                                </div>
                            </div>
                            <p className='poweredPara'>Powered by Aramco.AI</p>
                        </div>

                        <div className='content_box' style={{ opacity: `${opacity1}` }}>
                            <div className="main-btns" style={{ padding: "0", border: 'none' }}>
                                <div style={{ display: 'flex' }}>
                                    {tabs.map(({ label, value }, index) => (
                                        <>
                                            {index === 0 && <button
                                                className={`mainWrldBtn${index}`}
                                            >
                                                <img src={(index === 0) ? AramcoIcon : WorldIcon} alt="" />
                                                {label}
                                            </button>}
                                            {(!!opacity && index === 1) && <button
                                                className={`mainWrldBtn${index}`}
                                            >
                                                <img src={(index === 0) ? AramcoIcon : WorldIcon} alt="" />
                                                {label}
                                            </button>}
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div className='sphereBox'>
                                <img src={circlePattern} alt="" style={{ opacity: `${opacity}` }} />
                                <img src={singleSphere} alt="" style={{ opacity: `${(opacity - 1) * -1}` }} />
                            </div>
                            <div className='nano-box'>
                                <img src={lowerSidebar} alt="" />
                                <p>Unlock the Power of Knowledge with Our Dual Knowledge Bases!
                                    Dive into the Aramco Knowledge and Explore the World Knowledge. Your
                                    Gateway to Discovery Starts Here!
                                </p>
                            </div>
                        </div>

                        <div className="thirdBoxContainer" style={{ opacity: `${(opacity1 - 1) * -1}` }} >
                            <div className="thirdBox">
                                <img src={img1} className='img1' alt="" />
                                <img src={img2} className='img2' alt="" />
                                <img src={arrow} className='img3' alt="" />
                                <img src={img4} className='img4' alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="bottom_txt">
                        <p>Unlock the Power of Knowledge with Our Dual Knowledge Bases! Dive into the Aramco Knowledge and Explore the World Knowledge. Your Gateway to Discovery Starts Here!</p>
                    </div>

                </div>
                <div className='second-container'>
                    <div className='form-container'>
                        <form action="">
                            <div>
                                <h2>Let's get you in</h2>
                                <p>Please enter you Aramco credentials to login</p>
                            </div>
                            <div className='first-input'>
                                <p className='input-label'>Aramco Email</p>
                                <div className='input-outer'>
                                    <input type="text" placeholder='' />
                                    <span>@gmail.com</span>
                                </div>
                            </div>
                            <div className='first-input'>
                                <p className='input-label'>Aramco Password</p>
                                <div className='input-outer'>
                                    <input type={isPassowrd === true ? "password" : "text"} placeholder='' style={{ width: '27rem' }} />
                                    <span onClick={() => setIsPassword(!isPassowrd)}>
                                        <img src={blockEye} alt="" />
                                    </span>
                                </div>
                            </div>
                            <div className='button_box'>
                                <button className='login-button' type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
