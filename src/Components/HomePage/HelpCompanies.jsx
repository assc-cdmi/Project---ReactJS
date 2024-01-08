import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function HelpCompanies() {
    const compliesLogo = [
        "aws_logo.png",
        "indiv_logo.png",
        "sekolah_logo.png",
        "imag_34.png",
        "arjuna_logo (1).png"
    ]
    return (
        <>
            <div className="container">
                <div className="row py-2 justify-content-center">
                    <div className="col-12 py-2">
                        <div className='text-center fw-bold'>
                            We've helped
                            <a href="#" className='px-1 text-decoration-none footer-title-text'>2000+</a>
                            world's best companies
                        </div>
                    </div>
                    {
                        compliesLogo.map((items, index) => {
                            return (
                                <div className="col-8 col-sm-6 col-md-3 col-lg-2 d-flex align-items-center" key={index}>
                                    <img src={require(`../../Images/${items}`)} alt="" srcset="" className='w-100 p-3' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default HelpCompanies