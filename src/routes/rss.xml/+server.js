import { getMarkdownPosts } from '$lib/utils/getPosts.js'

const siteURL = 'https://propslab.ru'
const siteTitle = 'Your site title here'
const siteDescription = 'Your site description here'

export const prerender = true

export const GET = async () => {
  const allPosts = await getMarkdownPosts()
  const posts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  }).filter(post => post.meta.published === true)

  const body = render(posts)
  const options = {
    headers: {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml',
    }
  };

  return new Response(
    body,
    options
  )
}

const render = (posts) =>
(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (post) => `<item>
<guid isPermaLink="true">${siteURL}/blog/${post.slug}</guid>
<title>${post.meta.title}</title>
<link>${siteURL}/blog/${post.slug}</link>
<description>${post.meta.description}</description>
<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
</item>`
  )
  .join('')}
</channel>
</rss>
`)
