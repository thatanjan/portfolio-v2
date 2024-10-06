'use client'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel'
import Image from 'next/image'
import { Project } from '@/projectData'

const ProjectCard = (props: Project) => {
  const {
    screenshots,
    liveDemo,
    sourceCode,
    technologies,
    title,
    description,
  } = props

  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className='w-full'
      >
        <CarouselContent>
          {screenshots.map((image, imageIndex) => (
            <CarouselItem key={image}>
              <div className='relative w-full aspect-[16/9]'>
                <Image
                  src={image}
                  alt={`${title} screenshot ${imageIndex + 1}`}
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
          {title}
        </h3>
        <p className='mb-4 text-gray-400 line-clamp-2'>{description}</p>
        <p className='mb-4 text-gray-300 line-clamp-2'>
          <span className='font-semibold'>Technologies:</span>{' '}
          {technologies.join(', ')}
        </p>
        <div className='flex space-x-4'>
          <a
            href={liveDemo}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-600 text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300'
          >
            Live Demo
          </a>
          <a
            href={sourceCode}
            target='_blank'
            rel='noopener noreferrer'
            className='border border-gray-400 text-gray-100 px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300'
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
