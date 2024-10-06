import projects from '@/projectData'
import ProjectCard from '@/components/ProjectCard'

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
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
