<script>
    import { works } from "../../../content/works/works";

    import Carousel from "../chunks/Carousel.svelte";


    // let carouselRef;
    // let carouselItemRef;
    // let currentIndex = 0;

    // let scrolling = false;
    // let startX = 0;
    // let scrollLeft = 0;

    // const scrollToRight = (e) => {
    //     e.preventDefault();
    //     carouselRef.scrollBy({
    //         left: carouselItemRef.clientWidth,
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    //     currentIndex += 1;
    // }

    // const scrollToLeft = (e) => {
    //     e.preventDefault();
    //     carouselRef.scrollBy({
    //         left: -carouselItemRef.clientWidth,
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    //     currentIndex -= 1;
    // }

    // function start(event) {
    //     scrolling = true;
    //     startX = event.pageX - carouselRef.offsetLeft;
    //     scrollLeft = carouselRef.scrollLeft;
    // }

    // function end() {
    //     scrolling = false;
    // }

    // function move(event) {
    //     if (!scrolling) return;

    //     event.preventDefault();
    //     const x = event.pageX - carouselRef.offsetLeft;
    //     const walk = (x - startX) * 10; // Adjust scrolling speed
    //     carouselRef.scrollLeft = scrollLeft - walk;
    // }
</script>

<div class="wrapper">



<!-- svelte-ignore a11y-no-static-element-interactions --
<div class="carusel"
    bind:this={carouselRef}
    on:mousedown="{start}"
    on:mouseup="{end}"
    on:mouseleave="{end}"
    on:mousemove="{move}">


    {#each works as {title, image, year, categories, link, excerpt} }
        <!-- svelte-ignore a11y-no-noninteractive-tabindex --
        <div class="item" bind:this={carouselItemRef} tabindex="0">
            <h3>{title}</h3>
            <img src={image} alt={title}>
            {year}
            {categories}
            <p>{excerpt}</p>
            <a href={link} target="_blank" >Перейти</a>
        </div>
    {/each}

</div>

<button on:click={scrollToLeft}>Left</button>
<button on:click={scrollToRight}>Right</button>

</div> -->

<Carousel>
    {#each works as {title, image, year, categories, link, excerpt} }
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div class="slider-item" tabindex="0">
        <h3>{title}</h3>
        <img src={image} alt={title}>
        {year}
        {categories}
        <p>{excerpt}</p>
        <a href={link} target="_blank" >Перейти</a>
    </div>
{/each}
</Carousel>

</div>

<style>
    /* .carusel {
        display: flex;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        gap: 30px;
        /* overscroll-behavior-x: contain; */
        /* scroll-padding: 20px; *

        --webkit-overflow-scrolling: touch;
    } */


    .slider-item {
        /* flex: 1 1 30%; */
        min-width: 380px;
        min-width: calc((100% / 3) - (60px / 3));
        cursor: grab;

        background: grey;

        scroll-snap-align: start;
		scroll-snap-stop: always;
    }

    .slider-item:focus-within, .slider-item:focus {
        cursor: grabbing;
    }
</style>
