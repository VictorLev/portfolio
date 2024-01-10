"use client"

import Welcome from '@/components/bodysection/home'
import Experience from '@/components/bodysection/experience'
import Interests from '@/components/bodysection/interests';
import Projects from '@/components/bodysection/projects'
import ScrollSpy from "react-ui-scrollspy";
import Footer from '@/components/bodysection/footer';
import Contact from '@/components/bodysection/contact';


export default function Home() {
  return (
    <div className="bg-[#F1ECE1]">
    <ScrollSpy
      scrollThrottle={100}
      useBoxMethod
      offsetBottom={30}
      offsetTop={30}
    >
      <Welcome id={"home"}/>
      <Projects id={"projects"}/>
      <Experience id={"experience"}/>
      <Interests id={"interests"}/>
      <Contact/>
      <Footer/>
    </ScrollSpy >
    </div>
  )
}
