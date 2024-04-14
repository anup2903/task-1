import React from 'react'
import pizza from "../images/pizza.png"
import land from "../images/land.png"
import vector from "../images/vectorRight.png"
import Navbar from './Navbar'
import logo from '../images/logo.png'
import Landing2 from './Landing2'
import Footer from './Footer'
const Landing = () => {
  return (
    <div className="full">
      <div className="flex flex-col  relative">
        <Navbar className="top-20" />
        <div className="flex relative land1">
          <div className="w-[50%] land1-left">
            <div className="mt-[14rem] ml-[100px] w-[22rem] land1-left-div">
              <h1 className="text-6xl font-bold text-[#0E2368] head">
                Discover the <span className="text-[#E23744]">Best</span> Food
                and Drinks
              </h1>
              <h2 className="mt-10 text-[#444957]">
                Naturally made Healthcare Products for the better care & support
                of your body.
              </h2>
              <button className="rounded-3xl p-3 bg-[#E23744] text-white mt-10 font-bold">
                Explore Now!
              </button>
            </div>
          </div>
          <div className="w-[50%] relative land1-right">
            <img src={pizza} className="h-[80%] w-full top-0" />
            <img src={vector} className="absolute top-0 h-[84%] w-full " />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#1E2A5D0A]">
        <div className="w-[50%] relative justify-center items-center img-div" >
          <img
            src={land}
            className="w-[384px] h-[468px] flex items-center mx-auto img-div"
          />
        </div>

        <div className="w-[50%] relative about">
          <h1 className="text-5xl font-sans text-[#0E2368] font-bold">
            About Us
          </h1>
          <h2 className="w-[50%] my-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </h2>
          <button className="rounded-3xl p-3 px-4 font-semibold bg-[#E23744] text-white">
            Read More
          </button>
        </div>
      </div>
      <Landing2/>
      <Footer/>
    </div>
  );
}

export default Landing