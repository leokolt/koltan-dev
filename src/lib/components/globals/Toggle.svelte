<script>
	import { fly } from 'svelte/transition'
	import { theme, toggleTheme } from '$lib/utils/colorScheme.js'
    import Moon from '$lib/components/icons/Moon.svelte'
    import Sun from '$lib/components/icons/Sun.svelte'
</script>

<button class="btn" on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<span in:fly={{ y: 10 }}>
			<Moon />
		</span>
	{:else}
		<span in:fly={{ y: -10 }}>
			<Sun />
		</span>
	{/if}
</button>

<style>

</style>
