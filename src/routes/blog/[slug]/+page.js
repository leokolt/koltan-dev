export async function load({ params }){

    const post = await import(`../../../content/posts/${params.slug}.md`)
    const { title, date, categories, draft, next, previous  } = post.metadata
    const content = post.default

    //const notDraftPosts = allPosts.filter(post => post.metadata.draft === false)

    return {
      content,
      title,
      date,
      categories,
      draft,
      next,
      previous
    }
}
