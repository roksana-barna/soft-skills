import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import visa from '../../assets/Visa Payment method icon S.png'
import middle from '../../assets/MC Payment method icon S.png'


const Footer = () => {
    return (
        <footer className="  text-slate-400 bg-gray-950 mt-20 py-8">
            <div className="max-w-screen-xl mx-auto flex flex-wrap justify-evenly bg-gray-950 p-10 ">
                <div className="flex flex-col">
                    <img className='w-14 h-14' src={logo} alt="" />
                </div>
                <div className="flex flex-col">
                    <h4 className="text-lg font-bold mb-4">Useful Links</h4>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Use Cases</a>
                    <a href="#">Pricing</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Unsubscribe</a>
                </div>
                <div className="flex flex-col">
                </div>
                <div className="flex flex-col">
                    <h4 className="text-lg font-bold mb-4">Contact Information</h4>
                    <a href="#">Email: support@budgetbscope.com</a>
                    <a href="#">Phone: +44 123456789</a>
                    <a href="#">Working Hours: Monday - Friday 00-24 (CET),<br /> Weekends 9:00 - 17:00 (CET)</a>
                    <a href="#">Address: 21 cromwell road, ringsfield, suffolk,<br />  Beccles Nr34 8lr, United Kingdom</a>
                </div>
            </div>
            <div className='flex justify-center gap-2 mt-4'>
                <img  className='w-20 h-12'src={visa} alt="" />
                <img className='w-20 h-12'src={middle} alt="" />
            </div>
            <div className='flex mt-8 justify-between'>
                <p className='bg-black p-8'>Copyright © Budgetbscope 2023. Blindscope limited - CR: 14031689 - 21 cromwell road, ringsfield, suffolk, Beccles Nr34 8lr, United Kingdom | All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;