import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}

const Resume = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}>
      <section className="text-xs lg:text-lg text-gray-600 body-font h-screen max-w-7xl px-10 justify-evenly mx-auto items-center">

        <div className='relative pt-[7rem] text-center' >
          <h3 className='text-lg lg:text-2xl mx-auto text-tale-dark font-bold text-black'>
            Resume
            <hr className='w-10 h-1 mx-auto lg:my-2 bg-teal-first border-0 rounded' />
          </h3>
        </div>

        <div className="container flex flex-wrap px-5 pt-[2rem] lg:pt-[4rem] mx-auto">

          <div className="md:w-1/2 md:pr-12 pb-0 md:py-8 mb-6 lg:mb-10 md:mb-0 lg:pb-10">
            <img className='w-10 mr-5 float-left' src='/card.svg' alt='card' width={40} />
            <p className='text-xs lg:text-xl leading-7 text-center mt-2 font-bold uppercase text-gray-700 float-left'>Experience</p>
            <hr className='w-[12rem] h-0.5 mt-[2.8rem] lg:mt-[3.2rem] ml-2 mr-20 bg-gray-100 border-0 rounded' />

            <h3 className='text-xs lg:text-lg font-semibold tracking-wide mt-6 lg:mt-12'>Dell Technologies</h3>
            <time className='text-xs lg:text-sm tracking-wide uppercase dark:text-gray-400'>Sep 2018 - Present</time>
            <p className='mt-3'>As a Technical Sales Representative at Dell Technologies,
              I am responsible for the sale of Data Center solutions to Key Account customers in Argentina.
            </p>

            <h3 className='text-xs lg:text-lg font-semibold tracking-wide mt-4 lg:mt-8'>Freelance Web Developer</h3>
            <time className='text-xs lg:text-sm tracking-wide uppercase dark:text-gray-400'>Jul 2022 - Nov 2022</time>
            <p className='mt-3'>Involved in the development of an E-commerce platform for the sales of ophthalmological supplies,
              providing my expertise and contributions to the project.</p>
          </div>

          <div className="md:w-1/2 md:pr-12 pt-0 md:py-8">
            <img className='w-10 mr-5 float-left' src='/cap.svg' alt='cap' width={40} />
            <p className='text-xs lg:text-xl leading-7 text-center mt-2 font-bold uppercase text-gray-700 float-left'>Education</p>
            <hr className='w-[12rem] h-0.5 mt-[2.8rem] lg:mt-[3.2rem] ml-2 mr-20 bg-gray-100 border-0 rounded' />

            <h3 className='text-xs lg:text-lg font-semibold tracking-wide mt-6 lg:mt-12'>Full Stack Developer</h3>
            <time className='text-xs lg:text-sm tracking-wide uppercase dark:text-gray-400'>Jun 2022 - Jan 2023</time>
            <p className='mt-3'>Completed a 8-month intensive coding bootcamp, gaining proficiency in <strong>JavaScript</strong>,
              <strong> CSS</strong>, <strong>NodeJS</strong>, <strong>SQL</strong>, <strong>React</strong>, and other crucial technologies for front-end and back-end development.
            </p>

            <h3 className='text-xs lg:text-lg font-semibold tracking-wide mt-8'>Systems Engineer</h3>
            <time className='text-xs lg:text-sm tracking-wide uppercase dark:text-gray-400'>Jul 2011 - Dec 2018</time>
            <p className='mt-3'>Master's Degree from Universidad Tecnológica Nacional.</p>

          </div>

        </div>
      </section>
    </motion.div >
  )
}

export default Resume