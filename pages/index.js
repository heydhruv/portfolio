// next image
import Image from "next/image";

//Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//Framer
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../variants';

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h1">
            Transforming Ideas <br/> Into{' '}
            <span className="text-accent">&apos;Digital Reality&apos;</span>
          </motion.h1>
          {/* Subtitles */}
          <motion.p
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            I am a passionate developer with a focus on data science, machine learning, deep learning, generative AI, and web development. With a strong background in mathematics, programming, and a deep understanding of algorithms, I bring a unique blend of skills to the table. In my projects, I have leveraged advanced machine learning techniques to solve complex problems, developed deep learning models for image and text processing, and explored the fascinating world of generative AI. My expertise in web development allows me to not only build powerful backend systems but also create intuitive and responsive user interfaces that bring data-driven insights to life. Whether it&apos;s building predictive models, creating AI-powered applications, or crafting engaging web experiences.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn/>
          </div>
          <motion.div variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex">
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg Image */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
          </div>
          {/* particles */}
          <ParticlesContainer/>
          {/* avatar img*/}
          <motion.div 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration:1, ease: 'easeInOut'}}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
            <Avatar/>
          </motion.div>
      </div>
    </div>
  );
};

export default Home;
