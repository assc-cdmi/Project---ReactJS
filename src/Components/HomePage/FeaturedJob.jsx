import React from 'react'
import { FaAngleRight, FaMapMarkerAlt, FaRegHeart, FaStar } from "react-icons/fa";
import { GiHandBag } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css"
import "./FeaturedJob.css"

function FeaturedJob() {
    const FindBestCompanies = [
        {
            image: "Group 14210-7.png",
            title: "Pegipegi",
            rating: "4.9",
            reviews: "50",
            link: "#"
        }, {
            image: "Group 14210-4.png",
            title: "Kampas Group",
            rating: "4.9",
            reviews: "50",
            link: "#"
        }, {
            image: "Group 14210-5.png",
            title: "Group Avows",
            rating: "4.9",
            reviews: "50",
            link: "#"
        }, {
            image: "Group 14210-6.png",
            title: "Lalamove",
            rating: "4.9",
            reviews: "50",
            link: "#"
        }, {
            image: "Group 14210.png",
            title: "Whiz (YC W22)",
            rating: "4.9",
            reviews: "50",
            link: "#"
        }, {
            image: "Group 14210-1.png",
            title: "JULO",
            rating: "4.9",
            reviews: "50",
            link: "#"
        }, {
            image: "Group 14210-3.png",
            title: "UOB",
            rating: "4.9",
            reviews: "50",
            link: "#"
        }, {
            image: "Group 14210-2.png",
            title: "Logisly",
            rating: "4.9",
            reviews: "50",
            link: "#"
        }
    ];
    return (
        <>
            <div className="bg-light-primary">
                <div className="container">
                    <div className="row py-5 align-items-top justify-content-center">
                        <div className="col-12">
                            <div className="h3 fw-bold">
                                Featured Job Offers
                            </div>
                        </div>
                        {
                            FindBestCompanies.map((items, index) => {
                                return (
                                    <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-0" key={index} style={{ fontSize: "12px" }}>
                                        <div className='p-2'>
                                            <a href={items.link} className='text-decoration-none FeaturedJobOffer'>
                                                <div className='position-relative'>
                                                    <div className="card p-2">
                                                        <div className="row m-0">
                                                            <div className="col-2 p-0 d-flex align-items-center">
                                                                <img src={require(`../../Images/${items.image}`)} alt="" srcset="" className='w-100' />
                                                            </div>
                                                            <div className="col-9">
                                                                <div>
                                                                    <div className="fw-bold" style={{ fontSize: "14px" }}>
                                                                        {items.title}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-1 p-0 d-flex justify-content-center align-items-center">
                                                                <FaRegHeart className='fs-5' />
                                                            </div>
                                                            <div className="col-12 p-0 mt-1">
                                                                <div className="row m-0 d-flex align-items-center">
                                                                    <div className="col-5 p-0 text-truncate">
                                                                        {items.title}
                                                                    </div>
                                                                    <div className="col-7 p-0">
                                                                        <div className='d-flex gap-1 text-small'>
                                                                            <FaStar className='text-warning' /> {items.rating}
                                                                            <div class="vr"></div>
                                                                            {items.reviews}+ reviews
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 p-0 mt-2 d-flex justify-content-between">
                                                                <div>
                                                                    <GiHandBag className='mx-1' /> Fresher
                                                                    <FaMapMarkerAlt className='mx-1' /> Jakatnaka
                                                                </div>
                                                                <div>
                                                                    23 hours ago
                                                                </div>
                                                            </div>
                                                            <div className="col-12 p-0 mt-2 d-flex justify-content-between">
                                                                <ul>
                                                                    <li>
                                                                        Tech Rookie Internship Program (TRIP) - Data Analyst Intern
                                                                    </li>
                                                                    <li>
                                                                        Internship
                                                                    </li>
                                                                    <li>
                                                                        Hybrid
                                                                    </li>
                                                                    <li>
                                                                        Tech Rookie Internship Program (TRIP) - Data Analyst Intern
                                                                    </li>
                                                                    <li>
                                                                        Internship
                                                                    </li>
                                                                    <li>
                                                                        Hybrid
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <hr />
                                                            <div className="col-12">
                                                                SQL • Tableau • Python • Attention To Detail • Critical Thinking
                                                            </div>
                                                            <div className="col-12 p-0 mt-2">
                                                                <button className="btn btn-primary w-100">
                                                                    Apply Now
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="col-12 p-2 mt-2">
                            <button className="btn btn-primary">
                                All Job Offers <FaAngleRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedJob