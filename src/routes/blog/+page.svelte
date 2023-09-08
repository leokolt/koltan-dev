<script>
    export let data
    import {onMount} from 'svelte';
    import BlogItem from '$lib/components/BlogItem.svelte';
    import Seo from '$lib/components/globals/Seo.svelte';
    //import { dateFormat } from '$lib/utils/dateFormat.js';

    let visiblePosts = 8; //число изначально отображаемых постов
    let loadPosts = 6; //число подгружаемых статей

    function loadMore() {
      visiblePosts += loadPosts;
      sessionStorage.setItem('visiblePosts', visiblePosts);
    }

    onMount(() => {
      const storedVisiblePosts = sessionStorage.getItem('visiblePosts');
      if (storedVisiblePosts) {
        visiblePosts = parseInt(storedVisiblePosts);
      }
    });

    let posts = data.posts

    let searchValue = ''

    $: searchedPosts = posts.filter((post) => {
        const searchContent =  post.meta.title + post.meta.description
        //return post.meta.title.includes(searchTerm) || post.meta.description.includes(searchTerm)
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })

    $: searchedPosts.slice(0, visiblePosts);

</script>

<Seo title="Блог" description="Статьи о технологиях, туториалы и личное мнение" type="Blog" />

<div class="page">
    <div class="wrapper">
        <h1>Блог</h1>
        <input type="text" placeholder="Найти статьи" bind:value={searchValue} />
        <div class="page-blog">
            {#each searchedPosts.slice(0, visiblePosts) as {slug, meta: { title, description, date, tags }} }
                <BlogItem {slug} {title} {date} {tags} {description}  full={true}/>
            {/each}
        </div>
    </div>
</div>

 <button
    on:click={loadMore}
    id="loadmore"
    type="button"
    class="btn btn-secondary"
    disabled={visiblePosts >= data.posts.length}>
    {visiblePosts < data.posts.length ? 'Показать еще статьи' : 'Нет статей'}
  </button>

  <style>
    input {
        margin: var(--unit-3) 0 0;
        width: 80%;
        border: var(--border);
        border-radius: var(--radius);
        padding: var(--unit) var(--unit-2);
        font-size: var(--p);
        background: var(--color-bg);
        color: var(--color-primary);
        transition: var(--transition-cubic);
    }

    input:focus {
        outline: none;
        box-shadow: var(--shadow);
        transition: var(--transition-cubic);
        width: 90%;
    }

    .page {
        margin-top: var(--unit-2);
    }
    h1 {
        font-size: var(--h1);
    }
    .page-blog {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--unit-2);
        margin-top: var(--unit-3);
    }

    @media(min-width: 992px) {
        .page-blog {
            grid-template-columns: repeat(3, 1fr);
        }
        :global.page-blog > article:first-child {
            grid-column: 1 / 3;
        }
        :global.page-blog > article:first-child h3 a {
            font-size: var(--h3);
        }

        input {
            width: 40%;
        }
        input:focus {
            width: 50%;
        }
    }
  </style>
