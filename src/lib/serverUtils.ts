import path from 'path'
import fs from 'fs'

export const getScreenshotsPath = (projectName: string) => {
  const root = process.cwd()
  const dirName = projectName.toLowerCase().replace(/ /g, '-')
  const dirPath = path.join(root, 'public', 'screenshots', dirName)
  const fileNames = fs.readdirSync(dirPath)

  return fileNames
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
    .map(fileName => `/screenshots/${dirName}/${fileName}`)
}
