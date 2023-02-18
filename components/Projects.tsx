import { motion } from 'framer-motion';
import Image from 'next/image';
import breeds from '../public/breeds.png';
import playExpert from '../public/playExpert.jpg';

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}>
      {/* <div className='w-full absolute top-[22%] bg-teal-first/10 h-[500px] -skew-y-12'></div> */}
      <section className='text-xs lg:text-lg text-gray-600 h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'>

        <div className='relative pt-[7rem] text-center' >
          <h3 className='text-lg lg:text-2xl mx-auto text-tale-dark font-bold text-black'>
            Projects
            <hr className='w-10 h-1 mx-auto lg:my-2 bg-teal-first border-0 rounded' />
          </h3>
        </div>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -mx-4 -mb-10 text-center'>

            <div className='w-screen sm:w-1/2 mb-10 px-4 transform transition duration-500 hover:scale-105 cursor-pointer'>
              <a href='https://pi-breeds.vercel.app/' target='_blank'>
                <Image src={breeds} alt='breeds' className='object-cover object-center h-25 w-25 rounded-lg' />
                <h2 className='overflow-hidden text-2xl text-gray-900 mt-6 mb-3 font-bold'>Breeds</h2>
                <p className='leading-relaxed text-base'>Single Page Application (SPA) focused on dog breeds for a personal project during my time at the Bootcamp at SoyHenry.</p>
              </a>
            </div>

            <div className='w-screen sm:w-1/2 mb-10 px-4 transform transition duration-500 hover:scale-105 cursor-pointer'>
              <a href='https://www.youtube.com/watch?v=XF-85eYLBoc&ab_channel=SantiagoCalabr%C3%B3' target='_blank'>
                <Image src={playExpert} alt='breeds' className='object-cover object-center h-25 w-25 rounded-lg' />
                <h2 className='text-2xl text-gray-900 mt-6 mb-3 font-bold'>Play Expert</h2>
                <p className='leading-relaxed text-base'>A Personal Computing Hardware Marketplace developed as part of the group project at the SoyHenry Bootcamp.</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div >
  )
}

export default Projects;