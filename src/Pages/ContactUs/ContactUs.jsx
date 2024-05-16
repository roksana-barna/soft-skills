import React from 'react';

const ContactUs = () => {
    return (
        <div className='lg:flex justify-evenly'>
            <div className='bg-black text-white'>
                <h2 className='uppercase text-white text-center font-semibold text-xl pt-16 pb-4'>Get  <span className=' text-white font-thin lowercase mt-2 italic'>in </span> touch</h2>
                <p className='pb-10 ml-4'>Our team is here to assist.</p>
                <div className='text-center'>
                    <form>
                        <label>First Name</label><br />
                        <input className='h-12 w-96 rounded-xl bg-white p-2' type="text" placeholder='your first name...' name="from_name" /><br />
                        <label>Last Name</label><br />
                        <input className='h-12 w-96 rounded-xl bg-white p-2' type="text" placeholder='your last name...' name="from_name" /><br />
                        <label>Email</label><br />
                        <input className=' h-12 w-96 rounded-xl bg-white p-2' type="email" placeholder='your Email...' name="from_email" /><br />
                        <label>Phone Number</label><br />
                        <input className=' h-12 w-96 rounded-xl bg-white p-2' type="number" placeholder='your number...' name="from_email" /><br />
                        <label>Message</label><br />
                        <textarea className='h-20 w-96 rounded-xl bg-white p-2' placeholder='message' name="message" /><br />

                        <input className="border-gradient inline-block text-md mt-8 mb-4  font-thin text-white  px-10  btn border rounded-full transition duration-300 " type="submit" value="Send" />
                    </form>
                </div>
            </div>

            <div className='lg:mt-36 text-white bg-slate-700 p-10 rounded-xl'>
                <p>Email</p>
                <p>support@budgetbscope.com</p>
                <p>Phone</p>
                <p>(+01) 212423434</p>
                <p>Working Hours</p>
                <p>Monday - Friday 00-24 (CET),<br /> Weekends 9:00 - 17:00 (CET)</p>
                <p>Address</p>
                <p>21 cromwell road, ringsfield,<br /> suffolk, Beccles Nr34 8lr,
                    United Kingdom</p>
                <p>Business Number</p>
                <p>39205750528530</p>
                <p>VAT</p>
                <p>93493892</p>
            </div>
        </div>
    );
};

export default ContactUs;