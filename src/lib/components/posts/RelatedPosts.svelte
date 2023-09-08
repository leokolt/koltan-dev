<script>
    import { getMarkdownPosts } from '$lib/utils/getPosts'
    import { onMount } from 'svelte'
    import Carousel from "../globals/Carousel.svelte";
    import { dateFormat } from '$lib/utils/dateFormat.js'

    let isLoading = true;

    let posts = []
    let relatedPosts = []

    export let currentPostTitle, currentPostTags

    onMount(async () => {
        posts = await getMarkdownPosts()
        filterRelatedPosts()
        isLoading = false;
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
    <div class="related-posts">
        {#if !isLoading}
            <Carousel title='Похожие статьи' show4={true} gap2={true}>
                {#each relatedPosts.slice(0, 7) as { slug, meta: { title, date, update } }}
                    <div class="related-posts-item">
                        <h4><a href="/blog/{slug}">{title}</a></h4>
                        <time>{dateFormat(date || update)}</time>
                    </div>
                {/each}
            </Carousel>
        {/if}
    </div>
{/if}

<style>
    .related-posts {
        margin-top: calc(4 * var(--unit-3));
    }

    .related-posts-item {
        border: var(--border);
        border-radius: var(--radius);
        padding: var(--unit-3);
        padding-bottom: calc(1.5 * var(--unit-3));
        position: relative;
        margin-bottom: var(--unit-3);
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

    time {
        border-radius: var(--radius);
        border: var(--border);
        text-align: center;
        margin: auto;
        display: block;
        width: max-content;
        text-decoration: none;
        font-size: var(--p3);
        font-weight: 500;
        color: var(--color-primary);
        padding: var(--unit);
        margin-top: 0;
        transition: var(--transition-shadow);
        box-shadow: 0px 0px 0px var(--color-accent);
        background: var(--color-accent);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
    }
</style>
