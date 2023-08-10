import { json, error } from '@sveltejs/kit'
import { getContentForPathname } from '$lib/utils/getPosts.js'

export const prerender = true

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ request, params, url }) => {
//   const pageData = await getContentForPathname(`/blog/${params.slug}`)
//   if (!pageData) {
//     throw error(404, `Post not found for ${url.pathname}`)
//   }

  const pageData = await import(`../../../../content/posts/${params.slug}.md`)
  const { title, date, tags, published, description  } = pageData.metadata



  if (!pageData) {
        throw error(404, `Post not found for ${url.pathname}`)
      }

  //const { title, description } = pageData

  return json({ title, description })
}

// import { getMarkdownPosts } from '$lib/utils/getPosts'
// import { json } from '@sveltejs/kit'

// export const GET = async ({ request, params, url}) => {
//   const pageData = await getMarkdownPosts()

//   if (!pageData) {
//         throw error(404, `Post not found for ${url.pathname}`)
//       }

//       const { title, description } = pageData

//   return json(pageData)
// }
