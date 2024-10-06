import { ChevronDown, Github, Linkedin, Mail, Youtube } from 'lucide-react'
import Image from 'next/image'

import hero_background from '@/../public/hero_background.jpg'
import Header from '@/components/Header'
import ProjectSection from '@/components/ProjectSection'

const Page = () => {
  const youtubeVideos = [
    {
      title:
        'Translate website content using Next.js internationalization and next-i18next',
      videoId: 'H9O9HdKNytc',
    },
    {
      title:
        'Next Auth Basics tutorial | Add Google, GitHub, Twitter, and Email authentication in Next.js project',
      videoId: 'tgrvKGPmI04',
    },
    {
      title:
        'Material UI crash course with Next.js 2023 | React UI Framework | V5',
      videoId: '3quQ6KNGUh0',
    },
    {
      title: 'Mantine UI crash course with NEXT.JS | React UI Framework',
      videoId: 'U9MaICpcNRI',
    },
    {
      title: 'Chakra UI crash course | React UI Framework',
      videoId: 'hJ873mLhmFQ',
    },
    {
      title:
        'How to setup and deploy fullstack(MERN) application on Vercel and Render',
      videoId: 'ME3tMy5Q2qo',
    },
    {
      title:
        'NEXT UI crash course with NEXT.JS | Tailwind CSS | React UI Framework',
      videoId: '4f-tAcsSv54',
    },
    {
      title:
        'Auth0 basics with Next.JS | Add Google, GitHub, and Email authentication in Next.js project | React',
      videoId: 'PoTUX9_3LaQ',
    },
    {
      title:
        '1. Introduction to Firebase Firestore with Nextjs 14 | Server Component | Server Action | React',
      videoId: 'PoTUX9_3LaQ',
    },
    {
      title:
        'Setup NextJs 14 with MongoDB and Mongoose | React | instrumentation',
      videoId: 'tFp4UhfDoQU',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-['Fira_Code']">
      <Header />
      <main className='snap-y snap-mandatory h-screen overflow-y-scroll scroll-pt-16'>
        <section
          id='about'
          className='relative h-screen w-full flex items-center justify-center snap-start'
        >
          <div className='absolute inset-0 z-0'>
            <Image
              src={hero_background}
              alt='Hero Background'
              layout='fill'
              objectFit='cover'
              priority
            />
            <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
          </div>
          <div className='relative z-20 text-center text-gray-100 px-4'>
            <h2 className='text-5xl font-bold mb-4'>Anjan Shomodder</h2>
            <p className='text-xl mb-8'>
              Full Stack Developer | YouTuber | Tech Enthusiast
            </p>
            <a
              href='#work'
              className='bg-blue-600 text-gray-100 px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300'
            >
              Explore My Work <ChevronDown className='ml-2' />
            </a>
          </div>
        </section>

        <section
          id='work'
          className='min-h-screen flex items-center justify-center bg-gray-800 snap-start'
        >
          <div className='container mx-auto px-4 py-16'>
            <h2 className='text-4xl font-bold mb-8 text-center text-gray-100'>
              Work Experience
            </h2>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2'>
              <div className='bg-gray-700 p-6 rounded-lg shadow-md'>
                <h3 className='text-2xl font-semibold mb-2 text-gray-100'>
                  Frontend Developer
                </h3>
                <p className='text-gray-300 mb-4'>Droppe | 2022 - 2024</p>
                <ul className='list-none text-gray-400'>
                  <li>
                    Developed features like Request for quote and Sample request
                    helping increase sales.
                  </li>
                  <li>
                    Migrated an entire blogging website from Javascript to
                    Typescript.
                  </li>
                </ul>
              </div>
              <div className='bg-gray-700 p-6 rounded-lg shadow-md flex flex-col'>
                <h3 className='text-2xl font-semibold mb-2 text-gray-100'>
                  Want to hire me?
                </h3>
                <p className='text-gray-300 mb-4'>
                  I am available for full-time or freelance work. Let&apos;s
                  talk!
                </p>
                <div className='flex space-x-4 basis-full items-end'>
                  <a
                    href='#contact'
                    rel='noopener noreferrer'
                    className='bg-blue-600 text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'
                  >
                    Hire me
                  </a>
                  <a
                    href='https://drive.google.com/file/d/1i7_4pUGFKfhDTlIs5UQoZhQcZ6LatRvd/view?usp=sharing'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border border-gray-400 text-gray-100 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300'
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectSection />

        <section
          id='youtube'
          className='min-h-screen flex items-center justify-center bg-gray-800 snap-start'
        >
          <div className='container mx-auto px-4 py-16'>
            <h2 className='text-4xl font-bold mb-8 text-center text-gray-100'>
              My YouTube Tutorials
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
                    <h3 className='text-md  text-gray-300 line-clamp-2'>
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id='contact'
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
                href='https://github.com/thatanjan'
                className='text-gray-400 hover:text-gray-100 transition duration-300'
                aria-label='GitHub'
                target='_blank'
              >
                <Github size={24} />
              </a>
              <a
                href='https://linkedin.com/in/thatanjan'
                className='text-gray-400 hover:text-gray-100 transition duration-300'
                aria-label='LinkedIn'
                target='_blank'
              >
                <Linkedin size={24} />
              </a>
              <a
                href='mailto:thatanjan@gmail.com'
                className='text-gray-400 hover:text-gray-100 transition duration-300'
                aria-label='Email'
              >
                <Mail size={24} />
              </a>
              <a
                href='https://youtube.com/@culesCoding'
                className='text-gray-400 hover:text-gray-100 transition duration-300'
                aria-label='YouTube'
                target='_blank'
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
