<script>
    export let title
    export let excerpt
    export let image
    //export let categories
    // export let link
    // export let description
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="сarousel-item" tabindex="0">
    <div class="content">
        <h3>{title}</h3>
        <p>{excerpt}</p>
    </div>
    <div class="image">
        <img src={image} alt={title}>
    </div>

    <!-- {year}
    {categories}

    <a href={link} target="_blank" >Перейти</a> -->
</div>

<style>
    .сarousel-item {
        min-width: calc((100% / 2 - 10px));
        border: var(--border);
        border-radius: var(--radius);
        display: flex;
        flex-direction: column;
    }

    .image {
        border: var(--border);
        border-radius: var(--radius);
        margin: auto 30px 30px;
    }

    .image img {
        border-radius: var(--radius);
    }

    .content {
        padding: 30px;
        padding-bottom: 0;
    }

    h3 {
        font-size: var(--h4);
        margin-bottom: 16px;
    }

    p {
        font-size: var(--p);
        line-height: 1.3;
        margin-bottom: 30px;
    }
</style>
