<script>
    import Modal from "$lib/components/globals/Modal.svelte";
    let showModal = false;

    const prices = [
        { title: 'По-мелочи', amount: 'от 500₽', desc: 'Небольшие правки и рекомендации', list: ['Мелкие правки', 'Рекомендация и консультация', 'Установка темы на WordPress', 'Стилизация небольших блоков' ] },
        { title: 'По-мелочи', amount: 'от 500₽', desc: 'Небольшие правки и рекомендации', list: ['Мелкие правки', 'Рекомендация и консультация', 'Установка темы на WordPress', 'Стилизация небольших блоков' ] },
        { title: 'По-мелочи', amount: 'от 500₽', desc: 'Небольшие правки и рекомендации', list: ['Мелкие правки', 'Рекомендация и консультация', 'Установка темы на WordPress', 'Стилизация небольших блоков' ] }
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
    Жопао
</Modal>


<style>
    h2 {
        font-size: var(--h1);
        margin-bottom: var(--unit-3);
    }

    .price-inner {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
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
        padding-left: var(--unit-2);
    }

    .btn {
        font-size: var(--p);
        background-color: #292929;
        color: #f7f7f7;
        padding: var(--unit);
        width: 100%;
    }

    .price-notice {
        border: var(--border);
        border-radius: var(--radius);
        padding: var(--unit-2);
        background: #292929;
        color: #f7f7f7;
    }

    @media(min-width: 992px) {

    }
</style>

<!-- markup (zero or more items) goes here -->
