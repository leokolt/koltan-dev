<script>
    export let data
    import {onMount} from 'svelte';
    import BlogItem from '$lib/components/BlogItem.svelte';
    //import { dateFormat } from '$lib/utils/dateFormat.js';

    let visiblePosts = 8;

    function loadMore() {
      visiblePosts += 6;
      sessionStorage.setItem('visiblePosts', visiblePosts);
    }

    onMount(() => {
      const storedVisiblePosts = sessionStorage.getItem('visiblePosts');
      if (storedVisiblePosts) {
        visiblePosts = parseInt(storedVisiblePosts);
      }
    });
  </script>

<div class="page">
    <div class="wrapper">
        <h1>Блог</h1>
        <div class="page-blog">
            {#each data.posts.slice(0, visiblePosts) as {slug, meta: { title, description, date, tags, reading }} }
                <BlogItem {slug} {title} {date} {tags} {description} {reading}  full={true}/>
            {/each}
        </div>
    </div>
</div>

  <!-- <h1>Блог</h1>

  <p>Мои статьи для вас</p>

  <ul>
    {#each data.posts.slice(0, visiblePosts) as post}
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
    .page-blog {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--unit-2);
        margin-top: var(--unit-3);
    }

    :global.page-blog > article:first-child {
        grid-column: 1 / 3;
    }

    :global.page-blog > article:first-child h3 a {
        font-size: var(--h3);
    }
  </style>
