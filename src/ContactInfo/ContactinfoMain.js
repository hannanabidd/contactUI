import React from "react";
import Banner from "./Banner";
import Info from "./Info";

function ContactinfoMain(){
    return(
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4 special-padding">
                    <div className="main-box">
                        <Banner />
                        <Info/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContactinfoMain;