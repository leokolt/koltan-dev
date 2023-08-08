<script>
    import { getMarkdownPosts } from '$lib/utils/getPosts'
    import { onMount } from 'svelte'

    let posts = []
    let previousPost = null
    let nextPost = null

    export let currentPostTitle

    onMount(async () => {
        posts = await getMarkdownPosts()
        findPreviousAndNextPosts()
    })

    function findPreviousAndNextPosts() {
        const sortedPosts = posts.sort((a, b) => {return new Date(a.meta.date) - new Date(b.meta.date)})
        const currentPostIndex = sortedPosts.findIndex(post => post.meta.title === currentPostTitle)
        if (currentPostIndex > 0) {
            let i = currentPostIndex - 1
            while (i >= 0) {
                if (posts[i].meta.published) {
                    previousPost = posts[i]
                    break
                }
                i--
            }
        }
        if (currentPostIndex < posts.length - 1) {
            let i = currentPostIndex + 1
            while (i < posts.length) {
                if (posts[i].meta.published) {
                    nextPost = posts[i]
                    break
                }
                i++
            }
        }
    }
</script>

{#if previousPost || nextPost}
    {#if previousPost}
    <h4>Previous Post</h4>
        <a href="/blog/{previousPost.slug}">{previousPost.meta.title}</a>
    {/if}

    {#if nextPost}
    <h4>Next Post</h4>
        <a href="/blog/{nextPost.slug}">{nextPost.meta.title}</a>
    {/if}
{:else}
    No previous or next posts found.
{/if}
