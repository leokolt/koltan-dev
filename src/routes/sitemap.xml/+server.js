import { getMarkdownPosts } from '$lib/utils/getPosts'

export const prerender = true

const pages = ["about", "blog", "contact", "works"] //list of pages as a string ex. ["about", "blog", "contact"]

const website = "http://localhost:5173"

/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {
    const allPosts = await getMarkdownPosts()
    const posts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

    const body = sitemap(posts, pages);
    const response = new Response(body);
    response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
    response.headers.set('Content-Type', 'application/xml');
    return response;
}

const sitemap = (posts, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${website}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages.map((page) => `
  <url>
    <loc>${website}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `).join('')}
  ${posts.map((post) => post.visible ? null : `
  <url>
    <loc>${website}/blog/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.meta.date}</lastmod>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;
