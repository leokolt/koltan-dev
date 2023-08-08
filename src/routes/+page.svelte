<script>
    import Seo from "$lib/components/globals/Seo.svelte";

    import Hero from "$lib/components/home/Hero.svelte";
    import AboutMe from "$lib/components/home/AboutMe.svelte";
    import Marquee from "$lib/components/home/Marquee.svelte";
    import Skills from "$lib/components/home/Skills.svelte";
    import Benefits from "$lib/components/home/Benefits.svelte";
    import Works from "$lib/components/home/Works.svelte";

</script>
<Seo title="Сайт разработчика Колтан Леонида" description="Различные работы по сайтам - от простых правок до создания полноценных продуктов" type="WebPage" />

<Hero />
<Marquee/>
<AboutMe />
<Skills/>
<Benefits />
<Works />
