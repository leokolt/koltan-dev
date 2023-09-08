export const load = async ({ fetch }) => {
    const response = await fetch(`/api/posts`)
    const posts = await response.json()

    if (!posts) {
        throw error(404); // Couldn't resolve the post
    }

    return {
      posts
    }
  }
