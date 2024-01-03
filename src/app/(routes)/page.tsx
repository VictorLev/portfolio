

import Image from 'next/image'
import config from 'tailwindcss'
import Photo from '../photo_profile.png'
import ProfileImage from '../../components/profile-image'
import Welcome from '@/components/Welcome-message'
import About from '@/components/about'


export default function Home() {
  return (
    <div>
      <Welcome/>
      <About />
    </div>
  )
}
