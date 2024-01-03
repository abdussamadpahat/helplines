import React from 'react'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'


export default function Donation() {
    let navigate = useNavigate()


    function highest(){
        navigate("/donationhighest")
    }
    function lowest(){
        navigate("/donationlowest")
    }
    return (
        <>
            <div className='bg sticky-top text-center' style={{ width: "100%", height: "30px" }}>
                <p className='textc' style={{fontSize:"13px", fontWeight:"600", paddingTop:"10px"}}>Donation Details</p>
            </div>
            <div className='bg2 d-grid' style={{ marginBottom: "40px", paddingBottom: "70px" }}>
                <div className="col-xs-12 col-sm-6 col-lg-4 cards ">
                    <div className="">
                        <div className="">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpG3qaDWA48f9bEbdAvVkkn3ZSqVr4WWV1Q&usqp=CAU" alt="" style={{ width: "100%", height: "160px", borderRadius: "15px" }} />
                        </div>
                        <div className='d-flex mt-4' style={{height:"25px"}}>
                            <p className='dbtn' style={{fontWeight:"700", color:"rgb(54, 54, 54)"}}>Recent</p>
                            <p onClick={highest} className='text dbtn'>Highest</p>
                            <p onClick={lowest} className='text dbtn'>Lowest</p>
                        </div>
                        <div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                            <div className='d-flex donationTable'>
                                <p className='donationTableNumber'>1</p>
                                <p className='donationTableName'>Abdussamad khan</p>
                                <p className='donationTableAmmount'>2000</p>
                            </div>
                        </div>
                        <div className='text-center text'>
                            <p style={{fontWeight:"600",fontSize:"10px", paddingTop:"20px"}}>You will added after donate some ammount</p>
                        </div>
                    </div>
                </div>
                <a href="#" style={{ textAlign: "center", marginTop: "50px" }}><span style={{ fontSize: "33px", color: " rgb(240, 110, 50)", cursor: "pointer" }} class="material-symbols-outlined">arrow_circle_up</span></a>
            </div>

            {/* ----------------- Footer Section----------------- */}

            <div className='bg2 fixed-bottom' style={{ height: "45px", borderTop:"1px solid rgb(182, 181, 181)" }}>
                <div className='d-flex' style={{ paddingTop: "5px" }}>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <Link to="/"><span class="material-symbols-outlined fbtn" style={{fontSize:"24px"}}>home</span></Link>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <Link to="/donation"><span class="material-symbols-outlined fbtn" style={{ fontWeight: "300", fontSize: "25px" }}>volunteer_activism</span></Link>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <Link to=""><span class="material-symbols-outlined fbtn" style={{ paddingTop: "4px"}}>sms</span></Link>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }} ><Link to=""><img style={{ borderRadius: "100px", width: "25px", height: "25px", cursor: "pointer" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIHE_ezwcKdve49nsdjwHoi11Py5v9H0wyQ&usqp=CAU" alt="" /></Link></div>
                </div>
            </div >
        </>
    )
}
