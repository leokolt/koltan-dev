<script>
    import  works from "../../../content/works/works.json";
    import WorkItem from "../WorkItem.svelte";
    import Carousel from "../chunks/Carousel.svelte";
</script>

<Carousel title='Немного моих работ'>
    {#each works as {title, image, excerpt} }
        <WorkItem {title} {image} {excerpt} full={false}/>
    {/each}
</Carousel>

<a href="/works" class="btn">Посмотрите все работы</a>
