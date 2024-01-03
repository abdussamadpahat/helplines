import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg fixed-top shadow">
                <div className="container-fluid">
                    <div>
                        <img style={{borderRadius:"100px", width:"45px", height:"45px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIHE_ezwcKdve49nsdjwHoi11Py5v9H0wyQ&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <p className='textc' style={{paddingTop:"15px", fontWeight:"800"}}>HelpLine</p>
                    </div>
                    <button className="togler bg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon text-light"></span> */}
                        <span class="material-symbols-outlined textc">menu</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                        <div className="navbar-nav">
                            <a className="pages textc" href="#">Home</a>
                            <a className="pages textc" href="#">Features</a>
                            <a className="pages textc" href="#">Pricing</a>
                            <a className="pages textc" href="#">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}