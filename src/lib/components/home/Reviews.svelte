<script>
    const reviews = [
        { title: 'stroyexpert', img: 'rev-1.jpg', source: 'из заказа на Кворк', content: 'У меня были ошибки на сайте в теме самого шаблона. Леонид быстро во всем разобрался, устранил все ошибки. Сейчас сайт работает отлично. Большое ему спасибо! Рекомендую Леонида всем. Работает быстро и профессионально! Молодец!' },
        { title: 'Suren-', img: 'rev-2.jpg', source: 'из заказа на Кворк', content: 'Огромное спасибо Леониду за оперативное погружение в задачи и четкое исполнение. Были найдены и исправлены дополнительные неточности, не входящие в основное ТЗ. Очень детально описаны работы и предложен ряд решений для улучшения работы. Рекомендуем к работе. Надеемся на продолжение сотрудничества.' },
        { title: 'АкадемПеревод3', img: 'rev-1.jpg', source: 'из заказа на Кворк', content: 'Я ищу заказы сам. Если вы пишите мне в мессенджеры или на почту' },
        { title: 'АкадемПеревод4', img: 'rev-1.jpg', source: 'из заказа на Кворк', content: 'Я ищу заказы сам. Если вы пишите мне в мессенджеры или на почту, то отвечать вам буду я, а не кто-то другой. Цена за работу определяется ее сложностью и количеством времени, которое необходимо на нее потратить, без процентов и накруток со стороны "помощников"' },
        { title: 'АкадемПеревод5', img: 'rev-1.jpg', source: 'из заказа на Кворк', content: 'Я ищу заказы сам. Если вы пишите мне' },
        { title: 'АкадемПеревод6', img: 'rev-1.jpg', source: 'из заказа на Кворк', content: 'Я ищу заказы сам. Если вы пишите мне в мессенджеры или на почту, то отвечать вам буду я, а не кто-то другой.' },
        { title: 'АкадемПеревод7', img: 'rev-1.jpg', source: 'из заказа на Кворк', content: 'Я ищу заказы сам. Если вы пишите мне в мессенджеры или на почту' },
    ];

</script>

<section>
    <div class="wrapper">
        <h2>Что обо мне говорят</h2>
        <div class="reviews-inner">
            {#each reviews as {title, source, content, img}}
                <div class="reviews-item">
                    <div class="reviews-item-header">
                        <img src="/img/revs/{img}" alt={title} class="">
                        <h3>{title}</h3>

                    </div>

                    <p>{content}</p>
                    <cite>{source}</cite>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    section {
        margin-top: 120px;
    }

    h2 {
        font-size: var(--h1);
        margin-bottom: var(--unit-3);
    }

    .reviews-inner {
        column-count: 1;
        column-gap: 20px;
    }

    .reviews-item {
        border-radius: var(--radius);
        border: var(--border);
        line-height: 1.3;
        color: var(--color-primary);
        padding: 15px 20px;
        page-break-inside: avoid;
        break-inside: avoid;
        margin-bottom: 20px;
        color: #292929;
    }

    .reviews-item:nth-child(3n+2) {
        background-color: var(--color-accent);
    }

    .reviews-item:nth-child(3n+1) {
        background-color: var(--color-second);
    }

    .reviews-item:nth-child(3n+3) {
        background-color: var(--color-reserve);
    }


    .reviews-item-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
    }

    h3 {
        font-size: var(--p);
    }

    img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: var(--radius);
    }

    p {
        font-size: var(--p2);
        margin-bottom: 10px;
    }

    cite {
        font-size: var(--p2);
        opacity: .8;
        font-weight: 100;
        font-style: normal;
    }

    cite:before {
        content: '—';
        margin-right: 5px;
        display: inline-block;
    }

    @media(min-width: 992px) {
        .reviews-inner {
            column-count: 3;
        }
    }

</style>
