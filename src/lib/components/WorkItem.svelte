<script>
    import { fly } from 'svelte/transition';

    export let title = ''
    export let excerpt = ''
    export let image = ''
    export let full = ''
    export let categories = ''
    export let link = ''
    export let description = ''
    export let year = ''
    export let collapse = ''


    let cats = []
    if (categories) {
        cats = categories.split(',')
    }

    let collapsed = false


</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<article class="work-item" class:full={full === true} class:сarousel-item={full === false} tabindex="0" transition:fly={{ delay: 0, duration: 200, x: 0, y: 100, opacity: 0.5}}>
    <div class="content">
        <h3>{title}</h3>
        {#if full === false}

            <p>{excerpt}</p>

        {:else}

            <time>{year}</time>
            {#each cats as cat}
                <sup>{cat}</sup>
            {/each}
            <p class="desc" class:collapsed ={collapse && !collapsed}>{description}</p>
            {#if collapse}
            <button class="collapse-btn" on:click={() => collapsed = !collapsed}>
                {!collapsed ? "Развернуть +" : "Свернуть -"}
            </button>
            {/if}
        {/if}
    </div>
    <div class="image">
        <img src={image} alt={title}>
        {#if full}
            <a href={link} target="_blank" >Перейти &#129141;</a>
        {/if}
    </div>


</article>

<style>
    .work-item {
        border: var(--border);
        border-radius: var(--radius);
        display: flex;
        flex-direction: column;
    }

    .сarousel-item {
        min-width: calc((100% / 2 - 10px));
    }

    .work-item.full {
        position: relative;
        margin-bottom: calc(2.5 * var(--unit-3));
        flex-direction: column;
    }

    .image {
        border: var(--border);
        border-radius: var(--radius);
        margin: auto 15px 15px;
    }

    .work-item.full .image {
        margin: var(--unit-3);
        flex: 1 1 35%;
        position: relative;
    }

    .image img {
        border-radius: var(--radius);
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .content {
        padding: var(--unit-3);
        padding-bottom: 0;
        flex: 1 1 65%;
    }

    .work-item.full .content {
        padding-top: calc(2 * var(--unit-3));
    }

    time {
        border-radius: var(--radius);
        border: var(--border);
        text-align: center;
        margin: auto;
        display: block;
        width: fit-content;
        text-decoration: none;
        font-size: var(--p);
        font-weight: 900;
        color: var(--color-primary);
        padding: var(--unit) var(--unit-2);
        margin-top: 0;
        transition: var(--transition-shadow);
        box-shadow: 0px 0px 0px var(--color-accent);
        background: var(--color-accent);
        position: absolute;
        /* right: -30px; */
        top: calc(-1.5 * var(--unit-3));

        right: unset;
        left: 50%;
        transform: translateX(-50%);
    }

    sup {
        color: #f7f7f7;
        font-size: var(--p3);
        background: var(--color-second);
        border-radius: 999PX;
        padding: 1px 10px;
        line-height: 1;
    }

    sup+sup {
        margin-left: 5px;
    }

    a {
        cursor: pointer;
        margin-right: 15px;
        padding: var(--unit);
        border: var(--border);
        border-radius: var(--radius);
        position: absolute;
        width: calc(100% - 30px);
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 15px;
        background: var(--color-bg);
        left: 15px;
        text-decoration: none;
        color: var(--color-primary);
        font-size: var(--p);
        transition: var(--transition);
    }

    a:hover {
        background: var(--color-reserve)
    }

    h3 {
        font-size: var(--h4);
        margin-bottom: var(--unit-2);
        display: inline-block;
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


    p.desc.collapsed {
        height: calc(var(--p) * 1.3 * 8);
        overflow: hidden;
    }

    .desc.collapsed:after {
        content: " ";
        display: block;
        position: relative;
        height: 100px;
        background: linear-gradient(180deg, transparent 0%, var(--color-bg) 100%);
        border-radius: 8px;
        z-index: 0;
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    .collapse-btn {
        font-size: var(--p3);
        color: var(--color-primary);
        cursor: pointer;
        text-decoration: underline dotted;
        text-decoration-color: var(--color-primary);
        text-underline-offset: 4px;
        display: inline-block;
        z-index: 9;
        position: relative;
        transition: var(--transition);
    }

    .collapse-btn:hover {
        text-decoration-color: transparent;
    }

    @media(min-width: 992px) {
        .work-item.full {
            flex-direction: row-reverse;
            margin-bottom: calc(1.5 * var(--unit-3));
        }

        .work-item.full .content {
            padding-top: var(--unit-3);
        }
        .content {
            padding: var(--unit-3);
        }

        .image {
            margin: auto var(--unit-3) var(--unit-3);
            max-height: 16rem;
            min-height: 16rem;
        }

        time {
            right: calc(-1 * var(--unit-3));
            transform: unset;
            left: unset;
            top: calc(-1 * var(--unit-3));
        }
    }

</style>
