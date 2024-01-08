import React from 'react'
import { FaAngleRight, FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"
import "./FindBestCompanies.css"

function SearchByCatagory() {
    const FindBestCompanies = [
        {
            image: "insights_FILL0_wght300_GRAD0_opsz48.svg",
            title: "Business Develpement",
            post: 2,
            link: "#"
        }, {
            image: "Group 14155.svg",
            title: "Desiging",
            post: 3,
            link: "#"
        }, {
            image: "Group 14159.svg",
            title: "Developement",
            post: 3,
            link: "#"
        }, {
            image: "c4.svg",
            title: "Content Writer",
            post: 3,
            link: "#"
        }, {
            image: "c4.svg",
            title: "Content Writer",
            post: 3,
            link: "#"
        }, {
            image: "Group 14159.svg",
            title: "Develpement",
            post: 3,
            link: "#"
        }, {
            image: "insights_FILL0_wght300_GRAD0_opsz48.svg",
            title: "Business Develpement",
            post: 2,
            link: "#"
        }, {
            image: "Group 14155.svg",
            title: "Desiging",
            post: 3,
            link: "#"
        }
    ];
    return (
        <>
            <div className="container">
                <div className="row py-5 align-items-center justify-content-center">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <div className="h3 fw-bold">
                            Search by Catagory
                        </div>
                        <div className="h6 see-all-catagories">
                            <a href="#" className='text-decoration-none'>All Catagories
                                <FaAngleRight className='fs-4 right-arrow' />
                            </a>
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
                                                                {items.post} Openings
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

export default SearchByCatagory