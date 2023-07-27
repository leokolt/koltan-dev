<script>
    export let data
    import { dateFormat } from '$lib/utils/dateFormat.js';
console.log(data.next)

</script>

<svelte:head>
  <title>My blog - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>

<article>
    <h1>{ data.title }</h1>
    {#if data.categories.length}
    <ul>
        {#each data.categories as category}
          <li>
            <a href="/blog/category/{category}">
              {category}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
    <p>Published: {dateFormat(data.date)}</p>
    <svelte:component this={data.content} />
</article>




<!--
<script>
    export let data
    const { title, date, Content } = data
</script>

<article>
    <h1>{title}</h1>
    <p>Published: {date}</p>
    <Content />
</article>

-->
