<script>
    import { calculateTime } from "$lib/utils/timeInterval";
    import { plural } from "$lib/utils/pluralWord";
    import Box from "../chunks/Box.svelte";

    const points = [
        {
            title: `Более ${plural(calculateTime("09/01/2018"), 'года', 'лет', 'лет')}`,
            desc: 'в разработке веб-сайтов'
        },
        {
            title: `Более ${plural(100, 'проекта', 'проектов', 'проектов')}`,
            desc: 'выполненных на различном стеке'
        },
        {
            title: `Более ${plural(300, 'клиента', 'клиентов', 'клиентов')}`,
            desc: 'довольных качеством моей работы'
        },
    ]

</script>

<section>
    <div class="wrapper">
        <div class="aboutme-inner">
            <div class="">
                <h2>Немного обо мне</h2>
                <p>
                    Меня зовут Леонид Колтан. Я - фрилансер с 2018 года. Работаю с популярными CMS и чистым кодом, работаю и изучаю Javascript и JS-фреймворки. Учился на гуманитария, но стал технарем, а полученые занания помогают мне в работе.
                </p>
                <p>
                    Мне {plural(calculateTime("07/03/1987"), 'год', 'года', 'лет')} и долгое время моя деятельность не была связана с IT, но я занимался любимым делом в качестве хобби. На сегодня в моем портфолио не мало различных проектов, постоянные клиенты и тысячи строк кода.
                </p>
            </div>
            <div class="aboutme-center">
                <Box bg="yellow" round="top-left" padding="20px 50px" >
                    <img src="/img/aboutme.svg" alt="about me"/>
                </Box>
            </div>
            <div class="aboutme-right">
                {#each points as {title, desc}}
                    <div>
                        <p class="title">{title}</p>
                        <p class="desc">{desc}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    section {
        margin-top: 80px;
    }

    .aboutme-inner {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .aboutme-inner > div {
        flex: 1;
    }

    h2 {
        font-size: var(--h4);
        margin-bottom: 10px;
    }

    .aboutme-inner p:not(.title, .desc) {
        margin-bottom: 20px;
    }

    .aboutme-center {
        display: flex;
        justify-content: center;
    }

    .aboutme-right {
        margin-top: 30px;
        text-align: left;
    }

    .aboutme-right > div {
        margin-bottom: 30px;
    }

    img {
        width: 200px;
        width: 100%;
        height: auto;
    }

    .title {
        font-weight: 900;
    }

    .desc {
        color: var(--color-gray)
    }

    @media(min-width: 992px) {
        .aboutme-inner {
            flex-direction: row;
        }

        .aboutme-right {
            text-align: right;
        }


        img {
            width: 200px;
        }

    }
</style>
