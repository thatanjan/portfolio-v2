import projects from '@/projectData'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'

const ProjectSection = () => {
  return (
    <section
      id='projects'
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
                  {project.screenshots.map((image, imageIndex) => (
                    <CarouselItem key={image}>
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
              <div className='p-6 '>
                <h3 className='text-2xl line-clamp-2 font-semibold mb-2 text-gray-100'>
                  {project.title}
                </h3>
                <p className='mb-4 text-gray-400 line-clamp-2'>
                  {project.description}
                </p>
                <p className='mb-4 text-gray-300 line-clamp-2'>
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
  )
}

export default ProjectSection
