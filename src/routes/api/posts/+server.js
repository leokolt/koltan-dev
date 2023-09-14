import { getMarkdownPosts } from '$lib/utils/getPosts.js'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await getMarkdownPosts()

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  }).filter(post => post.meta.published === true)

  return json(sortedPosts)
}
