<!-- <script>
    export let data
    import { dateFormat } from '$lib/utils/dateFormat.js';

    import {transliterate} from '$lib/utils/latToRus.js'


</script>

<h1>Статьи по тегу "{firstToUpperCase(transliterate(data.tag))}"</h1>

<p>Мои статьи для вас</p>

<ul>
    {#each data.posts as post}
      <li>
        <h2>
          <a href={`/blog/${post.slug}`}>
            {post.meta.title}
          </a>
        </h2>
        Published {dateFormat(post.meta.date)}
      </li>
    {/each}
</ul> -->

<script>
    export let data
    import {onMount} from 'svelte';
    import BlogItem from '$lib/components/BlogItem.svelte';
    import {firstToUpperCase} from '$lib/utils/firstLetter.js'
    import {transliterate} from '$lib/utils/latToRus.js'
    import Seo from '$lib/components/globals/Seo.svelte';

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

    //let searchValue = ''

    // $: searchedPosts = posts.filter((post) => {
    //     const searchContent =  post.meta.title + post.meta.description
    //     //return post.meta.title.includes(searchTerm) || post.meta.description.includes(searchTerm)
    //     return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    // })

    // $: searchedPosts.slice(0, visiblePosts);

</script>

<Seo title={`Статьи по тегу «${firstToUpperCase(transliterate(data.tag))}»`} description={`Статьи по тегу «${firstToUpperCase(transliterate(data.tag))}» в блоге на сайте koltan.dev`} type="Blog" />

<div class="page">
    <div class="wrapper">
        <div>
            <h1>Статьи по тегу "{firstToUpperCase(transliterate(data.tag))}"</h1>
        </div>
        <div class="page-content">
            {#each posts.slice(0, visiblePosts) as {slug, meta: { title, description, date, tags }} }
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
    .page {
        margin-top: var(--unit-2);
    }
    h1 {
        font-size: var(--h1);
    }
    .page-content {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--unit-2);
        margin-top: var(--unit-3);
    }

    @media(min-width: 992px) {
        .page-content {
            grid-template-columns: repeat(3, 1fr);
        }
        :global(.page-content > article:first-child) {
            grid-column: 1 / 3;
        }
        :global(.page-content > article:first-child h3 a) {
            font-size: var(--h3);
        }


    }
  </style>
