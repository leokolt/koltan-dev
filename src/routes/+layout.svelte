<script>
    import Header from '$lib/components/globals/Header.svelte'
    import Footer from '$lib/components/globals/Footer.svelte'
    import '$lib/styles/style.css'

    import { fly } from 'svelte/transition'
    export let data


</script>

<Header/>

{#key data.currentRoute}
    <main in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ y: 200, duration: 300 }}>
    <slot />
    </main>
{/key}

<Footer/>
