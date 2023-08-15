<script>
    import { onMount } from 'svelte';

    export let title = 'Заголовок секции'

    let carouselRef;
    let carouselItemRef;
    let currentIndex = 0;

    let scrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    let atLeftEnd = true; // новое состояние для отслеживания, докручена ли карусель до конца влево
    let atRightEnd = false; // новое состояние для отслеживания, докручена ли карусель до конца вправо

    function updateCarouselEnds() {
        atLeftEnd = carouselRef.scrollLeft === 0;
        atRightEnd = carouselRef.scrollLeft + carouselRef.offsetWidth >= carouselRef.scrollWidth;
    }

    const scrollToRight = (e) => {
        e.preventDefault();
        carouselRef.scrollBy({
            left: carouselItemRef.clientWidth,
            top: 0,
            behavior: 'smooth',
        });
        currentIndex += 1;
        updateCarouselEnds();
    }

    const scrollToLeft = (e) => {
        e.preventDefault();
        carouselRef.scrollBy({
            left: -carouselItemRef.clientWidth,
            top: 0,
            behavior: 'smooth',
        });
        currentIndex -= 1;
        updateCarouselEnds();
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
        const walk = (x - startX) * 3; // Adjust scrolling speed
        carouselRef.scrollLeft = scrollLeft - walk;
    }

    onMount(() => {
        carouselItemRef = document.querySelector('.carousel > *');

          // Добавляем обработчики событий прокрутки карусели, чтобы следить за ее концами
        carouselRef.addEventListener('scroll', updateCarouselEnds);
        window.addEventListener('resize', updateCarouselEnds);

        // Обновляем состояние, когда компонент отрисован впервые
        updateCarouselEnds();
    });
</script>

<section>

    <div class="wrapper">
        <div class="carousel-header">
            <h2>{title}</h2>
            <div class="carousel-nav">
                <button on:click={scrollToLeft} disabled={atLeftEnd}>❮</button>
                <button on:click={scrollToRight} disabled={atRightEnd}>❯</button>
            </div>
        </div>


        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="carousel"
            bind:this={carouselRef}
            on:mousedown="{start}"
            on:mouseup="{end}"
            on:mouseleave="{end}"
            on:mousemove="{move}"
        >

            <slot/>

        </div>
    </div>

</section>





<style>
    section {
        margin-top: 120px;
    }

    .carousel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h2 {
        font-size: var(--h1);
        text-align: center;
        margin-bottom: 30px;
    }

    .carousel {
        overflow-x: auto;
		scroll-snap-type: x mandatory;
        display: flex;
        scroll-behavior: smooth;
        --webkit-overflow-scrolling: touch;
        gap: 20px;
    }

    .carousel::-webkit-scrollbar { width: 0; }

    .carousel { -ms-overflow-style: none; }

    .carousel { overflow: -moz-scrollbars-none; }

    :global.carousel > * {
		scroll-snap-align: center;
		scroll-snap-stop: always;
	}


    :global.carousel > * {
        scroll-snap-align: start;
		scroll-snap-stop: always;
        cursor: grab;
    }

    :global.carousel > *:focus-within, :global.carousel > *:focus {
        cursor: grabbing;
    }

    .carousel-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    button {
        border: var(--border);
        border-radius: 999px;
        width: 50px;
        height: 50px;
        transition: var(--transition-cubic);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-primary)
    }

    button:hover:not([disabled]) {
        box-shadow: var(--shadow);
    }

    button:active:not([disabled]) {
        box-shadow: var(--shadow-active);
    }

    button[disabled] {
        opacity: .6;
        cursor:auto;
    }

</style>
