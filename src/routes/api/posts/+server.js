import { getMarkdownPosts } from '$lib/utils/getPosts'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await getMarkdownPosts()

  //const notDraftPosts = allPosts.filter(post => post.meta.draft === false)

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

//   const postIndex = allPosts.findIndex((post) => post.slug === slug)
//   const prev = allPosts[postIndex + 1] || null
//   const next = allPosts[postIndex - 1] || null

  return json(sortedPosts)
}
