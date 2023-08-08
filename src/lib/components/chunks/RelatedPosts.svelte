<script>
    import { getMarkdownPosts } from '$lib/utils/getPosts'
    import { onMount } from 'svelte'

    let posts = []
    let relatedPosts = []

    export let currentPostTitle, currentPostTags

    onMount(async () => {
        posts = await getMarkdownPosts()
        filterRelatedPosts()
    })

    function filterRelatedPosts() {
        relatedPosts = posts.filter(post => {
        // Exclude the current post and duplicates based on tags
            return (
                post.meta.title !== currentPostTitle && post.meta.published &&
                currentPostTags.some(tag => post.meta.tags.includes(tag))
            )
        })
    }
</script>

{#if relatedPosts.length > 0}
    Related posts
    <ul>
        {#each relatedPosts as { slug, meta: { title } }}
            <li><a href="/blog/{slug}"><h4>{title}</h4></a></li>
        {/each}
    </ul>
{:else}
    No related posts found.
{/if}
