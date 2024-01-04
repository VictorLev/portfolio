

import Image from 'next/image'
import config from 'tailwindcss'
import Photo from '../photo_profile.png'
import ProfileImage from '../../components/profile-image'
import Welcome from '@/components/Welcome-message'
import About from '@/components/about'
import Projects from '@/components/projects'


export default function Home() {
  return (
    <div className="bg-[#F1ECE1] ">
      <Welcome/>
      <About />
      <Projects />
    </div>
  )
}
