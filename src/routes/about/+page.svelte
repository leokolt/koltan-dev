<script>
    import Seo from "$lib/components/globals/Seo.svelte";

</script>

<Seo title="Обо мне" description="Краткая информация обо мне" type="WebPage" />

<article>
    <div class="wrapper">
        <header>
            <h1>Пара слов обо мне</h1>
        </header>
        <div class="page-content">
            <div class="wrapper-read">
                <p>Меня зовут Леонид Колтан. Я - фрилансер с 2018 года. Работаю с популярными CMS и чистым кодом, c Javascript и JS-фреймворками. Учился на гуманитария и стал технарем. Мне 36 лет и я не с пеленок в IT, но на сегодня в моем портфолио не мало различных проектов, постоянные клиенты и тысячи строк кода.</p>
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
    }
    .page-content {
        margin-top: var(--unit-3);
    }
</style>
