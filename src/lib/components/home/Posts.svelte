

<script>



    import { onMount } from 'svelte'

    import Carousel from "../chunks/Carousel.svelte";
    import {getMarkdownPosts} from '$lib/utils/getPosts.js'
    import BlogItem from '$lib/components/BlogItem.svelte';

    let isLoading = true;

    let posts = []
    onMount(async () => {
        posts = await getMarkdownPosts()
        isLoading = false;
    })

</script>

<section>
    <div class="wrapper">
        {#if !isLoading}
            <Carousel title='Вот что пишу в блоге' show3={true} gap2={true}>
                {#each posts as {slug, meta: { title, description, date }} }
                    <BlogItem {title} {slug} {description} {date} full={false}/>
                {/each}
            </Carousel>
        {/if}

        <a href="/blog" class="btn">Посмотрите все статьи</a>
    </div>

</section>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
