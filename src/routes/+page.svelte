<script>
    import Hero from "$lib/components/home/Hero.svelte";
    import AboutMe from "$lib/components/home/AboutMe.svelte";
    import Marquee from "$lib/components/home/Marquee.svelte";
    import Skills from "$lib/components/home/Skills.svelte";
</script>

<svelte:head>
  <title>Мой сайт</title>
  <meta property="og:title" content="Мой сайт" />
</svelte:head>

<Hero />
<AboutMe />
<Marquee/>
<Skills/>
