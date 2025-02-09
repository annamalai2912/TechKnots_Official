"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useInView } from "react-intersection-observer";
import { Camera, Book, Code, Users, Rocket, Star } from "lucide-react";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [end, duration, inView]);

  return <span ref={ref}>{count}</span>;
};

const FeatureCard = ({ title, description, icon: Icon, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transform cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl dark:bg-gray-800 ${
        inView
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-black dark:text-white">{title}</h3>
      <p className="text-body-color">{description}</p>
    </div>
  );
};

const CourseCard = ({ title, duration, features, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`group mb-8 transform cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl dark:bg-gray-800 ${
        inView
          ? "translate-x-0 opacity-100"
          : index % 2 === 0
          ? "-translate-x-8 opacity-0"
          : "translate-x-8 opacity-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{title}</h3>
        <p className="mb-4 text-primary">{duration}</p>
        <div
          className={`transition-all duration-500 ${
            isHovered ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="list-inside list-disc text-body-color">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="mb-2 transform transition-all duration-300"
                style={{
                  transitionDelay: `${idx * 100}ms`,
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered
                    ? "translateX(0)"
                    : "translateX(-20px)",
                }}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full transform bg-primary transition-all duration-300 group-hover:scale-x-100" 
           style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }} />
    </div>
  );
};

const StatCard = ({ icon: Icon, value, label }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`flex transform items-center space-x-4 rounded-lg bg-white p-6 shadow-lg transition-all duration-500 dark:bg-gray-800 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary bg-opacity-10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <div className="text-2xl font-bold text-primary">
          <AnimatedCounter end={value} />+
        </div>
        <p className="text-body-color">{label}</p>
      </div>
    </div>
  );
};

const AboutSectionOne = () => {
  const features = [
    {
      title: "Hands-on Training",
      description: "Real-time practical sessions with industry-standard equipment",
      icon: Camera,
      delay: 100
    },
    {
      title: "Value Added Courses",
      description: "Specialized courses to enhance employability",
      icon: Book,
      delay: 200
    },
    {
      title: "Project Development",
      description: "Guidance for final year projects and applications",
      icon: Code,
      delay: 300
    },
    {
      title: "Industry Connect",
      description: "Direct interaction with industry experts",
      icon: Users,
      delay: 400
    },
    {
      title: "Innovation Hub",
      description: "Access to cutting-edge technology and tools",
      icon: Rocket,
      delay: 500
    },
    {
      title: "Career Growth",
      description: "Structured pathway for professional development",
      icon: Star,
      delay: 600
    }
  ];

  
  const stats = [
    { icon: Users, value: 1000, label: "Students Trained" },
    { icon: Book, value: 50, label: "Courses Offered" },
    { icon: Star, value: 95, label: "Success Rate" },
    { icon: Rocket, value: 200, label: "Projects Completed" }
  ];

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Transforming Engineering Education"
                paragraph="TechKnots Academy bridges the gap between theoretical knowledge and practical implementation, providing hands-on training and industry-relevant skills development."
                mb="44px"
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    {...feature}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 w-full px-4 lg:mt-0 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px]">
                <div className="relative">
                  <Image
                    src="/images/about/about-image.svg"
                    alt="TechKnots Training"
                    width={500}
                    height={480}
                    className="animate-float mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <Image
                    src="/images/about/about-image-dark.svg"
                    alt="TechKnots Training"
                    width={500}
                    height={480}
                    className="animate-float mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;