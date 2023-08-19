<script>
    import Seo from "$lib/components/globals/Seo.svelte";

    import Hero from "$lib/components/home/Hero.svelte";
    import AboutMe from "$lib/components/home/AboutMe.svelte";
    import Marquee from "$lib/components/home/Marquee.svelte";
    import Skills from "$lib/components/home/Skills.svelte";
    import Benefits from "$lib/components/home/Benefits.svelte";
    import Works from "$lib/components/home/Works.svelte";
    import Callback from "$lib/components/home/Callback.svelte";
    import Reviews from "../lib/components/home/Reviews.svelte";

    import Modal from "$lib/components/globals/Modal.svelte";
    let showModal = false;

</script>
<Seo title="Сайт разработчика Колтан Леонида" description="Различные работы по сайтам - от простых правок до создания полноценных продуктов" type="WebPage" />

<Hero />
<Marquee/>
<AboutMe />
<Skills/>
<Works/>
<Callback />
<Benefits />
<Reviews/>

<button class="round" on:click={() => (showModal = true)}>Кнопка2</button>

<button class="round" on:click={() => (showModal = true)}>Кнопка</button>
<Modal bind:showModal>
    Жопао
</Modal>
