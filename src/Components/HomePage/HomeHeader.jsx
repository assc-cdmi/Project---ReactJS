import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./HomeHeader.css"
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'

function HomeHeader() {
    return (
        <>
            <div className="bg-light-primary bg-image-header position-relative" style={{ fontSize: "14px" }}>
                {/* <div className='position-absolute top-0 left-0 w-100'>
                    <img src={require("../../Images/Group 14477.png")} alt="" srcset="" className='w-100' />
                </div> */}
                <div className='position-relative' style={{ zIndex: "1" }}>
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-12 col-sm-8 col-md-7 py-5">
                                <div className="display-5 fw-bold">
                                    Find the perfact jobs for you
                                </div>
                                <div className='py-2 text-secondary'>
                                    Search your career opportunity through 12,800 jobs
                                </div>
                                <div>
                                    <div class="input-group mb-2 searchView rounded d-flex align-items-center">
                                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search by job title, company or keywords" />
                                        <div className="vr mx-2"></div>
                                        <FaMapMarkerAlt className='fs-3' />
                                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Province, city, or region" />
                                        <div class="input-group-prepend ps-2">
                                            <button class="input-group-text p-2 text-white">
                                                <FaSearch />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Popular Searches
                                    </div>
                                    <div className='popularSearch py-4 d-flex flex-wrap'>
                                        <div>
                                            <b>Designer</b>
                                        </div>
                                        <div>
                                            <b>Writer</b>
                                        </div>
                                        <div>
                                            <b>Team Leader</b>
                                        </div>
                                        <div>
                                            <b>Senior</b>
                                        </div>
                                        <div>
                                            <b>Web Designer</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeader