<script>
    const reviews = [
        { title: 'stroyexpert', img: 'rev-1.jpg', source: 'из заказа на Кворк', content: 'У меня были ошибки на сайте в теме самого шаблона. Леонид быстро во всем разобрался, устранил все ошибки. Сейчас сайт работает отлично. Большое ему спасибо! Рекомендую Леонида всем. Работает быстро и профессионально! Молодец!' },
        { title: 'Suren-', img: 'rev-2.jpg', source: 'из заказа на Кворк', content: 'Огромное спасибо Леониду за оперативное погружение в задачи и четкое исполнение. Были найдены и исправлены дополнительные неточности, не входящие в основное ТЗ. Очень детально описаны работы и предложен ряд решений для улучшения работы. Рекомендуем к работе. Надеемся на продолжение сотрудничества.' },
        { title: 'mpmail', img: 'rev-5.jpg', source: 'из заказа на Кворк', content: 'Добавление в каталог шаблона подразделов. Настройка адаптивности, правка URL. Работа выполнена профессионально (быстро и четко). Рекомендую данного исполнителя!' },
        { title: 'bestsalut', img: 'rev-4.jpg', source: 'из заказа на Кворк', content: 'Необходимо было оперативно исправить карточку товара на сайте (Wordpress). Леонид откликнулся на наш проект, предложил меньшую цену, чем было заявлено, и сделал все в лучшем виде за пару часов. Крайне рекомендую, большое спасибо Леониду' },
        { title: 'Paulusbal', img: 'rev-6.jpg', source: 'из заказа на Кворк', content: 'Быстро, компетентно, точно. Два  разработчика разводили руками над задачей. Леонид все быстро решил. Спасибо!' },
        { title: 'pawellcom', img: 'rev-3.jpg', source: 'из заказа на Кворк', content: 'Обращались к Леониду за доработкой интернет-магазина на Wordpress,  Леонид быстро откликнулся, предложил адекватную цену, поэтому выбрали работу с ним. Во время работы Леонид делал все оперативно, был внимателен к пожеланиями комментариям по доработкам, рекомендуем как профессионала с качественной работой, спасибо за отличное  сотрудничество, будем и дальше работать' },
        { title: 'stas_rozz', img: 'rev-7.jpg', source: 'из заказа на Кворк', content: 'Профессионально, качественно и очень быстро! Леонид развернул нам сайт на Вордпрессе - со скоростью света))) Записал видеоинструкции и помог с настройками. Всегда на связи и молниеносно и профессионально решал стоящие задачи на 110%. Рекомендую сотрудничать!' },
        { title: 'Alexiy_ART', img: 'rev-8.jpg', source: 'из заказа на Кворк', content: 'Леонид быстро и качественно справился с поставленной задачей (Редактирование сайта)  До начала работы обговорили все нюансы, и только после начал выполнять заказ.   В процессе выполнения, давал комментарии  о проделанной работе и сразу вносились корректировки (очень удобно). Заказ сдан раньше срока!' },
        { title: 'Partnerkom', img: 'rev-9.jpg', source: 'из заказа на Кворк', content: 'Леонид справился с поставленной задачей быстро и качественно. К работе подошел ответственно, предварительно уточнив все ньансы предстоящей работы. Спасибо за приятный бонус. Рекомендую, человек знает, что делает.' },
        { title: 'Pismenny', img: 'rev-10.jpg', source: 'из заказа на Кворк', content: 'Работа выполнена в срок. Исполнитель проявил креативность в решении сложных вопросов и выполнил все требования по тз. Будем сотрудничать в дальнейшем - спасибо!' },
        { title: 'gamboris', img: 'rev-11.jpg', source: 'из заказа на Кворк', content: 'Работа выполнена очень оперативно и качественно. Плюс Леонид сделал несколько дополнительных небольших работ, необходимость которых нам не приходили в голову. Причем за те же деньги)). Редкий случай, когда от взаимодействия со специалистом на Kwork остаются приятные впечатления не только от его работы, но и от переписки - все четко, быстро и по делу. Спасибо!' },
        { title: 'imos', img: 'rev-12.jpg', source: 'из заказа на Кворк', content: 'Отличный исполнитель. всё оперативно выполнил и по каждому пункту резюмировал информацию, что было полезно. будем работать еще, спасибо)' },
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
        <a href="https://kwork.ru/user/cazumbra#reviews" class="btn btn-review" target="_blank">Все отзывы с биржи <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="var(--color-primary)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.343 15.657 15.657 4.343m0 0v9.9m0-9.9h-9.9"/></svg></a>
    </div>
</section>

<style>
    section {
        margin-top: calc(4 * var(--unit-3));
    }

    h2 {
        font-size: var(--h1);
        margin-bottom: var(--unit-3);
    }

    .reviews-inner {
        column-count: 1;
        column-gap: var(--unit-2);
    }

    .reviews-item {
        border-radius: var(--radius);
        border: var(--border);
        line-height: 1.3;
        color: var(--color-primary);
        padding: var(--unit-2);
        page-break-inside: avoid;
        break-inside: avoid;
        margin-bottom: var(--unit-2);
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
        gap: var(--unit);
        margin-bottom: var(--unit);
    }

    h3 {
        font-size: var(--p);
    }

    img {
        width: 2rem;
        height: 2rem;
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

    .btn-review svg {
        display: inline-block;
        height: var(--p2);
        width: var(--p2);
        vertical-align: super;
    }

    @media(min-width: 992px) {
        .reviews-inner {
            column-count: 3;
        }

        img {
            width: 2.5rem;
            height: 2.5rem;
        }
    }

</style>
