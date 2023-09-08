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
    import Price from "$lib/components/home/Price.svelte";
    import Links from "../lib/components/home/Links.svelte";
    import Posts from "../lib/components/home/Posts.svelte";
    import Questions from "../lib/components/home/Questions.svelte";
    import Steps from "../lib/components/home/Steps.svelte";



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
<Price />
<Links />
<Posts />
<Questions />
<Steps />
