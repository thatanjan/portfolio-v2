// use only in server components
import { getScreenshotsPath } from '@/lib/serverUtils'

interface Project {
  title: string
  description: string
  screenshots: string[]
  liveDemo: string
  sourceCode: string
  technologies: string[]
}

const projects: Project[] = [
  {
    title: 'Cules Coding',
    description:
      'Cules Coding is a blogging site which teaches about people about Full stack web development, data structure, alghorithms and many more.',
    screenshots: [],
    liveDemo: 'https://cules-coding.vercel.app/',
    sourceCode: 'https:/github.com/thatanjan/cules-coding',
    technologies: ['React', 'Next.js', 'MongoDB', 'Mongoose', 'TypeScript'],
  },
  {
    title: 'Facesta',
    description:
      'Facesta is a social media Platform inspired from Facebook and Instagram.',
    screenshots: [],
    liveDemo: 'https://facesta.vercel.app/',
    sourceCode: 'https://github.com/thatanjan/facesta',
    technologies: [
      'React',
      'Next.js',
      'MongoDB',
      'TypeScript',
      'GraphQL',
      'Node.js',
      'Express',
      'Material-UI',
    ],
  },
  {
    title: 'SpaceX Landing Page Clone',
    description:
      'A clone of the SpaceX landing page, made with HTML, CSS, and JavaScript.',
    screenshots: [],
    liveDemo: 'https://thatanjan.github.io/spaceX-landing-page-clone-yt/',
    sourceCode: 'https://github.com/thatanjan/spaceX-landing-page-clone-yt',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Tesla Landing Page Clone',
    description:
      'A clone of the Tesla landing page, made with HTML, CSS, and JavaScript and Fullpage.JS',
    screenshots: [],
    liveDemo: 'https://thatanjan.github.io/tesla-clone-yt',
    sourceCode: 'https://github.com/thatanjan/tesla-clone-yt',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Fullpage.JS'],
  },
  {
    title: 'Video Background Landing Page',
    description:
      'A beautiful landing page with a video background, made with HTML, CSS, and JavaScript.',
    screenshots: [],
    liveDemo: 'https://thatanjan.github.io/video-background-landing-page-yt/',
    sourceCode: 'https://github.com/thatanjan/video-background-landing-page-yt',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Fullpage Landing Page',
    description:
      'A beautiful slide based fullpage landing page, made with HTML, CSS, JavaScript, and Fullpage.JS.',
    screenshots: [],
    liveDemo: 'https://thatanjan.github.io/fullpage-landing-page-yt',
    sourceCode: 'https://github.com/thatanjan/fullpage-landing-page-yt',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Fullpage.JS'],
  },
  {
    title: 'Cules Shop',
    description:
      'Cules shop is an open source e-commerce website where people can buy and sell their electronic products.',
    screenshots: [],
    liveDemo: 'https://cules-shop.vercel.app/',
    sourceCode: 'https://github.com/thatanjan/cules-shop',
    technologies: [
      'React',
      'Next.js',
      'MongoDB',
      'Mongoose',
      'TypeScript',
      'GraphQL',
      'Node.js',
      'Express',
      'Material-UI',
      'GraphQL',
    ],
  },
]

projects.forEach(project => {
  console.log(project.title)
  project.screenshots = getScreenshotsPath(project.title)
})

export default projects
