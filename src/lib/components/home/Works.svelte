<script>
    import { works } from "../../../content/works/works";
    import WorkItem from "../WorkItem.svelte";
    import Carousel from "../chunks/Carousel.svelte";
</script>

<Carousel title='Немного моих работ'>
    {#each works as {title, image, year, categories, link, excerpt} }
        <WorkItem {title} {image} {excerpt}/>
    {/each}
</Carousel>

<a href="/works" class="btn">Посмотрите все работы</a>
