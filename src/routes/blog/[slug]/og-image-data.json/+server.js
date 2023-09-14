import { json, error } from '@sveltejs/kit'

export const prerender = true

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ request, params, url }) => {


  const pageData = await import(`../../../../content/posts/${params.slug}.md`)
  const { title, date, tags, published, description  } = pageData.metadata



  if (!pageData) {
        throw error(404, `Post not found for ${url.pathname}`)
      }


  return json({ title, description })
}
