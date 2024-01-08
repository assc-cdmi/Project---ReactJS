import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Footer.css"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineWhatsapp } from "react-icons/md";

const Footer = () => {

    const footerPart = [
        {
            "title": "Connect with us",
            "subPart": [
                {
                    "text": <div> <MdOutlineEmail className='fs-5 me-1' /> info@orbitjobs.id </div>,
                    "link": "#"
                }, {
                    "text": <div> <MdOutlineWhatsapp className='fs-5 me-1' /> 62 811-1921-8222 </div>,
                    "link": "#"
                }
            ]
        }, {
            "title": "Terms & Conditions",
            "subPart": [
                {
                    "text": "Privacy Policy",
                    "link": "#"
                }, {
                    "text": "About Us",
                    "link": "#"
                }
                , {
                    "text": "FAQ",
                    "link": "#"
                }
            ]
        }, {
            "title": "Blogs",
            "subPart": [
                {
                    "text": "For Jobseekers",
                    "link": "#"
                }, {
                    "text": "For Employees",
                    "link": "#"
                }
            ]
        }
    ]

    return (
        <>
            <div className="container">
                <div className="row py-3 justify-content-center gap-2 gap-sm-0">
                    <div className="col-10 col-sm-6 col-md-3">
                        <div>
                            <img src={require("../Images/Group 15036.png")} alt="" srcset="" />
                        </div>
                        <div>
                            Follow us on
                            <a href="#" className='footer-icon'><FaInstagram className='mx-1 fs-5' /></a>
                            <a href="#" className='footer-icon'><FaLinkedinIn className='mx-1 fs-5' /></a>
                        </div>
                    </div>
                    {
                        footerPart.map((items, index) => {
                            var subData = items.subPart;
                            return (
                                <div className="col-10 col-sm-6 col-md-3" key={index}>
                                    <div className='fw-bold text-secondary'>
                                        {items.title}
                                    </div>
                                    {
                                        subData.map((subItems, subIndex) => {
                                            return (
                                                <div key={subIndex}>
                                                    <a href={subItems.link} className='footer-text-link'>{subItems.text}</a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    <div className="col-12">
                        <div>
                            <div>
                                <hr />
                            </div>
                            <div className='text-center'>
                                ©2022
                                <a href="#" className='px-1 text-decoration-none footer-title-text'>Orbit Jobs</a>
                                All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer