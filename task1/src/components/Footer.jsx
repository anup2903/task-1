import React from 'react'
import logo from '../images/logo.png'
import fb from '../images/facebook.png'
import insta from '../images/insta.png'
import twitter from '../images/twitter.png'
import footer from '../images/footer.png'
const Footer = () => {
  return (
    <div className="flex justify-around py-16 text-[#646874] bg-[#F8F8F8] footer">
      <div className='flex items-center log'>
        <img src={logo} />
      </div>
      <div className="w-[232px] flex flex-col gap-4 contact">
        <h1 className="text-[#0E2368] font-semibold">Contact Us</h1>
        <h1>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </h1>
        <h1>example2020@gmail.com</h1>
        <h1>(904) 443-0343</h1>
      </div>
      <div className="flex flex-col gap-4 more">
        <h1 className="text-[#0E2368] font-semibold">More</h1>
        <h1>About Us</h1>
        <h1>Products</h1>
        <h1>Career</h1>
        <h1>Contact Us</h1>
      </div>
      <div className='link'>
        <h1 className="text-[#0E2368] font-semibold">Social Links</h1>
        <div className="flex ">
          <img src={insta} className='object-contain' />
          <img src={twitter} className='object-contain'/>
          <img src={fb} className='object-contain'/>
        </div>
        <img src={footer} className='mt-16'/>
      </div>
    </div>
  );
}

export default Footer