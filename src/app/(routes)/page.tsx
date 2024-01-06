"use client"

import Welcome from '@/components/home'
import Experience from '@/components/experience'
import Interests from '@/components/interests';
import Projects from '@/components/projects'
import ScrollSpy from "react-ui-scrollspy";


export default function Home() {
  return (
    <div className="bg-[#F1ECE1] ">
    <ScrollSpy
      scrollThrottle={100}
      useBoxMethod
      offsetBottom={50}
      offsetTop={50}
    >
      <Welcome id={"home"}/>
      <Projects id={"projects"}/>
      <Experience id={"experience"}/>
      <Interests id={"interests"}/>
    </ScrollSpy >
    </div>
  )
}
