<script>
    import ContactForm from "$lib/components/globals/ContactForm.svelte";
    import Seo from "$lib/components/globals/Seo.svelte";
</script>

<Seo title="Контакты" description="Контакты Колтан Леонида" type="WebPage" />

<article>
    <div class="wrapper">
        <header>
            <h1>Напишите мне</h1>
        </header>
        <div class="page-content">
            <div class="wrapper-read">
                <ContactForm />
                <p>или используйте контакты в подвале страницы</p>
            </div>
        </div>
    </div>


</article>

<style>
    article {
        margin-top: var(--unit-2);
    }
    h1 {
        font-size: var(--h1);
        text-align: center;
    }
    .page-content {
        margin-top: var(--unit-3);
    }

    p {
        text-align: center;
        margin-top: 0;
    }
</style>
