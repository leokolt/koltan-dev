<script>
    export let bg = accent
    export let emoji = undefined
    export let title = undefined
    export let text = "Текст алерта"
</script>

<div class="alert" style="background-color:var(--color-{bg}); grid-template-columns: {title ? '1fr' : 'auto auto'}">

    {#if emoji || title}
        <div class="alert-header">
            {#if emoji}
                <span>{emoji}</span>
            {/if}
            {#if title}
                <h4>{title}</h4>
            {/if}
        </div>
    {/if}
    <p>
        {text}
    </p>
</div>

<style>
    .alert {
        border-radius: var(--radius);
        padding: var(--unit-3);
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: var(--unit);
    }

    .alert-header {
        font-size: var(--h4);
    }

    span {
        margin-right: var(--unit);
    }

    h4 {
        display: inline-block;
    }

    p {
        font-size: var(--p);
        line-height: 1.3;
    }
</style>

<!-- markup (zero or more items) goes here -->
