import React, { Fragment } from "react";
import {Link} from 'react-router-dom'
function Info() {
    return(
        <Fragment>
            <div className="box">
                <Link>
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/Group 4.svg" className="" alt="PhoneNo"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">+1 604 657 5030</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/Group 5.svg" className="" alt="gmail"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">amir@amirmiri.com</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/Group 6.svg" className="" alt="gmail"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">www.amirmiri.com</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/Group 7.svg" className="" alt="gmail"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">@amirhomes</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/Group 8.svg" className="" alt="whatsapp"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">6046575030</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/Group 9.svg" className="" alt="whatsapp"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">+6046575030</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/Group 10.svg" className="" alt="linkedin"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">LinkedIn/Amir Miri</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/Group 11.svg" className="" alt="youtube"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">YouTube/Amir Miri</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/Group 12.svg" className="" alt="address"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">#100-1200 West 73rd Avenue, Vancouver,  BC V6P 6G5</p>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

export default Info;