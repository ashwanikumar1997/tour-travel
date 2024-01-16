/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:52:08
 * @modify date 2019-09-03 10:52:08
 * @desc [description]
 */
import React, { Component } from 'react';
import '../assets/css/landing.css';
import Banner from './home/banner';
import TestimonialsSection from './home/testimonialssection';
import PoweredBy from './home/poweredby';
import bannerimage from '../assets/images/contact.jpg'
class Contact extends Component {
    render() {
        var banner = {
            name: "Contact Us",
            image: bannerimage
        };
        return (
            <>
            <Banner props={banner} />
            <div className="ppb_wrapper hasbg ">
                <PoweredBy />
            </div >
            </>
        )
    }
}
export default Contact;
