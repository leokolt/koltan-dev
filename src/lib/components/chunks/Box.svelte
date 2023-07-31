<script>
    export let emoji
    export let round = 'all'
    export let bg = 'purple'
    // export let title = "Кнопка"
    export let margin
    export let padding
</script>

{#if emoji}
    <!-- <a class="btn {round} {bg}" role="button" {href} {title} style="margin: {margin}">{title}</a> -->
    <div class="box box-emoji {round} {bg}" style="margin: {margin}; padding: {padding}">
        <div class="emoji">{emoji}</div>
        <div><slot/></div>
    </div>
{:else}
    <!-- <button class="btn" class:round class:bg {title}>{title}</button> -->
    <div class="box {round} {bg}" style="margin: {margin}; padding: {padding}">
        <slot/>
    </div>
{/if}


<style>
    .box {
        border-radius: 15px;
        border: 2px solid var(--color-primary);
        box-shadow: 1px 1px 0 var(--color-primary), 2px 2px 0 var(--color-primary), 3px 3px 0 var(--color-primary);
        background: var(--color-green);
        padding: 20px;
        /* cursor: pointer; */
        /* transition: box-shadow .25s cubic-bezier(.645,.045,.355,1),transform .25s cubic-bezier(.645,.045,.355,1); */
        text-decoration: none;
        color: var(--color-primary);
        display: block;
        width: fit-content;
        line-height: 1.2;
        font-size: var(--p);
        /* font-weight: 700; */
    }

    .box-emoji {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .emoji {
        font-size: var(--h4);
    }


    .box.top-left {
        border-top-left-radius: 0;
    }

    .box.top-right {
        border-top-right-radius: 0;
    }

    .box.bottom-right {
        border-bottom-right-radius: 0;
    }

    .box.bottom-left {
        border-bottom-left-radius: 0;
    }

    .box.purple {
        background: var(--color-purple)
    }

    .box.green {
        background: var(--color-green)
    }

    .box.blue {
        background: var(--color-blue)
    }

    .box.yellow {
        background: var( --color-yellow)
    }

    .btn.red {
        background: var( --color-red)
    }

    /* .btn:hover {
        box-shadow: 1px 1px 0 var(--color-primary), 2px 2px 0 var(--color-primary);
        transform: translate(1px, 1px);
    }

    .btn:active {
        box-shadow: none;
        transform: translate(3px, 3px);
    } */
</style>
