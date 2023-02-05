import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-28 text-tale-dark text-2xl font-bold'>
        About Me
        <hr className='w-10 h-1 mx-auto my-2 bg-teal-first border-0 rounded' />
      </h3>

      {/* <div className='space-y-10 px-0 md:px-10'>  
        <h4 className='text-4xl font-semibold'>Get to know Me!</h4>
      </div> */}

      <div className='space-y-0 px-0 pt-[330px] md:px-10 md:mt-[60px] md:space-y-0 sm:pt-0 sm:space-y-0 sm:mt-auto sm:text-xs'>
        <p className='text-lg leading-7 '>
          <span className='font-bold'>Hi, my name is Carla Madeo!</span> I am a System Engineer and developer based in{' '}
          <span className='font-bold'>Buenos Aires, Argentina</span>
        </p>
        <br />
        <p className='text-lg leading-7'>
          I graduated from Universidad Tecnológica Nacional in 2018 with a
          Master Degree in System Engineering and have always had a passion for the field.
        </p>
        <br />
        <p className='text-lg leading-7'>
          I am always on the lookout for new experiences and opportunities to learn and grow.
          I firmly believe that <span className='text-lg font-bold leading-7 text-teal-first'> one should never stop evolving
          </span>{' '}
          and this is something I strive for, in both, my personal and professional life 🙂.
        </p>
        <br />
        <p className='text-lg leading-7'>
          I am dedicated to continuously improving and expanding my skills and knowledge in the field.
        </p>
        <br />
      </div>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src='../public/me.jpg'
        className='-mb-20 my-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:mb-0 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

    </div>
  )
}

export default About;