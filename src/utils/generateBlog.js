import fs from 'fs'
import path from 'path'
import prettier from 'prettier'

const blogDirectory = path.join(process.cwd(), 'src/pages/blog')
const files = fs.readdirSync(blogDirectory)
const markdownFiles = files.filter((file) => file.endsWith('.md'))

const parseFrontmatter = (frontmatterString) => {
  const frontmatterLines = frontmatterString.split('\n')
  const frontmatterData = {}

  frontmatterLines.forEach((line) => {
    const [key, ...valueParts] = line.split(':').map((part) => part.trim())
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').replace(/'/g, '').trim()
      frontmatterData[key] = value
    }
  })

  return {
    title: frontmatterData.title,
    pubDate: frontmatterData.pubDate,
    description: frontmatterData.description,
    author: frontmatterData.author,
    imageUrl: frontmatterData.imageUrl,
    imageAlt: frontmatterData.imageAlt,
    tags: frontmatterData.tags
      ? frontmatterData.tags.slice(1, -1).split(',').map(tag => tag.trim())
      : [],
  }
}

const postsData = markdownFiles.map((file) => {
  const content = fs.readFileSync(path.join(blogDirectory, file), 'utf-8')
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)
  const frontmatter = frontmatterMatch[1]

  return {path: file.split('.')[0], ...parseFrontmatter(frontmatter)}
})

const formattedJSON = await prettier.format(JSON.stringify(postsData), {parser: 'json'})

fs.writeFileSync(
  path.join(process.cwd(), 'src/components/Blog/posts.json'),
  formattedJSON
)
