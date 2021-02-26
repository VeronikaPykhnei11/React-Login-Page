import React from "react";
import Icon1 from "../../assets/images/Saly-12.svg";
import Icon2 from "../../assets/images/Saly-12 (1).svg";
import FooterImage from "../../assets/images/footer-image-login.png";
import PhoneFooter from "../../assets/images/phone-footer-image.png";
import FooterItem2 from "../../assets/images/phone-icon-1.png";
import FooterItem1 from "../../assets/images/phone-icon-2.png";
import FooterItem3 from "../../assets/images/phone-icon-3.png";
import FooterItem4 from "../../assets/images/phone-item-2.png";
import FooterItem5 from "../../assets/images/phone-item-4.png";

export default function PictureForScreenMaker() {
    return (
        <>
            <img className={'icon1'} src={Icon1} alt="icon"/>
            <img className={'icon2'} src={Icon2} alt="icon"/>
            <img className={"footer"} src={FooterImage} alt="icon"/>
            <img className={"phone-footer"} src={PhoneFooter} alt="icon"/>
            <img className={"phone-footer-first-item"} src={FooterItem2} alt="icon"/>
            <img className={"phone-footer-second-item"} src={FooterItem1} alt="icon"/>
            <img className={"phone-footer-third-item"} src={FooterItem3} alt="icon"/>
            <img className={"phone-footer-fourth-item"} src={FooterItem4} alt="icon"/>
            <img className={"phone-footer-fifth-item"} src={FooterItem5} alt="icon"/>
        </>
    )
}