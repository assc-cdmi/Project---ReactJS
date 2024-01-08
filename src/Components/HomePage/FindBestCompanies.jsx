import React from 'react'
import { FaAngleRight, FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"
import "./FindBestCompanies.css"

function FindBestCompanies() {
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
            image: "Group 14210-2.png",
            title: "PT Midas Daya Teknologi",
            rating: "4.9",
            reviews: "50",
            link: "#"
        }, {
            image: "Group 14210-6.png",
            title: "Siemens",
            rating: "4.9",
            reviews: "50",
            link: "#"
        }, {
            image: "Group 14210.png",
            title: "eFishery",
            rating: "4.9",
            reviews: "50",
            link: "#"
        }, {
            image: "Group 14210-7.png",
            title: "Cermati",
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
            <div className="container">
                <div className="row py-5 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="h3 fw-bold">
                            Find Best Companies
                        </div>
                    </div>
                    {
                        FindBestCompanies.map((items, index) => {
                            return (
                                <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-0" key={index}>
                                    <div className='p-2'>
                                        <a href={items.link} className='companiesCard'>
                                            <div className="card border p-2">
                                                <div className="row m-0">
                                                    <div className="col-2 p-0 d-flex align-items-center">
                                                        <img src={require(`../../Images/${items.image}`)} alt="" srcset="" className='w-100' />
                                                    </div>
                                                    <div className="col-9">
                                                        <div>
                                                            <div className="fw-bold text-nowrap text-truncate" style={{ fontSize: "14px" }}>
                                                                {items.title}
                                                            </div>
                                                            <div className='d-flex gap-1 mt-2 text-small'>
                                                                <FaStar className='text-warning' /> {items.rating}
                                                                <div class="vr"></div>
                                                                {items.reviews}+ reviews
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-1 p-0 d-flex justify-content-center align-items-center">
                                                        <FaAngleRight className='fs-4 right-arrow' />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FindBestCompanies