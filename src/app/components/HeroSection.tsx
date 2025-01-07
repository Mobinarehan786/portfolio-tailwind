"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
// import TypeAnimation from "react-type-animation" as any;


// Directly import TypeAnimation and assert its type
// 
// Define the component as a functional component with TypeScript
const HeroSection: React.FC = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-yellow-500 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            {/* Use TypeAnimation with type assertion */}
          <TypeAnimation
              sequence={[
                "Mobina Khatoon",
                1000,
                "Web Developer",
                
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />  
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I am a skilled web developer with expertise in front-end and back-end technologies.1. Frontend Development
HTML5
CSS3 (Responsive Design, Animations)
JavaScript (ES6+)
TypeScript
React.js / Next.js
UI/UX Design Principles
2. Backend Development
Node.js
Express.js

3. Web Design
Responsive Web Design
Wireframing and Prototyping
 / Figma 
4. Programming Languages
JavaScript
TypeScript
5. DevOps and Deployment
Git & Version Control
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3  bg-[#e6d330] w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-black"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-black mt-3"
            >
              <span className="block bg-[#e6ca2e] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" bg-[#000000] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

