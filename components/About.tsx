import { motion } from 'framer-motion';
import Image from 'next/image';
import woman from '../public/woman.png';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='flex flex-col mb-4 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

      <section className="text-xs lg:text-lg text-gray-600 body-font h-screen max-w-7xl px-10 justify-evenly mx-auto items-center">

        <div className='relative pt-[7rem] text-center' >
          <h3 className='text-lg lg:text-2xl mx-auto text-tale-dark font-bold text-black'>
            About Me
            <hr className='w-10 h-1 mx-auto lg:my-2 bg-teal-first border-0 rounded' />
          </h3>
        </div>

        <div className="container flex flex-wrap px-5 pt-[2rem] lg:pt-[4rem] mx-auto">

          <div className="md:w-1/2 md:pr-12 pb-0 md:py-8 mb-6 lg:mb-10 md:mb-0 lg:pb-10">
            <p className='text-xs lg:text-lg leading-7 '>
              Hi👋 <span className='font-bold text-gray-800'>I&apos;m Carla Madeo!</span> I am a System Engineer and developer based in{' '}
              <span className='font-bold text-gray-800'>Buenos Aires, Argentina</span>
            </p>
            <br />
            <p className='text-xs lg:text-lg leading-7'>
              I received my Master&apos;s in System Engineering from Universidad Tecnológica Nacional
              in 2018 and have always been passionate about the industry.
            </p>
            <br />
            <p className='text-xs lg:text-lg leading-7'>
              I am constantly searching for fresh experiences and chances to develop. I genuinely think that
              <span className='text-xs lg:text-lg font-bold leading-7 text-teal-first'> one should never stop evolving
              </span>{' '}
              and both in my personal and professional life, I work toward this goal 🙂.
            </p>
            <br />
            <p className='text-xs lg:text-lg leading-7'>
              I am dedicated to continuously improving and expanding my skills and knowledge in the field.
            </p>
            <br />
          </div>

          <div className="md:w-1/2 md:pr-12 pt-0 md:py-8">
            <Image src={woman} alt='Carla Madeo' className='relative rounded-full object-cover' />
          </div>

        </div>
      </section>
    </motion.div>
  )
}

export default About;