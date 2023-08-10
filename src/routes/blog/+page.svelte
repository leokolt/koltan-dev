<!-- <script>
    export let data
    import { dateFormat } from '$lib/utils/dateFormat.js';

    let currentItems = 1;




</script>

<h1>Блог</h1>

<p>Мои статьи для вас</p>

<ul>

    {#each data.posts.slice(0, currentItems) as post}
      <li>
        <h2>
          <a href={`/blog/${post.slug}`}>
            {post.meta.title}
          </a>
        </h2>
        Published {dateFormat(post.meta.date)}
      </li>
    {/each}

</ul>


{#if currentItems < data.posts.length}
 <button
    on:click={() => currentItems = currentItems + 1}
    id="loadmore"
    type="button"
    class="btn btn-secondary">
    Show more
  </button>
{:else if  currentItems >= data.posts.length}
 <button
    id="loadmore"
    type="button"
    class="btn btn-secondary"
    disabled>
   Нет статей
  </button>
{/if}
 -->

 <script>
    export let data
  import {onMount} from 'svelte';
  import { dateFormat } from '$lib/utils/dateFormat.js';

    let visiblePosts = 1;

    function loadMore() {
      visiblePosts += 1;
      sessionStorage.setItem('visiblePosts', visiblePosts);
    }

    onMount(() => {
      const storedVisiblePosts = sessionStorage.getItem('visiblePosts');
      if (storedVisiblePosts) {
        visiblePosts = parseInt(storedVisiblePosts);
      }
    });
  </script>

  <h1>Блог</h1>

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
  </ul>


 <button
    on:click={loadMore}
    id="loadmore"
    type="button"
    class="btn btn-secondary"
    disabled={visiblePosts >= data.posts.length}>
    {visiblePosts < data.posts.length ? 'Показать еще статьи' : 'Нет статей'}
  </button>
