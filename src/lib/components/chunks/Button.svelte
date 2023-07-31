<script>
    export let href
    export let round = 'all'
    export let bg = 'purple'
    export let title = "Кнопка"
    export let margin
</script>

{#if href}
    <a class="btn {round} {bg}" role="button" {href} {title} style="margin: {margin}">{title}</a>
{:else}
    <button class="btn" class:round class:bg {title}>{title}</button>
{/if}


<style>
    .btn {
        border-radius: 15px;
        border: 2px solid var(--color-primary);
        box-shadow: 1px 1px 0 var(--color-primary), 2px 2px 0 var(--color-primary), 3px 3px 0 var(--color-primary);
        background: var(--color-green);
        padding: 20px;
        cursor: pointer;
        transition: box-shadow .25s cubic-bezier(.645,.045,.355,1),transform .25s cubic-bezier(.645,.045,.355,1);
        text-decoration: none;
        color: var(--color-primary);
        display: block;
        width: fit-content;
        line-height: 1;
        font-weight: 700;
        font-size: var(--p);
    }

    .btn.top-left {
        border-top-left-radius: 0;
    }

    .btn.top-right {
        border-top-right-radius: 0;
    }

    .btn.bottom-right {
        border-bottom-right-radius: 0;
    }

    .btn.bottom-left {
        border-bottom-left-radius: 0;
    }

    .btn.purple {
        background: var(--color-purple)
    }

    .btn.green {
        background: var(--color-green)
    }

    .btn.blue {
        background: var(--color-blue)
    }

    .btn.yellow {
        background: var( --color-yellow)
    }

    .btn.red {
        background: var( --color-red)
    }

    .btn:hover {
        box-shadow: 1px 1px 0 var(--color-primary), 2px 2px 0 var(--color-primary);
        transform: translate(1px, 1px);
    }

    .btn:active {
        box-shadow: none;
        transform: translate(3px, 3px);
    }
</style>
