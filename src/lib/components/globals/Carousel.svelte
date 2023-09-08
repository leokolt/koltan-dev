<script>
    import { onMount } from 'svelte';

    export let title = 'Заголовок секции'
    export let show2 = false
    export let show3 = false
    export let show4 = false
    export let gap1 = false
    export let gap2 = false
    export let gap3 = false

    let carouselRef;
    let carouselItemRef;
    let currentIndex = 0;

    let scrolling = false;
    let startX = 0;
    let scrollLeft = 0;

    let atLeftEnd = true; // новое состояние для отслеживания, докручена ли карусель до конца влево
    let atRightEnd = false; // новое состояние для отслеживания, докручена ли карусель до конца вправо

    function updateCarouselEnds() {
        if (!carouselRef) return;
        atLeftEnd = carouselRef.scrollLeft === 0;
        atRightEnd = carouselRef.scrollLeft + carouselRef.offsetWidth >= carouselRef.scrollWidth;
    }

    const scrollToRight = (e) => {
        e.preventDefault();
        carouselRef.scrollBy({
            left: carouselItemRef.offsetWidth,
            top: 0,
            behavior: 'smooth',
        });
        currentIndex += 1;
        updateCarouselEnds();
    }

    const scrollToLeft = (e) => {
        e.preventDefault();
        carouselRef.scrollBy({
            left: -carouselItemRef.offsetWidth,
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


        <div class="carousel-header">
            <h2>{title}</h2>
            <div class="carousel-nav">
                <button on:click={scrollToLeft} disabled={atLeftEnd}>❮</button>
                <button on:click={scrollToRight} disabled={atRightEnd}>❯</button>
            </div>
        </div>


        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="carousel no-scrollbar no-padding"
            bind:this={carouselRef}
            on:mousedown="{start}"
            on:mouseup="{end}"
            on:mouseleave="{end}"
            on:mousemove="{move}"
            class:carousel-2={show2 === true}
            class:carousel-3={show3 === true}
            class:carousel-4={show4 === true}
            class:carousel-gap-1={gap1 === true}
            class:carousel-gap-2={gap2 === true}
            class:carousel-gap-3={gap3 === true}
        >
            <slot/>
        </div>

<style>


    .carousel-header {
        display: grid;
        align-items: center;
        justify-content: space-between;
        grid-auto-flow: row;
        margin-bottom: var(--unit-3);
        gap: var(--unit-2);
    }

    h2 {
        font-size: var(--h1);
    }

    .carousel {
        --carousel-gap: 1rem;
        --carousel-items-count: 3;
        --carousel-gap-total: calc(var(--carousel-gap) * (var(--carousel-items-count) - 1) / var(--carousel-items-count));
        --carousel-item-width: calc(100% / var(--carousel-items-count) - var(--carousel-gap-total));
    }

    .carousel-2 {
        --carousel-items-count: 2;
    }

    .carousel-3 {
        --carousel-items-count: 3;
    }

    .carousel-4 {
        --carousel-items-count: 4;
    }

    .carousel-gap-1 {
        --carousel-gap: var(--unit);
    }
    .carousel-gap-2 {
        --carousel-gap: var(--unit-2);
    }
    .carousel-gap-3 {
        --carousel-gap: var(--unit-3);
    }

    .carousel {
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        --webkit-overflow-scrolling: touch;
        gap: var(--carousel-gap);
        display: grid;
        scroll-padding: 15px;
        grid-auto-columns: 85%;
        grid-auto-flow: column;
        position: relative;
    }

    .carousel {
        grid-auto-columns: 85%;
        grid-auto-flow: column;
    }

    :global.carousel > * {
        scroll-snap-align: start;
		/* scroll-snap-stop: always; */
        cursor: grab;
    }

    :global.carousel > *:focus-within, :global.carousel > *:focus {
        cursor: grabbing;
    }

    .carousel-nav {
        display: none;
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

    @media(min-width: 992px) {
        .carousel {
            grid-auto-columns: var(--carousel-item-width);
        }

        .carousel-header {
            grid-auto-flow: column;
        }

        .carousel-nav {
            display: flex;
        }

    }
</style>
