<script>
    export let bg = `bg` //accent, second, reserve
    export let summary = 'Если короче'
</script>

<details style="--box-shadow-color: var(--color-{bg})">
    <summary style="background-color:var(--color-{bg});">{summary}</summary>
    <slot />
</details>

<style>
    details {
        border-radius: var(--radius);
        border: var(--border);
        overflow: hidden;
        transition: var(--transition-cubic);
        box-shadow: 0px 0px 0px var(--box-shadow-color);
    }

    details:hover {
        box-shadow: 5px 5px 0px var(--box-shadow-color)
    }

    details[open]:hover {
        box-shadow: 0px 0px 0px var(--box-shadow-color);
    }

    details > summary {
        cursor: pointer;
        list-style: none;
        padding: var(--unit-2) var(--unit-3);
        background: var(--color-accent);
        border-radius: var(--radius);
        display: flex;
        align-items: center;
        line-height: 1;
        font-weight: 900;
    }

    details[open] > summary {
        border-radius: 0;
    }

    summary:before {
        content: "+";
        font-size: var(--h4);
        line-height: 0;
        margin-right: var(--unit-2);
        width: var(--unit);
        height: var(--unit);
        margin-top: 4px;
        font-weight: 400;
    }

    details[open] summary:before {
        content: "-";
    }

    :global(details > *:not(summary)) {
        padding: var(--unit) var(--unit-3);
    }

    @media(min-width: 992px) {
        summary:before {
            margin-right: var(--unit);
        }
    }
</style>

<!-- markup (zero or more items) goes here -->
