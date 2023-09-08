<script>
    import Modal from "$lib/components/globals/Modal.svelte";
    import ContactForm from "../globals/ContactForm.svelte";
    let showModal = false;

    const prices = [
        { title: 'По-мелочи', amount: 'от 500₽', desc: 'Небольшие правки и рекомендации по работе', list: ['Мелкие правки', 'Рекомендация и консультация', 'Установка темы и плагинов на WordPress', 'Стилизация небольших блоков', 'и многое другое' ] },
        { title: 'По-среднему', amount: 'от 1500₽', desc: 'Сложные правки, верстка страниц и блоков', list: ['Сложные правки', 'Верстка страниц', 'Верстка и внедрение блоков на сайт', 'Ускорение и оптимизация сайтов', 'Создание не сложного функционала на сайтах', 'и многое другое' ] },
        { title: 'По-крупному', amount: 'от 5000₽', desc: 'Создание сайтов, внедрение сложных функций', list: ['Создание сайтов на CMS, фреймворках и HTML', 'Верстка сайтов', 'Внедрение сложных функций на разных языках', 'и многое другое'] }
    ];

</script>

<section>
    <div class="wrapper">
        <h2>Стоимость моих услуг</h2>
        <div class="price-inner">
            {#each prices as {title, amount, desc, list}}
                <div class="price-item">
                    <div class="price-item-header">
                        <h4>{title}</h4>
                        <p class="price-item-amount">{amount}</p>
                        <p>{desc}</p>
                    </div>
                    <div class="price-item-footer">
                        <ul>
                            {#each list as l}
                                <li>{l}</li>
                            {/each}
                        </ul>
                        <button class="btn" on:click={() => (showModal = true)}>Заказать</button>
                    </div>
                </div>
            {/each}
        </div>
        <p class="price-notice">Цены являются очень приблизительными. Каждый случай индивидуален, поэтому выбранный вами "тариф" условен. Если вы хотите узнать цену, то опишите фронт работ, используя кнопку "Заказать" или напишите мне в любой из мессенджеров</p>
    </div>
</section>


<Modal bind:showModal>
   <ContactForm />
</Modal>


<style>
    h2 {
        font-size: var(--h1);
        margin-bottom: var(--unit-3);
    }

    .price-inner {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--unit-3);
    }

    .price-item {
        border: var(--border);
        border-radius: var(--radius);
    }

    .price-item-header {
        padding: var(--unit-3);
        background: var(--color-accent);
        border-radius: var(--radius) var(--radius) 0 0;
    }

    .price-item:nth-child(2) .price-item-header {
        background: var(--color-second);
    }

    .price-item:nth-child(3) .price-item-header {
        background: var(--color-reserve);
    }

    h4 {
        font-size: var(--h5);
    }

    .price-item-amount {
        font-size: var(--h3);
        font-weight: 900;
        margin-top: var(--unit-3);
    }

    p {
        font-size: var(--p2);
        line-height: 1.2;
        margin-top: var(--unit-2);
    }

    .price-item-footer {
        padding: var(--unit-3);
    }

    ul {
        padding-left: 0;
        list-style: none;
    }

    li {
        position: relative;
        display: flex;
        align-items: flex-start;
        line-height: 1.2;
    }

    li + li {
        margin-top: var(--unit-2);
    }


    li:before {
        content: '';
        background: var(--color-accent);
        width: var(--unit);
        height: var(--unit);
        display: block;
        border-radius: 50%;
        margin-right: var(--unit);
        flex: none;
        margin-top: 7px;
    }

    .price-item:nth-child(2) li:before {
        background: var(--color-second);
    }

    .price-item:nth-child(3) li:before {
        background: var(--color-reserve);
    }

    .btn {
        font-size: var(--p);
        background-color: var(--color-fg);
        color: #f7f7f7;
        padding: var(--unit);
        width: 100%;
        border-color: var(--color-fg);
    }

    .price-notice {
        border: var(--border);
        border-radius: var(--radius);
        padding: var(--unit-2);
        background: var(--color-fg);
        color: #f7f7f7;
    }

    @media(min-width: 992px) {
        .price-inner {
            grid-template-columns: repeat(3, 1fr);
        }

        ul {
            min-height: 16rem;
        }
    }
</style>
