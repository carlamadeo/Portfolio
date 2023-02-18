import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import img from '../public/me.jpg';
import Link from 'next/link';

type Props = {}

const Hero = (props: Props) => {

  const [text, helper] = useTypewriter({
    words: [
      `Hi, I'm Carla!`,
      `I'm a Full Stack Developer`,
      `<And I love to Code />`
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>

      <Image src={img} alt='Carla Madeo' className='relative rounded-full h-36 w-36 object-cover' />

      <div className='z-20'>

        <h2 className='uppercase text-teal-first pb-2 text-xl'>Systems Engineer</h2>

        <h1 className='text-5xl lg:text-6xl font-semibold px-10 text-tale-dark'>
          <span>{text}</span>
          <Cursor cursorColor='#468189' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroClass'>About</button>
          </Link>
          <Link href='#resume'>
            <button className='heroClass'>Resume</button>
          </Link>
          <Link href='#skills'>
            <button className='heroClass'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroClass'>Projects</button>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Hero;