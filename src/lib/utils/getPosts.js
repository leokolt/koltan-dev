// @ts-nocheck
export const getMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/content/posts/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            //const postPath = path.slice(11, -3)

            const postPath = path.split('/').at(-1)?.replace('.md', '')

            return {
                meta: metadata,
                slug: postPath,
            }
        })
    )

    return allPosts

}
