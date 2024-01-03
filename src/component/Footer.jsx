import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='bg fixed-bottom' style={{ height: "45px" }}>
                <div className='d-flex' style={{ paddingTop: "5px" }}>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <span class="material-symbols-outlined fbtn">home</span>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <span class="material-symbols-outlined fbtn">volunteer_activism</span>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <span class="material-symbols-outlined fbtn">home</span>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }} ><img style={{borderRadius:"100px", width:"25px", height:"25px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIHE_ezwcKdve49nsdjwHoi11Py5v9H0wyQ&usqp=CAU" alt="" /></div>
                </div>
            </div >
        </>
    )
}