// use only in server components
import { getScreenshotsPath } from '@/lib/serverUtils'

interface Project {
  title: string
  description: string
  screenshots: string[]
  liveDemo: string
  sourceCode: string
  technologies?: string[]
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
]

projects.forEach(project => {
  project.screenshots = getScreenshotsPath(project.title)
})

export default projects
