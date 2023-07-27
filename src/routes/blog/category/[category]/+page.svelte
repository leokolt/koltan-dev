<script>
    export let data
    import { dateFormat } from '$lib/utils/dateFormat.js';
</script>

<h1>Категория: {data.category}</h1>

<p>Мои статьи для вас</p>

<ul>
    {#each data.posts as post}
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
