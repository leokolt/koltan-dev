<script>
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
<div class="work-item" class:full={full === true} class:сarousel-item={full === false} tabindex="0">
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
            <a href={link} target="_blank" >Перейти 🡭</a>
        {/if}
    </div>


</div>

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
        flex-direction: row-reverse;
        position: relative;
        margin-bottom: 50px;
    }

    .image {
        border: var(--border);
        border-radius: var(--radius);
        margin: auto 15px 15px;
    }

    .work-item.full .image {
        margin: 30px;
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
        font-size: var(--p);
        font-weight: 900;
        color: var(--color-primary);
        padding: 10px 20px;
        margin-top: 0;
        transition: var(--transition-shadow);
        box-shadow: 0px 0px 0px var(--color-accent);
        cursor: pointer;
        background: var(--color-accent);
        position: absolute;
        right: -30px;
        top: -30px;
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
        padding: 10px 20px;
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
        z-index: 9999;
        position: relative;
        transition: var(--transition);
    }

    .collapse-btn:hover {
        text-decoration-color: transparent;
    }

    @media(min-width: 992px) {
        .content {
            padding: var(--unit-3);
        }

        .image {
            margin: auto var(--unit-3) var(--unit-3);
        }
    }

</style>
