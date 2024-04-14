import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter  } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import food1 from '../images/food1.png'
import food2 from '../images/food2.png'
import food3 from '../images/food3.png'
import food4 from '../images/food4.png'
import food5 from '../images/food5.png'
import food6 from '../images/food6.png'
import right1 from '../images/right.png'
import right2 from '../images/rightClose.png'
import left1 from '../images/left.png'
import left2 from '../images/leftopen.png'
import one from '../images/2.jpg'
import two from '../images/2.png'

const Landing2 = () => {
    const [right,setRight] =useState(false)
    const [left,setLeft] =useState(true)

    const clickRight = ()=>{
        if(!right){
            setLeft(false)
            setRight(true)
        }
            

    }
    const clickLeft = ()=>{
        if(!left){
            setRight(false)
            setLeft(true)
        }
            
    }
  return (
    <div>
      <div className="text-4xl text-[#0E2368] ml-16 my-16 mt-20 landing2">
        Latest Articles
      </div>
      {left && (
        <div className="flex justify-around w-full land2">
          <div className=" w-[25%] rounded-2xl border-[#93A2D361] border-solid border-2 relative flex p-6">
            <div className="  flex flex-col justify-center ">
              <img
                src={food1}
                alt="Green double couch with wooden legs"
                className=""
                // borderRadius="lg"
              />
              <h1 className="text-2xl font-bold my-4 text-[#0E2368]">
                Grilled Tomatoes at Home
              </h1>
              <h1 className="text-[#444957]">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </h1>
              <button className="my-4 rounded-3xl  flex w-[8rem] items-center justify-center border-[#424961] text-[#424961] border-solid p-2 border-2 ">
                Read More
              </button>
            </div>
            <div />
          </div>
          <div className=" w-[25%] rounded-2xl border-[#93A2D361] border-solid border-2 relative flex p-6">
            <div className="  flex flex-col justify-center ">
              <img src={food2} alt="Green double couch with wooden legs" />
              <h1 className="text-2xl font-bold my-4 text-[#0E2368]">
                Snacks for Travel
              </h1>
              <h1 className="text-[#444957]">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </h1>
              <button className="my-4 rounded-3xl  flex w-[8rem] items-center justify-center border-[#424961] text-[#424961] border-solid p-2 border-2 ">
                Read More
              </button>
            </div>
            <div />
          </div>
          <div className=" w-[25%] rounded-2xl border-[#93A2D361] border-solid border-2 relative flex p-6">
            <div className="  flex flex-col justify-center ">
              <img
                src={food3}
                alt="Green double couch with wooden legs"
                className=""
                // borderRadius="lg"
              />
              <h1 className="text-2xl font-bold my-4 text-[#0E2368]">
                Post-workout Recipes
              </h1>
              <h1 className="text-[#444957]">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </h1>
              <button className="my-4 rounded-3xl  flex w-[8rem] items-center justify-center border-[#424961] text-[#424961] border-solid p-2 border-2 ">
                Read More
              </button>
            </div>
            <div />
          </div>
        </div>
      )}
      {right && (
        <div className="flex justify-around w-full land2">
          <div className=" w-[25%] rounded-2xl border-[#93A2D361] border-solid border-2 relative flex p-6">
            <div className="  flex flex-col justify-center ">
              <img
                src={food4}
                alt="Green double couch with wooden legs"
                className=""
                // borderRadius="lg"
              />
              <h1 className="text-2xl font-bold my-4 text-[#0E2368]">
                How To Grill Corn
              </h1>
              <h1 className="text-[#444957]">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </h1>
              <button className="my-4 rounded-3xl  flex w-[8rem] items-center justify-center border-[#424961] text-[#424961] border-solid p-2 border-2 ">
                Read More
              </button>
            </div>
            <div />
          </div>
          <div className=" w-[25%] rounded-2xl border-[#93A2D361] border-solid border-2 relative flex p-6">
            <div className="  flex flex-col justify-center ">
              <img src={food5} alt="Green double couch with wooden legs" />
              <h1 className="text-2xl font-bold my-4 text-[#0E2368]">
                Crunchwrap Supreme
              </h1>
              <h1 className="text-[#444957]">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </h1>
              <button className="my-4 rounded-3xl  flex w-[8rem] items-center justify-center border-[#424961] text-[#424961] border-solid p-2 border-2 ">
                Read More
              </button>
            </div>
            <div />
          </div>
          <div className=" w-[25%] rounded-2xl border-[#93A2D361] border-solid border-2 relative flex p-6">
            <div className="  flex flex-col justify-center ">
              <img
                src={food6}
                alt="Green double couch with wooden legs"
                className=""
                // borderRadius="lg"
              />
              <h1 className="text-2xl font-bold my-4 text-[#0E2368]">
                Broccoli Cheese Soup
              </h1>
              <h1 className="text-[#444957]">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </h1>
              <button className="my-4 rounded-3xl  flex w-[8rem] items-center justify-center border-[#424961] text-[#424961] border-solid p-2 border-2 ">
                Read More
              </button>
            </div>
            <div />
          </div>
        </div>
      )}
      <div className="my-14 flex items-center justify-center control">
        {left && (
          <div className="flex w-[3rem] justify-around gap-3">
            <img src={left1} alt="" />
            {/* <img src={one} alt="" /> */}
            <h1 className="text-xl text-[#424961]">1/2</h1>
            <img
              src={right1}
              alt=""
              onClick={clickRight}
              className="cursor-pointer"
            />
          </div>
        )}
        {right && (
          <div className="flex w-[3rem] justify-around gap-3 ">
            <img
              src={left2}
              alt=""
              onClick={clickLeft}
              className="cursor-pointer"
            />
            {/* <img src={one} alt="" /> */}
            <h1 className="text-xl text-[#424961] ">2/2</h1>
            <img src={right2} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing2