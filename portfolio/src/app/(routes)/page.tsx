

import Image from 'next/image'
import config from 'tailwindcss'
import Photo from '../photo_profile.png'
import SvgComponent from '../../../components/blob-borders'

export default function Home() {
  return (
    <main className="">
      <div className='relative'>
        <div className='z-10 absolute top-0 left-0'>
          <Image
            height={600}
            width={400}
            src="/photo_profile_no_background.png"
            alt="Picture of me"
          />
        </div>
        <div className='absolute top-0 left-0'>
        <defs>
          <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
          <Image
            height={600}
            width={400}
            src="/photo_profile.png"
            alt="Picture of me"
          />
          </pattern>
        </defs>
          <SvgComponent />
        </div>
      </div>
    </main>
  )
}
