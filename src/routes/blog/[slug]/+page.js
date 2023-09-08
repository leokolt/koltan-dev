import { error } from '@sveltejs/kit';

export async function load({ params }){

    const post = await import(`../../../content/posts/${params.slug}.md`)
    const { title, date, tags, published, description, reading, update  } = post.metadata
    const content = post.default


    if (!post || !published) {
        throw error(404); // Couldn't resolve the post
    }

    return {
      content,
      title,
      date,
      tags,
      published,
      description,
      reading,
      update
    }
}
