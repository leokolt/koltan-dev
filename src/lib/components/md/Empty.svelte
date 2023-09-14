<script>
    export let bg = accent
    export let border = true
</script>

<div class="empty" style="background-color:var(--color-{bg}); border: {border ? 'var(--border)' : 'none'}">
    <slot/>
</div>

<style>
    .empty {
        border-radius: var(--radius);
        padding: var(--unit-3);
    }
</style>

<!-- markup (zero or more items) goes here -->
