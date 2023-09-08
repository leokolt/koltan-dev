<script>
    export let data
    import NextPrevPosts from '$lib/components/posts/NextPrevPosts.svelte';
    //import { onMount } from "svelte";
    import RelatedPosts from '$lib/components/posts/RelatedPosts.svelte';
    import { dateFormat } from '$lib/utils/dateFormat.js';
    import { plural } from "$lib/utils/pluralWord.js";

    import {transliterate} from '$lib/utils/latToRus.js'
    import Seo from '$lib/components/globals/Seo.svelte';
    import SharePost from '$lib/components/posts/SharePost.svelte';

    // import { page } from '$app/stores'
    // import Comments from '$lib/components/posts/Comments.svelte';

        // Определим начальную дату
        const startDate = new Date(data.date); // Здесь нужно указать свою начальную дату 23 - 01 - 20

        const startDateUpdate = new Date(data.update); // Здесь нужно указать свою начальную дату 23 - 01 - 20

        // Добавим 190 дней к начальной дате
        const targetDate = new Date(startDate.getTime() + (190 * 24 * 60 * 60 * 1000));

        const targetDateUpdate = new Date(startDateUpdate.getTime() + (190 * 24 * 60 * 60 * 1000));

        // Получим текущую дату
        const currentDate = new Date();

</script>

<Seo
    description={data.description}
    title={data.title}
    type="BlogPosting"
    generateOgImage={true}
/>

<article>
    <header>
        <div class="wrapper">
            <div class="post-header">
                <div class="post-header-title">

                    <h1>{ data.title }</h1>
                    {#if data.update}
                        <p>Обновлено {dateFormat(data.update)}<span class="post-meta-reading">{plural((data.reading), ' минута', ' минуты', ' минут')} на чтение</span></p>
                    {:else}
                        <p>Опубликовано {dateFormat(data.date)}<span class="post-meta-reading">{plural((data.reading), ' минута', ' минуты', ' минут')} на чтение</span></p>
                    {/if}
                </div>
                <div class="post-header-meta">
                    <p class="post-meta-description">{data.description}</p>
                </div>
            </div>
        </div>
    </header>

    <div class="wrapper-read">
        {#if targetDateUpdate >= targetDate && currentDate > targetDateUpdate}
            <div class="post-notice">
                Обратите внимание, что данная статья была обновлена более полугода назад и некоторые данные в ней могли устареть. Если вы используете код из этой статьи в своем проекте и он не работает, <a href="/contact" target="_blank">напишите</a> мне об этом
            </div>
        {:else if targetDate > targetDateUpdate && currentDate > targetDate}
            <div class="post-notice">
                Обратите внимание, что данная статья была опубликована более полугода назад и некоторые данные в ней могли устареть. Если вы используете код из этой статьи в своем проекте и он не работает, <a href="/contact" target="_blank">напишите</a> мне об этом
            </div>
        {/if}
        <div class="post-content">
            <svelte:component this={data.content}/>
        </div>
        {#if data.tags.length}
            <ul class="post-tags">
                {#each data.tags as tag}
                <li>
                    <a href="/blog/tag/{tag}">
                        {transliterate(tag)}
                    </a>
                </li>
                {/each}
            </ul>
        {/if}
        <a class="btn btn-donate" href="https://yoomoney.ru/to/4100117764019815" target="_blank">
            <div class="donate-icon">💸</div>
            <div>Если хотите, вы можете поддержать мою работу рублем. Я буду рад любой сумме. Нажатие на эту плашку перекинет вас на страницу Yoomoney</div>
        </a>
    </div>

    <footer>
        <div class="wrapper">
            <SharePost title={data.title} text={data.description}/>
            <NextPrevPosts currentPostTitle={data.title} />
            <RelatedPosts currentPostTitle={data.title} currentPostTags={data.tags}/>
        </div>
    </footer>

</article>

<style>
    article {
        margin-top: var(--unit-2);
    }
    header {
        margin-bottom: calc(1.5 * var(--unit-3));
    }
    .post-header {
        display: grid;
        gap: calc(2 * var(--unit-3));
        grid-template-columns: 1fr;
        align-items: center;
        /* border-bottom: 5px dashed var(--color-accent); */
        padding-bottom: calc(1.5 * var(--unit-3));
    }
    .post-header-title {
        position: relative;
        /* padding-right: calc(1 * var(--unit-3)); */
    }
    .post-header-title p {
        margin-top: var(--unit-2);
    }
    h1 {
        font-size: var(--h1);
    }
    .post-tags {
        list-style: none;
        padding: 0;
        margin: var(--unit) 0;
        display: flex;
        gap: var(--unit);
        flex-wrap: wrap;
    }
    .post-tags a {
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

    .post-tags a:hover {
        color: var(--color-primary);
        border-color: var(--color-primary);
    }

    .post-meta-description {
        font-size: var(--h5);
        line-height: 1.2;
        font-weight: 100;
    }
    .post-meta-reading {
        font-weight: 900;
        margin-left: var(--unit-2);
    }
    .post-meta-reading:before {
        content: '';
        background: var(--color-accent);
        width: var(--unit);
        height: var(--unit);
        display: inline-block;
        border-radius: 50%;
        margin-right: var(--unit-2);
    }

    .wrapper-read {
        max-width: 800px;
        margin: auto;
        padding: 0 15px;
        font-size: var(--read-font);
    }

    :global.post-content > * + *:not(pre) {
        margin-top: var(--unit-3);
    }

    :global.wrapper-read h2, :global.wrapper-read>h3, :global.wrapper-read>h4 {
        margin-top: calc(1.5 * var(--unit-3));
    }

    :global.wrapper-read a {
        color: var(--color-accent);
        text-decoration-style: wavy;
        -webkit-text-decoration-style: wavy;
        text-underline-offset: 4px;
        -webkit-text-underline-offset: 4px;
        text-decoration-line: underline;
        -webkit-text-decoration-line: underline;
        text-decoration-thickness: 2px;
        -webkit-text-decoration-thickness: 2px;
        text-decoration-color: var(--color-accent);
        -webkit-text-decoration-color: var(--color-accent);
        text-decoration-skip-ink: none;
        -webkit-text-decoration-skip-ink: none;
        transition: var(--transition);
    }

    :global.wrapper-read a:hover {
        text-decoration-color: transparent;
        -webkit-text-decoration-color: transparent;
    }

    :global.wrapper-read a[target="_blank"]:after {
        content: '🡭';
        display: inline-block;
        font-size: 50%;
        vertical-align: super;
    }

    .post-notice {
        background: var(--color-second);
        padding: var(--unit-2) var(--unit-3);
        border-radius: var(--radius);
        line-height: 1.3;
        color: #f7f7f7;
    }

    .post-notice a {
        text-decoration: underline wavy 2px var(--color-accent);
        color: var(--color-accent);
        transition: var(--transition);
    }

    .post-notice a:hover {
        text-decoration-thickness: 0px;
        -webkit-text-decoration-thickness: 0px;
    }

    :global strong {
        font-weight: 900;
    }

    .btn-donate {
        font-size: var(--p);
        background-color: var(--color-fg);
        color: #f7f7f7;
        padding: var(--unit);
        width: 100%;
        border-color: var(--color-fg);
        display: grid;
        grid-template-columns: 1fr 8fr;
        gap: var(--unit);
        align-items: center;
        text-decoration: none;
        text-align: left;
        font-size: var(--p2);
        justify-items: center;
    }

    .btn-donate:after {
        display: none;
    }

    .donate-icon {
        font-size: var(--h1);
    }

    .post-content {
        margin: var(--unit-2) 0;
    }

    footer {
        margin-top: var(--unit-3);
    }

    :global(blockquote) {
        border-radius: var(--radius);
        border: var(--border);
        font-size: var(--h4);
        color: var(--color-primary);
        padding: var(--unit-3);
        box-shadow: .7rem .7rem 0 var(--color-accent);
        height: 100%;
        background-color: var(--color-bg);
        position: relative;
    }

    :global(blockquote:before){
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' viewBox='0 0 512 512'%3E%3Ccircle cx='206.9' cy='299.9' r='205.1' fill='%23f7c90d' transform='rotate(-45.001 206.919 299.882)'/%3E%3Ccircle cx='299.5' cy='216.8' r='190.8' fill='none' stroke='%23231f20' stroke-miterlimit='10' stroke-width='40' transform='rotate(-45.001 299.468 216.778)'/%3E%3C/svg%3E");
        width: calc(1.5 * var(--unit-3));
        height: calc(1.5 * var(--unit-3));
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        left: -1.5rem;
        top: 0;
    }

    :global(blockquote > p) {
        line-height: 1;
    }

    :global.wrapper-read ul:not(.post-tags) {
        list-style: none;
        padding-left: 0;
    }

    :global.wrapper-read ul:not(.post-tags) li {
        position: relative;
        display: flex;
        align-items: flex-start;
        font-size: var(--p);
    }

    :global.wrapper-read ul:not(.post-tags) li + li{
        margin-top: var(--unit);
    }

    :global.wrapper-read ul:not(.post-tags) li:before {
        content: '';
        background: var(--color-accent);
        width: var(--unit);
        height: var(--unit);
        display: block;
        border-radius: 50%;
        margin-right: var(--unit);
        flex: none;
        margin-top: 7px;
    }

    @media(min-width: 992px) {
        .post-header {
            grid-template-columns: 4fr 2fr;
        }
    }
</style>
