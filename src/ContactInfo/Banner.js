import React, { Fragment } from "react";


function Banner (){
    return(
        <Fragment>
            <img src="/images/main-img.png" className="profile-img" alt="" />
                            <h1 className="banner-heading padding-lr">Amir Miri</h1>
                            <p className="banner-p padding-lr">Realtor</p>
                            <p className="banner-p padding-lr">Amir Miri PREC*</p>
                            <p className="banner-p1">Sincerity, Integrity, Reputation</p>
        </Fragment>
    )
}

export default Banner;