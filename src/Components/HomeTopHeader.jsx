import React, { useState } from 'react'
import "./HomeTopHeader.css"
import { FaAngleRight, FaRegBell, FaUserAlt } from "react-icons/fa";
import LanguageSelector from './LanguageSelector.jsx';

function HomeTopHeader() {
    return (
        <>
            <div className="bg-light-primary HomePage">
                <div className="container py-3">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-2 col-sm-1 p-0">
                            <img src={require(".././Images/logo-1.png")} alt="" srcset="" className='w-100' />
                        </div>
                        <div className="col-12 col-sm-11 d-flex align-items-center justify-content-center justify-content-sm-end">
                            <div className="row align-items-center justify-content-center justify-content-sm-end">
                                <div className="col-auto">
                                    <ul className='d-flex p-0 align-items-center'>
                                        <li className='p-0 active'>
                                            <a href="#" className='w-100 fw-bold'>Home</a>
                                        </li>
                                        <li className='p-0'>
                                            <a href="#" className='w-100 fw-bold'>My Jobs</a>
                                        </li>
                                        <li className='p-0'>
                                            <a href="#" className='w-100 fw-bold'><FaRegBell /></a>
                                        </li>
                                        <li className='p-0'>
                                            <a href="#" className='w-100 fw-bold'><FaUserAlt /></a>
                                        </li>
                                        <div className="vr d-none d-sm-block"></div>
                                    </ul>
                                </div>
                                <div className="col-auto">
                                    <ul className='d-flex p-0 align-items-center'>
                                        <li className='p-0'>
                                            <a href="#" className='w-100 fw-bold'>For Employee <FaAngleRight className='fs-5 right-arrow' /></a>
                                        </li>
                                        <li className="languageSelector">
                                            <LanguageSelector />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeTopHeader