<script>
    export let data
    import { dateFormat } from '$lib/utils/dateFormat.js';

    import {transliterate} from '$lib/utils/latToRus.js'

    import {firstToUpperCase} from '$lib/utils/firstLetter.js'
</script>

<h1>Категория: {firstToUpperCase(transliterate(data.tag))}</h1>

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
</ul>
