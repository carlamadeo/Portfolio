import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div className='text-black h-screen snap-y snap-mandatory overflow-scroll z-0 font-poppins bg-back'>

      <Head >
        <title>Carla Madeo</title>
        <meta name="description" content="Carla Madeo's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/logo.png" />
      </Head >

      <Header />

      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='resume' className='snap-start'>
        <Resume />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

    </div >
  )
}

export default Home;
