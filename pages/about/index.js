import React,{useState} from 'react';
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  BiLogoPostgresql
} from 'react-icons/bi';

import { RiOpenaiFill } from "react-icons/ri";
import { DiMysql,DiLinux } from "react-icons/di";

import {
  SiDjango,
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiTailwindcss,
  SiFlask,
  SiMongodb,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Machine Learning',
        icons: [
          <FaPython key="python"/>,
          <SiDjango key="django" />,
          <SiTensorflow key="tensorflow" />,
          <SiPytorch key="pytorch" />,
          <SiOpencv key="opencv" />,
          <RiOpenaiFill key="openai" />,
        ],
      },
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <SiTailwindcss key="tailwindcss" />,
          <FaReact key="react" />,
          <FaJs key="js" />,
          <SiFlask key="flask" />,
          <BiLogoPostgresql key="postgresql" />,
          <DiMysql key="mysql" />,
          <SiMongodb key="mongodb" />,
        ],
      },
      {
        title: 'Tools',
        icons: [
          <DiLinux key="linux" />,
          <FaGitAlt key="git" />,
          <FaDocker key="docker" />,
        ],
      },
    ],
  },
  
  {
    title: 'experience',
    info: [
      {
        title: 'Software Developer - Odoo',
        stage: '2023 - Present',
      },
      {
        title: 'AI Intern - Tusker.AI',
        stage: '2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Data Science - IBM',
        stage: '2022',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

//counter
import CountUp from 'react-countup';

const About = () => {
  const [Index,setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles/>
      <motion.div
        variants={fadeIn('right',0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar/>
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex gap-x-6'>
          {/* text */}
          <div className='flex-1 flex flex-col justify-center'>
            <motion.h2
              variants={fadeIn('right',0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2'>
              Challenging <span className='text-accent'>Problems</span> Birth Magnificent Solutions.
            </motion.h2>
            <motion.p
              className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
              variants={fadeIn('right',0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              Future of software development is AI-powered solutions, where cutting-edge technology meets intelligent innovation to elevate your applications to new heights.
            </motion.p>
            {/* counters */}
            <motion.div
              className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 '
              variants={fadeIn('right',0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
            >
              <div className='flex flex-1 xl:gap-x-6'>
                {/* experience */}
                <div className='relative flex-1 after:-w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={1} duration={5}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>Years of Experience</div>
                </div>
                {/* clients */}
                <div className='relative flex-1 after:-w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={2} duration={5}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>Satisfied Clients</div>
                </div>
                {/* projects */}
                <div className='relative flex-1 after:-w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={5} duration={5}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>Finished Projects</div>
                </div>
                {/* awards */}
              </div>
            </motion.div>
          </div>
          {/* info */}
          <motion.div
            variants={fadeIn('right',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
            <div className='flex gap-x-4 xl:gap-x-8 max-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => {
                return <div key={itemIndex} className = {`${Index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration:300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              })}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
              {aboutData[Index].info.map((item,itemIndex) => {
                return (
                  <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                    {/* title */}
                    <div>{item.title}</div>
                    <div className="hidden md:flex">~</div>
                    <div>{item.stage}</div>
                      <div className='flex gap-x-4'>
                        {/* icons */}
                        {item.icons?.map((icon, itemIcon) => {
                          return (
                            <div key={itemIcon} className='text-2xl'>
                              {icon}
                            </div>
                          );
                        })}
                      </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
      </div>
    </div>
  );
};

export default About;
