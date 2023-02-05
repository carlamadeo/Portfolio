import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div className='text-black h-screen snap-y snap-mandatory overflow-scroll z-0 font-poppins bg-back'>

      <Head >
        <title>Carla Madeo</title>
        <meta name="description" content="Carla Madeo's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head >

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

    </div >
  )
}

export default Home;
