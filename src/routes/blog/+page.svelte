<script>
    export let data
    import { dateFormat } from '$lib/utils/dateFormat.js';

    let currentItems = 1;




</script>

<h1>Блог</h1>

<p>Мои статьи для вас</p>

<ul>

    <!-- {#each data.posts as post} -->

    {#each data.posts.slice(0, currentItems) as post}
      <li>
        <h2>
          <a href={`/blog/${post.path}`}>
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

<!-- <LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/> -->
