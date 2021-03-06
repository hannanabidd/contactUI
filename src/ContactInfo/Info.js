import React, { Fragment, useEffect } from "react";
import $ from 'jquery';
import ContactCard from '../../src/AmirMiri.vcf';
function Info() {
    function copiedFunction(){
        // let copiedText = document.getElementById("we-chat").textContent
        let weChatNumber = '+6046575030';
        navigator.clipboard.writeText(weChatNumber);
        alert("Copied: " + weChatNumber)
    }
    return(
        <Fragment>
            <div className="box">
                <a href="tel:+1 604 657 5030">
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/call.svg" className="" alt="PhoneNo"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">+1 604 657 5030</p>
                        </div>
                    </div>
                </a>
                <a href="mailto:amir@amirmiri.com">
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/mail.svg" className="" alt="gmail"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">amir@amirmiri.com</p>
                        </div>
                    </div>
                </a>
                <a href="https://amirmiri.com/" target="_blank" rel="noreferrer">
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/website.svg" className="" alt="website"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">www.amirmiri.com</p>
                        </div>
                    </div>
                </a>
                <a href="https://www.instagram.com/amirhomes/" target="_blank" rel="noreferrer">
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/instagram.svg" className="" alt="instagram"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">@amirhomes</p>
                        </div>
                    </div>
                </a>
                <a href="https://api.whatsapp.com/send?phone=16046575030" target="_blank" rel="noreferrer">
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/whatsapp.svg" className="" alt="whatsapp"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">6046575030</p>
                        </div>
                    </div>
                </a>
                <a>
                    <button onClick={copiedFunction} className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/wechat.svg" className="" alt="whatsapp"/>
                        </div>
                        <div className="contact-info">
                            <p id="we-chat" className="info-p">WeChat to: AmirRealtor</p>
                        </div>
                    </button>
                </a>
                
                <a href="https://www.linkedin.com/in/amirmiri/" target="_blank" rel="noreferrer">
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/linkedin.svg" className="" alt="linkedin"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">LinkedIn/Amir Miri</p>
                        </div>
                    </div>
                </a>
                <a href="https://www.youtube.com/channel/UC1dh0t77e2yHQdvM-naOs0w" target="_blank" rel="noreferrer">
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/youtube.svg" className="" alt="youtube"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p">YouTube/Amir Miri</p>
                        </div>
                    </div>
                </a>
                <a href="https://www.google.com/maps/place/1200+W+73rd+Ave+%23100,+Vancouver,+BC+V6P+6G5,+Canada/@49.2040785,-123.1332686,17z/data=!3m1!4b1!4m5!3m4!1s0x548674e9462aae17:0x7c51aa4d938e201b!8m2!3d49.2040785!4d-123.1332686" target="_blank" rel="noreferrer">
                    <div className="rounded-box">
                        <div className="icon-img">
                                <img src="/images/location.svg" className="" alt="address"/>
                        </div>
                        <div className="contact-info">
                            <p className="info-p special-text">#100-1200 West 73rd Avenue, Vancouver,  BC V6P 6G5</p>
                        </div>
                    </div>
                </a>
                <div className="button-row sticky-btn">
                <a href={ContactCard} download="ContactCard" className="contact-btn">Save Contact</a> 
                </div>               
            </div>
        </Fragment>
    )
}

export default Info;