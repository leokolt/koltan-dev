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
<div class="next-prev-post">
    {#if previousPost}
        <div class="prev-post">
            <p>Предыдущая статья</p>
            <h4><a href="/blog/{previousPost.slug}">{previousPost.meta.title}</a></h4>
        </div>
    {/if}

    {#if nextPost}
        <div class="next-post">
            <p>Следующая статья</p>
            <h4><a href="/blog/{nextPost.slug}">{nextPost.meta.title}</a></h4>
        </div>
    {/if}
</div>

{/if}

<style>
    .next-prev-post {
        display: grid;
        grid-template-columns: auto auto;
        gap: var(--unit-3);
        margin-top: var(--unit-3);
    }
    .next-prev-post > div {
        border: var(--border);
        border-radius: var(--radius);
        padding: var(--unit-3);
    }
    .next-prev-post > div p {
        font-size: var(--p3)
    }
    h4 a {
        font-size: var(--h5);
        text-decoration: none;
        color: var(--color-primary);
        font-weight: 900;
        transition: var(--transition);
        line-height: 1.2;
        text-decoration-style: wavy;
        -webkit-text-decoration-style: wavy;
        text-underline-offset: 1px;
        -webkit-text-underline-offset: 1px;
        text-decoration-line: underline;
        -webkit-text-decoration-line: underline;
        text-decoration-thickness: 3px;
        -webkit-text-decoration-thickness: 3px;
        text-decoration-color: transparent;
        -webkit-text-decoration-color: transparent;
        text-decoration-skip-ink: none;
        -webkit-text-decoration-skip-ink: none;
    }
    h4 a:hover {
        text-decoration-color: var(--color-accent);
        -webkit-text-decoration-color: var(--color-accent);
    }
</style>
