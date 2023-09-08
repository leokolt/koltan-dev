<script>
    import { fly } from 'svelte/transition';

    const qa = [
        { question: 'Как происходит оплата за твою работу?', answer: 'Оплата моих услуг производится по договоренности с заказчиком. Я могу работать с предоплатой и без, по договору, с выставлением счетов и закрывающих документов, а могу обычным переводом денег на карту. Я - самозанятый, плачу налоги согласно законам РФ и все доходы фиксирую в приложении' },
        { question: 'Ты указываешь, что работаешь и c Wordpress, и с React, и со Svelte. У тебя правда такой разнообразный стек?', answer: 'Я работаю и с тем и с другим, но мои знания по некоторым технологиям не столь обширны, чтобы браться, например, за создание сложного проекта в одиночку. Напишите мне, и мы попробуем разобраться в ваших потребностях и моих возможностях' },
        { question: 'Ты берешься только за крупные проекты?', answer: 'Совсем не так. Я выполняю огромное количество мелких правок на уже существующих проектах, создаю элементарные одностраничники, а также поддерживаю готовые сайты. Иногда делать правки не менее интересно и сложно, чем разрабатывать проект "с нуля"' },
        { question: 'Можешь ли ты предоставить какие-нибудь гарантии того, что работа будет выполнена?', answer: 'Существует возможность создания договора между мной и заказчиком, где будут прописаны возможные форс-мажорные обстоятельства. Кроме того, я всегда стараюсь предупредить клиента заранее о том, что не смогу взять ту или иную работу или сроки могут затянуться, и вернуть предоплаченные деньги. К сожалению, невозможно полностью обезопаситься от неожиданностей, но я стараюсь не допускать такого в своей работе' },
        // { question: 'Работаю быстро', answer: 'Tokyo is the capital of Japan.' },
        // { question: 'Могу работать без предоплаты', answer: 'Tokyo is the capital of Japan.' },
        // { question: 'Счета и чеки', answer: 'Tokyo is the capital of Japan.' },
    ];

    let visibleQa = 1;
    let loadQa = 1;

    function loadMore() {
        visibleQa += loadQa;
    }

    function backToFirst() {
        visibleQa = 1;
    }
</script>

<section>
    <div class="wrapper">
        <h2>Вопросы и ответы</h2>
        <div class="qa-inner">
            {#each qa.slice(0, visibleQa) as {question, answer}}
                <div class="qa-item" transition:fly={{ delay: 0, duration: 200, x: 0, y: -100, opacity: 0.5}}>
                    <div class="qa-item-left">
                        <img src="/user.svg" alt="user avatar" />
                        <div class="qa-item-content">
                            {question}
                        </div>
                    </div>
                    <div class="qa-item-right">
                        <div class="qa-item-content">
                            {answer}
                        </div>
                        <img src="/logo.svg" alt="user avatar" />
                    </div>
                </div>
            {/each}
        </div>
        {#if visibleQa < qa.length}
        <button
            on:click={loadMore}
            id="loadmore"
            type="button"
            class="btn">
                Еще вопрос
        </button>
        {:else}
        <button
            on:click={backToFirst}
            id="loadmore"
            type="button"
            class="btn">
                Все понятно
        </button>
        {/if}
    </div>
</section>

<style>
    section {
        margin-top: calc(4 * var(--unit-3));
        background-image: radial-gradient(#64BAAA 20%, #ffffff00 0%), radial-gradient(#F7C90D 20%, #ffffff00 0%);
        background-size: 20px 20px;
        background-position: 0 0, 10px 10px;
        padding: calc(1.5 * var(--unit-3)) 0;
        background-color: var(--color-second);
    }

    h2 {
        font-size: var(--h1);
        margin-bottom: var(--unit-3);
    }

    .qa-item {
        display: grid;
        gap: var(--unit-3) 0;
        grid-template: auto auto / repeat(5, 1fr);
    }

    .qa-item + .qa-item {
        margin-top: var(--unit-3)
    }

    .qa-item-left {
        grid-column: 1 / 5;
        grid-row: 1 / 2;
        justify-content: flex-start;
    }

    .qa-item-right {
        grid-column: 2 / 6;
        grid-row: 2 / 3;
        justify-content: flex-end;
    }

    .qa-item-left, .qa-item-right {
        display: flex;
        align-items: flex-end;
    }

    img {
        width: calc(1.6 * var(--unit-3));
        height: calc(1.6 * var(--unit-3));
        object-fit: cover;
        border-radius: var(--radius);
        border: var(--border);
        padding: 3px;
        background: #f7f7f7;
    }

    .qa-item-content {
        background: var(--color-accent);
        border-radius: 1.9rem 1.9rem 1.9rem 0;
        padding: var(--unit) var(--unit-3);
        margin-left: var(--unit);
        color: #292929;
    }

    .qa-item-right .qa-item-content {
        border-radius: 1.9rem 1.9rem 0 1.9rem;
        margin-right: var(--unit);
        margin-left: 0;
    }

    .btn {
        background-color: var(--color-bg);
    }

    @media(min-width: 992px) {
        .qa-item {
            grid-template: auto auto / 1fr 1fr 1fr;
        }
        .qa-item-left {
            grid-column: 1 / 3;
        }
        .qa-item-right {
            grid-column: 2 / 4;
        }
    }
</style>

<!-- markup (zero or more items) goes here -->
