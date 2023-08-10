<script>
    import { onMount } from 'svelte';

    //export let works

    let carouselRef;
    let carouselItemRef;
    let currentIndex = 0;

    let scrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    const scrollToRight = (e) => {
        e.preventDefault();
        carouselRef.scrollBy({
            left: carouselItemRef.clientWidth,
            top: 0,
            behavior: 'smooth',
        });
        currentIndex += 1;
    }

    const scrollToLeft = (e) => {
        e.preventDefault();
        carouselRef.scrollBy({
            left: -carouselItemRef.clientWidth,
            top: 0,
            behavior: 'smooth',
        });
        currentIndex -= 1;
    }

    function start(event) {
        scrolling = true;
        startX = event.pageX - carouselRef.offsetLeft;
        scrollLeft = carouselRef.scrollLeft;
    }

    function end() {
        scrolling = false;
    }

    function move(event) {
        if (!scrolling) return;

        event.preventDefault();
        const x = event.pageX - carouselRef.offsetLeft;
        const walk = (x - startX) * 5; // Adjust scrolling speed
        carouselRef.scrollLeft = scrollLeft - walk;
    }

    onMount(() => {
        carouselItemRef = document.querySelector('.slider-item');
    });
</script>


    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="carousel"
        bind:this={carouselRef}
        on:mousedown="{start}"
        on:mouseup="{end}"
        on:mouseleave="{end}"
        on:mousemove="{move}">


        <!-- {#each works as { title, image, year, categories, link, excerpt }}


             <!-- svelte-ignore a11y-no-noninteractive-tabindex --
            <div class="item" tabindex="0">
                <h3>{title}</h3>
                <img src={image} alt={title}>
                {year}
                {categories}
                <p>{excerpt}</p>
                <a href={link} target="_blank">Перейти</a>
            </div>

        {/each} -->

        <slot/>

        </div>
        <button on:click={scrollToLeft}>&lt;</button>
        <button on:click={scrollToRight}>&gt;</button>




<style>
    .carousel {
        overflow-x: auto;
		scroll-snap-type: x mandatory;
        display: flex;
        scroll-behavior: smooth;
        --webkit-overflow-scrolling: touch;
    }

    .carousel > :not(.overscroller) {
		scroll-snap-align: center;
		scroll-snap-stop: always;
	}


    /*.item {
        /* flex: 1 1 30%;
        min-width: calc((100% / 3) - (60px / 3));
        cursor: grab;
        min-width: 380px;
        background: grey;
        		scroll-snap-align: center;
		scroll-snap-stop: always;
    }

    .item:focus-within, .item:focus {
        cursor: grabbing;
    }*/
</style>
