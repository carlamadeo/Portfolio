import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='sticky top-0 p-5 bg-navbar'>

      <header className='flex items-start justify-between max-w-7xl mx-auto h-10 z-20 xl:items-center'>
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className='flex flex-row items-center'>
          <SocialIcon url='https://github.com/carlamadeo' fgColor='#eef0eb' bgColor='transparent' />
          <SocialIcon url='https://www.linkedin.com/in/carla-madeo' fgColor='#eef0eb' bgColor='transparent' />
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className='flex flex-row items-center text-gray-300 cursor-pointer'>
          <SocialIcon url='mailto: carlamadeo@gmail.com' fgColor='#eef0eb' bgColor='transparent' />
          <p className='hidden md:inline-flex text-sm text-gray-300'>Contact Me</p>
        </motion.div>
      </header>
      {/* <hr className='max-w-7xl h-0.5 mx-auto my-4 bg-secondary border-0 rounded' /> */}
    </div>
  )
}

export default Header;