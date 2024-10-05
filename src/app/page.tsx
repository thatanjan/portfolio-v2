'use client'

import { useState, useRef, RefObject } from 'react'
import {
  Menu,
  X,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Youtube,
} from 'lucide-react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useRef<HTMLSelectElement>
  const aboutRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const youtubeRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    setIsMenuOpen(false)

    if (!ref.current) return
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-featured online store built with Next.js, Stripe, and MongoDB.',
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
      images: [
        '/placeholder.svg?height=450&width=800',
        '/placeholder.svg?height=450&width=800',
        '/placeholder.svg?height=450&width=800',
      ],
      liveDemo: 'https://example.com/ecommerce',
      sourceCode: 'https://github.com/example/ecommerce',
    },
    {
      title: 'Task Management App',
      description:
        'A React Native mobile app for managing tasks and collaborating with teams.',
      technologies: ['React Native', 'Redux', 'Firebase', 'Expo'],
      images: [
        '/placeholder.svg?height=450&width=800',
        '/placeholder.svg?height=450&width=800',
        '/placeholder.svg?height=450&width=800',
      ],
      liveDemo: 'https://example.com/taskapp',
      sourceCode: 'https://github.com/example/taskapp',
    },
    {
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website built with Next.js and Tailwind CSS.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
      images: [
        '/placeholder.svg?height=450&width=800',
        '/placeholder.svg?height=450&width=800',
        '/placeholder.svg?height=450&width=800',
      ],
      liveDemo: 'https://example.com/portfolio',
      sourceCode: 'https://github.com/example/portfolio',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A real-time weather dashboard using OpenWeatherMap API and Chart.js.',
      technologies: ['JavaScript', 'Chart.js', 'API Integration', 'CSS Grid'],
      images: [
        '/placeholder.svg?height=450&width=800',
        '/placeholder.svg?height=450&width=800',
        '/placeholder.svg?height=450&width=800',
      ],
      liveDemo: 'https://example.com/weather',
      sourceCode: 'https://github.com/example/weather-dashboard',
    },
  ]

  const youtubeVideos = [
    {
      title: 'Introduction to React Hooks',
      videoId: 'dpw9EHDh2bM',
    },
    {
      title: 'Building a REST API with Node.js and Express',
      videoId: 'pKd0Rpw7O48',
    },
    {
      title: 'Mastering CSS Grid Layout',
      videoId: 'jV8B24rSN5o',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-['Fira_Code']">
      <header className='bg-gray-800 bg-opacity-90 shadow-md fixed top-0 left-0 right-0 z-20'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-gray-100'>Anjan Shomodder</h1>
          <nav className='hidden md:flex space-x-4'>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className='text-gray-300 hover:text-gray-100'
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(workRef)}
              className='text-gray-300 hover:text-gray-100'
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className='text-gray-300 hover:text-gray-100'
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(youtubeRef)}
              className='text-gray-300 hover:text-gray-100'
            >
              YouTube
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className='text-gray-300 hover:text-gray-100'
            >
              Contact
            </button>
          </nav>
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='text-gray-100' />
            ) : (
              <Menu className='text-gray-100' />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className='md:hidden bg-gray-800 px-4 py-2'>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className='block py-2 text-gray-300 hover:text-gray-100'
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(workRef)}
              className='block py-2 text-gray-300 hover:text-gray-100'
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className='block py-2 text-gray-300 hover:text-gray-100'
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(youtubeRef)}
              className='block py-2 text-gray-300 hover:text-gray-100'
            >
              YouTube
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className='block py-2 text-gray-300 hover:text-gray-100'
            >
              Contact
            </button>
          </div>
        )}
      </header>

      <main className='snap-y snap-mandatory h-screen overflow-y-scroll'>
        <section
          ref={aboutRef}
          className='relative h-screen w-full flex items-center justify-center snap-start'
        >
          <div className='absolute inset-0 z-0'>
            <Image
              src='/placeholder.svg?height=1080&width=1920'
              alt='Hero Background'
              layout='fill'
              objectFit='cover'
              priority
            />
            <div className='absolute inset-0 bg-black opacity-70 z-10'></div>
          </div>
          <div className='relative z-20 text-center text-gray-100 px-4'>
            <h2 className='text-5xl font-bold mb-4'>Anjan Shomodder</h2>
            <p className='text-xl mb-8'>
              Full Stack Developer | Creating innovative web solutions
            </p>
            <button
              onClick={() => scrollToSection(workRef)}
              className='bg-blue-600 text-gray-100 px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300'
            >
              Explore My Work <ChevronDown className='ml-2' />
            </button>
          </div>
        </section>

        <section
          ref={workRef}
          className='min-h-screen flex items-center justify-center bg-gray-800 snap-start'
        >
          <div className='container mx-auto px-4 py-16'>
            <h2 className='text-4xl font-bold mb-8 text-center text-gray-100'>
              Work Experience
            </h2>
            <div className='space-y-8'>
              <div className='bg-gray-700 p-6 rounded-lg shadow-md'>
                <h3 className='text-2xl font-semibold mb-2 text-gray-100'>
                  Senior Full Stack Developer
                </h3>
                <p className='text-gray-300 mb-4'>
                  TechCorp Inc. | 2019 - Present
                </p>
                <p className='text-gray-400'>
                  Led development of scalable web applications using React,
                  Node.js, and AWS.
                </p>
              </div>
              <div className='bg-gray-700 p-6 rounded-lg shadow-md'>
                <h3 className='text-2xl font-semibold mb-2 text-gray-100'>
                  Full Stack Developer
                </h3>
                <p className='text-gray-300 mb-4'>
                  WebSolutions Co. | 2016 - 2019
                </p>
                <p className='text-gray-400'>
                  Developed and maintained client websites and internal tools
                  using MERN stack.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={projectsRef}
          className='min-h-screen flex items-center justify-center bg-gray-900 snap-start'
        >
          <div className='container mx-auto px-4 py-16'>
            <h2 className='text-4xl font-bold mb-8 text-center text-gray-100'>
              Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className='bg-gray-800 rounded-lg shadow-md overflow-hidden'
                >
                  <Carousel className='w-full'>
                    <CarouselContent>
                      {project.images.map((image, imageIndex) => (
                        <CarouselItem key={imageIndex}>
                          <div className='relative w-full aspect-[16/9]'>
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${imageIndex + 1}`}
                              layout='fill'
                              objectFit='cover'
                              className='rounded-t-lg'
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  <div className='p-6'>
                    <h3 className='text-2xl font-semibold mb-2 text-gray-100'>
                      {project.title}
                    </h3>
                    <p className='mb-4 text-gray-400'>{project.description}</p>
                    <p className='mb-4 text-gray-300'>
                      <span className='font-semibold'>Technologies:</span>{' '}
                      {project.technologies.join(', ')}
                    </p>
                    <div className='flex space-x-4'>
                      <a
                        href={project.liveDemo}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-blue-600 text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.sourceCode}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='border border-gray-400 text-gray-100 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300'
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={youtubeRef}
          className='min-h-screen flex items-center justify-center bg-gray-800 snap-start'
        >
          <div className='container mx-auto px-4 py-16'>
            <h2 className='text-4xl font-bold mb-8 text-center text-gray-100'>
              YouTube Tutorials
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {youtubeVideos.map((video, index) => (
                <div
                  key={index}
                  className='bg-gray-700 rounded-lg shadow-md overflow-hidden'
                >
                  <div
                    className='relative w-full'
                    style={{ paddingBottom: '56.25%' }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      className='absolute top-0 left-0 w-full h-full'
                    ></iframe>
                  </div>
                  <div className='p-4'>
                    <h3 className='text-xl font-semibold text-gray-100'>
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          ref={contactRef}
          className='min-h-screen flex items-center justify-center bg-gray-900 snap-start'
        >
          <div className='container mx-auto px-4 py-16 text-center'>
            <h2 className='text-4xl font-bold mb-8 text-gray-100'>
              Contact Me
            </h2>
            <p className='text-xl mb-8 text-gray-300'>
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <div className='flex justify-center space-x-4'>
              <a
                href='https://github.com/anjanshomodder'
                className='text-gray-400 hover:text-gray-100 transition duration-300'
              >
                <Github size={24} />
              </a>
              <a
                href='https://linkedin.com/in/anjanshomodder'
                className='text-gray-400 hover:text-gray-100 transition duration-300'
              >
                <Linkedin size={24} />
              </a>
              <a
                href='mailto:anjan@example.com'
                className='text-gray-400 hover:text-gray-100 transition duration-300'
              >
                <Mail size={24} />
              </a>
              <a
                href='https://youtube.com/@anjanshomodder'
                className='text-gray-400 hover:text-gray-100 transition duration-300'
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page
