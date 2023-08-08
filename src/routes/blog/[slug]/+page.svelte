<script>
    export let data
    import NextPrevPosts from '$lib/components/chunks/NextPrevPosts.svelte';
    import { onMount } from "svelte";
    import RelatedPosts from '$lib/components/chunks/RelatedPosts.svelte';
    import { dateFormat } from '$lib/utils/dateFormat.js';
    import {readingTime} from '$lib/utils/readingTime.js'

let timeToRead = 0

onMount(() => {
        const content = document.querySelector(".text")?.textContent;
        // console.log(content)
        if (content) {
            timeToRead = readingTime(content);
        }
    })

</script>

<svelte:head>
  <title>My blog - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>

<article>
    <h1>{ data.title }</h1>
    <p  title={timeToRead}>{timeToRead}</p>
    {#if data.tags.length}
    <ul>
        {#each data.tags as tag}
          <li>
            <a href="/blog/tag/{tag}">
              {tag}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
    <p>Published: {dateFormat(data.date)}</p>
    <div class="text">
        <svelte:component this={data.content}/>

    </div>

</article>

<RelatedPosts currentPostTitle={data.title} currentPostTags={data.tags}/>

<NextPrevPosts currentPostTitle={data.title} />
