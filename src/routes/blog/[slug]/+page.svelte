<script>
    export let data
    import NextPrevPosts from '$lib/components/chunks/NextPrevPosts.svelte';
    //import { onMount } from "svelte";
    import RelatedPosts from '$lib/components/chunks/RelatedPosts.svelte';
    import { dateFormat } from '$lib/utils/dateFormat.js';
    import { plural } from "$lib/utils/pluralWord";

    import {transliterate} from '$lib/utils/latToRus.js'
    import Seo from '$lib/components/globals/Seo.svelte';

</script>

<!-- <svelte:head>
  <title>My blog - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head> -->

<Seo
    description={data.description}
    title={data.title}

    generateOgImage={true}
    />

<article>
    <h1>{ data.title }</h1>
    <p  title={data.reading}>{plural((data.reading), ' минута', ' минуты', ' минут')}</p>
    {#if data.tags.length}
    <ul>
        {#each data.tags as tag}
          <li>
            <a href="/blog/tag/{tag}">
              {transliterate(tag)}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
    <p>Published: {dateFormat(data.date)}</p>
    <div class="wrapper-read">
        <svelte:component this={data.content}/>

    </div>

</article>

<RelatedPosts currentPostTitle={data.title} currentPostTags={data.tags}/>

<NextPrevPosts currentPostTitle={data.title} />

<style>
    .wrapper-read {
        max-width: 800px;
        margin: auto;
    }
</style>
