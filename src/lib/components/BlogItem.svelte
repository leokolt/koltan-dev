<script>
    import { fly } from 'svelte/transition';

    import { dateFormat } from '$lib/utils/dateFormat.js'
    import {transliterate} from '$lib/utils/latToRus.js'

    export let title = ''
    export let description = ''
    export let date = ''
    export let full = ''
    export let tags = ''
    export let slug = ''

</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<article class="blog-item" class:full={full === true} class:сarousel-item={full === false} tabindex="0" transition:fly={{ delay: 0, duration: 200, x: 0, y: 100, opacity: 0.5}}>

    <h3>
        <a href="/blog/{slug}">{title}</a>
    </h3>

    <time>{dateFormat(date)}</time>


    <p class="desc">{description}</p>

    {#if full === true}

        <ul>
            {#each tags as tag}
            <li>
                <a href="/blog/tag/{tag}">
                  {transliterate(tag)}
                </a>
              </li>
            {/each}
        </ul>

    {/if}


</article>

<style>
    .blog-item {
        border: var(--border);
        border-radius: var(--radius);
        display: flex;
        flex-direction: column;
        position: relative;
        margin-bottom: 2rem;
        padding: var(--unit-3);
        padding-bottom: calc(var(--unit-3) + 1rem);
    }

    .blog-item.full {
        padding-bottom: var(--unit-3);
    }

    time {
        border-radius: var(--radius);
        border: var(--border);
        text-align: center;
        margin: auto;
        display: block;
        width: fit-content;
        text-decoration: none;
        font-size: var(--p2);
        font-weight: 500;
        color: var(--color-primary);
        padding: var(--unit);
        margin-top: 0;
        transition: var(--transition-shadow);
        box-shadow: 0px 0px 0px var(--color-accent);
        background: var(--color-accent);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
    }

    h3 a {
        font-size: var(--h4);
        margin-bottom: var(--unit-2);
        display: block;
        font-weight: 900;
        text-decoration: none;
        color: var(--color-primary);
        line-height: 1.2;
        transition: var(--transition);
        text-decoration-style: wavy;
        -webkit-text-decoration-style: wavy;
        text-underline-offset: 1px;
        -webkit-text-underline-offset: 1px;
        text-decoration-line: underline;
        -webkit-text-decoration-line: underline;
        text-decoration-thickness: 3px;
        -webkit-text-decoration-thickness: 3px;
        text-decoration-color: transparent;
        -webkit-text-decoration-color: transparent;
        text-decoration-skip-ink: none;
        -webkit-text-decoration-skip-ink: none;
    }

    h3 a:hover {
        text-decoration-color: var(--color-accent);
        -webkit-text-decoration-color: var(--color-accent);
    }

    ul {
        list-style: none;
        padding: 0;
        margin: var(--unit-2) 0;
        display: flex;
        gap: var(--unit);
        flex-wrap: wrap;
    }

    ul a {
        text-decoration: none;
        color: var(--color-second);
        font-weight: 500;
        font-size: var(--p2);
        transition: var(--transition);
        border: var(--border);
        border-radius: var(--radius);
        padding: 1px 10px 5px;
        border-color: var(--color-second);
    }

    ul a:hover {
        color: var(--color-primary);
        border-color: var(--color-primary);
    }



    p:not(.desc) {
        margin-bottom: 30px;
    }

    p {
        font-size: var(--p);
        line-height: 1.3;
    }

    .desc {
        white-space: break-spaces;
        position: relative;
        height: auto;
    }



    @media(min-width: 992px) {
        .blog-item {
            padding: var(--unit-3);
        }
    }

</style>
