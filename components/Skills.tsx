import { motion } from 'framer-motion';
import { SkillsType } from '@/types';
import Skill from './Skill';

type Props = {};

const skills: SkillsType[] = [
  { name: 'javascript', img: 'https://www.leniolabs.com/images/icon-js.svg', percentage: 80 },
  { name: 'html', img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png', percentage: 90 },
  { name: 'css', img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png', percentage: 60 },
  { name: 'node', img: 'https://www.openxcell.com/wp-content/uploads/2021/11/nodejs-inner.png', percentage: 70 },
  { name: 'typescript', img: 'https://pbs.twimg.com/profile_images/1290672565690695681/0G4bie6b_400x400.jpg', percentage: 40 },
  { name: 'express', img: 'https://camo.githubusercontent.com/b59dc03e62f59b426ce86d8d8cd55ed29a00a6547b7f88bd84fc0ef296e12937/68747470733a2f2f736b696c6c736861636b2e626c6f622e636f72652e77696e646f77732e6e65742f75706c6f6164732f657870726573732e77656270', percentage: 80 },
  { name: 'react', img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png', percentage: 70 },
  { name: 'redux', img: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg', percentage: 80 },
  { name: 'postgres', img: 'https://camo.githubusercontent.com/4961a710549dc654987f38a9c64a1c467ff138d90c9fd84e3e20c6ea1484426d/68747470733a2f2f7261772e6769746875622e636f6d2f436972636c6543492d5075626c69632f63696d672d706f7374677265732f6d61696e2f696d672f636972636c652d706f7374677265732e7376673f73616e6974697a653d74727565', percentage: 70 },
];

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-28 text-tale-dark text-2xl font-bold'>
        Skills
        <hr className='w-10 h-1 mx-auto my-2 bg-teal-first border-0 rounded' />
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        {skills.slice(0, skills.length / 2).map(skill => <Skill key={skill.name} skill={skill} />)}
        {skills.slice(skills.length / 2, skills.length).map(skill => <Skill key={skill.name} skill={skill} directionLeft />)}
      </div>

    </motion.div>
  )
}

export default Skills;