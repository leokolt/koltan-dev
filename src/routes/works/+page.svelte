

<script>
    import { onMount } from "svelte";

    import  works from "../../content/works/works.json";
    import WorkItem from "$lib/components/WorkItem.svelte";

    const splitCats = works.flatMap((w) => w.categories.split(', '));
    const categories = Array.from(new Set(splitCats));

    const splitYear = works.flatMap((w) => Number(w.year));
    const years = Array.from(new Set(splitYear));

    let selectedCat
    let selectedYear

    function handleClickCategory(cat) {
        selectedCat = cat === "Все категории" ? null : cat;
    }

    function handleClickYear(year) {
        selectedYear = year === "Все годы" ? null : year;
    }

    let filteredWork

    $: {
        filteredWork = works.filter((w) => {
            const catFilter = !selectedCat || w.categories.includes(selectedCat);
            const yearFilter = !selectedYear || w.year === selectedYear;
            return catFilter && yearFilter;
        });
    }


    let visiblePosts = 8; //число изначально отображаемых постов
    let loadPosts = 6; //число подгружаемых статей


    function loadMore() {
      visiblePosts += loadPosts;
      //sessionStorage.setItem('visiblePosts', visiblePosts);
    }

    // onMount(() => {
    //     const storedVisiblePosts = sessionStorage.getItem('visiblePosts');
    //     if (storedVisiblePosts) {
    //         visiblePosts = parseInt(storedVisiblePosts);
    //     }
    // });


    $:  filteredWork.slice(0, visiblePosts);


</script>

<div class="page">
    <div class="wrapper">
        <h1>Портфолио</h1>
        <div class="filter">
            <div>
                <button class="btn btn-filter" class:selected={!selectedCat || selectedCat === null} on:click={() => handleClickCategory("Все категории")}>
                    Все категории
                </button>
                {#each categories as cat}
                    <button class="btn btn-filter" class:selected={selectedCat === cat} on:click={() => handleClickCategory(cat)}>{cat}</button>
                {/each}
            </div>
            <div>
                <button class="btn btn-filter" class:selected={!selectedYear || selectedYear === null} on:click={() => handleClickYear("Все годы")}>
                    Все годы
                </button>
                {#each years as year}
                    <button class="btn btn-filter" class:selected={selectedYear === year} on:click={() => handleClickYear(year)}>{year}</button>
                {/each}
            </div>
        </div>

        <div class="page-works">
            {#if filteredWork.length == 0}
                <h4>Не найдено работ. Попробуйте перефильтровать :-) </h4>
            {:else}
                {#each filteredWork.slice(0, visiblePosts) as {title, image, year, categories, description, link, collapse} }
                    <WorkItem {title} {image} {year} {link} {description} {categories} {collapse} full={true}/>
                {/each}
                <button
                on:click={loadMore}
                id="loadmore"
                type="button"
                class="btn"
                disabled={visiblePosts >= filteredWork.length}>
                    {visiblePosts < filteredWork.length ? 'Больше работ' : 'Нет работ'}
            </button>
            {/if}
        </div>
    </div>
</div>



<style>
    .page {
        margin-top: var(--unit-2);
    }
    h1 {
        font-size: var(--h1);
    }

    .btn-filter {
        display: inline-block;
        cursor: pointer;
        font-size: var(--p);
        margin-right: 15px;
        padding: 10px 20px;
    }

    .selected {
        background: var(--color-accent)
    }

    .page-works {
        margin-top: var(--unit-3);
    }

    h4 {
        font-size: var(--h4);
        text-align: center;
    }
</style>
