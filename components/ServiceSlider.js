// swiper react component

import { Swiper, SwiperSlide} from 'swiper/react';

//import Swiper styles

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  RxCrop,
  RxCode,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowBottomRight,
  RxArrowTopRight
} from 'react-icons/rx'
import { TbApiApp } from "react-icons/tb";
import { SiSimpleanalytics } from "react-icons/si";

// required modules
import { FreeMode,Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Generative AI',
    description: 'Specialized Applications Based On Next generation LLms.',
  },
  {
    icon: <RxCode />,
    title: 'Development',
    description: 'End To End Project Development for Real Business Problems.',
  },
  {
    icon: <TbApiApp />,
    title: 'API',
    description: 'Custom Backend API Development Leveraging Python Frameworks.',
  },
  {
    icon: <SiSimpleanalytics />,
    title: 'Analytics',
    description: 'Analytics Dashboards for actionable insights that drive business growth.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320:{
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640:{
          slidesPerView:3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item,index)=>{
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                {/* icons */}
                <div className='text-4xl text-accent mb-4 '>{item.icon}</div>
                {/* title & Desc*/}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>
                {/* arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
