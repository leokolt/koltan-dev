<script>
	let scrollPercent
    export let articleElement
    const onScroll = () => {
        scrollPercent = window.scrollY / articleElement.clientHeight;
    };
</script>

<style>
   .progress {
        width: 100%;
        height: 6px;
        right: 0;
        position: fixed;
        background: transparent;
        top: var(--header-height--small);
        overflow: hidden;
        z-index: 9;
    }

    .progress-line {
        background: var(--color-second);
        height: 100%;
        transition: var(--transition);
    }
</style>

<svelte:window on:scroll={onScroll} />

<div class="progress">
	<div class="progress-line" style="width: {(scrollPercent ?? 0) * 100}%" />
</div>
