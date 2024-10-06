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
]

projects.forEach(project => {
  project.screenshots = getScreenshotsPath(project.title)
})

export default projects
