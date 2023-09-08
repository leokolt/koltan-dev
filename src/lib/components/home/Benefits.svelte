<script>
    import { fly } from 'svelte/transition';
    import CircleInCircle from '../icons/CircleInCircle.svelte';
    import Arc from '../icons/Arc.svelte';

    $: activeTab = activeTab ?? 0;

    const benefits = [
        {
            title: 'Работаю без посредников',
            content: 'Я ищу для себя работу сам. Как правило за то, что вам кто-то найдет работника, но при этом скажет, что работать будет сам, вам придется переплатить около 20%. Я всю работу буду делать сам, но если вам нужно будет сделать что-либо не входящее в мои компетенции, то найду исполнителя, о чем неприменно сообщу вам. Никаких лишних трат'
        },
        {
            title: 'Работаю сам',
            content: 'Вы знаете, что многие веб-студии даже не могут сделать себе сайт, заказывая его на биржах фриланса? Но при этом они будут продавать вам свои услуги за нескромные деньги. Я делаю только то, что умею, и не делаю того, что может повлечь за собой лишние траты времени и денег. Если клиенту нужно, я могу найти надежного исполнителя на часть задач, так как "оброс" связями на своем поприще. Все основные задачи я делаю сам и отвечаю за работу сам'
        },
        {
            title: 'Имею большой опыт',
            content: 'Опытом сегодня никого не удивишь, но когда твой опыт - это не только сайты на конструкторах и шаблонах, а разнообразные по нагрузке, функционалу, технологическому стеку проекты, то это совсем другое дело. Кроме целых сайтов, создаваемых с нуля, я много работаю над правками существующих проектов, где подчас добиваться поставленной цели сложнее, ведь копаться в чужом коде тяжелее, чем писать свой'
        },
        {
            title: 'Могу в дизайн',
            content: 'Я не дизайнер, и специальными программами владею только на уровне верстальщика, хотя иногда я создаю проекты по своему дизайну. Например, сайт, на котором вы находитесь, создан на основе моего взгляда на "необрутализм" и "мемфис". А еще иногда приходится создавать, взяв на вооружение уже существующие конкурирующие дли клиента решения, опираться на туманные описания стиля или свои собственные представления того, как должен выглядеть тот или иной интерфейс'
        },
        {
            title: 'Работаю быстро',
            content: 'Время - самый главный ресурс. И если я не беру в работу одновременно больше одного проекта, то я могу выполнить свою работу очень быстро. Но даже занимаясь двумя и более проектами, я все равно стараюсь не затягивать с их сдачей, ведь время имеет ценность не только для меня, но и для клиента. Кстати, быстро - не значит некачественно. Особое удовольствие делать свою работу и быстро и как следует'
        },
        {
            title: 'Счета и чеки',
            content: 'Я - самозанятый. Это значит, что я могу работать с выставлением счетов, созданием чеков, а затем предоставить акты выполненных работ. Если вам все это нужно. Хотя, конечно, проще проводить оплаты удобным способом для клиента, а все остальные официальные дела делать позже. Чтобы не отвлекаться от работы'
        },
        {
            title: 'Работаю с предоплатой и без',
            content: 'Некоторые бояться платить до начала работы, хотя такая практика зачастую принята при взаиморасчетах между фрилансерами и заказчиками. Даже биржи фриланса используют механизм предоплаты в виде безопасной сделки. Я предпочитаю разделенную оплату в процессе выполнения работы, либо часть оплату по схеме "50 на 50". Однако, с любым заказчиком всегда можно оговорить любые индивидуальные условия оплаты работы и в этом нет никаких проблем'
        }
    ]
</script>

<section>
    <Arc className="arc-icon" width="120px" height="100%" left="0" top="40%"/>
    <CircleInCircle className="cic-icon" width="90px" height="90px" left="90%" top="10%"/>
    <div class="wrapper">
        <h2>Почему именно я?</h2>
        <div class="benefits-inner">
            <div class="benefits-titles no-padding no-scrollbar">
                {#each benefits as benefit, i}
                    <button class="tab btn" class:active={i === activeTab} on:click={() => (activeTab = i)}>
                        {benefit.title}
                    </button>
                {/each}
            </div>
            <div class="benefits-content">
                {#each benefits as benefit, i}
                    {#if i === activeTab}
                        <div class="content" in:fly={{ x: -200, duration: 300, delay: 150, opacity: 0 }} >{benefit.content}</div>
                    {/if}
                {/each}
            </div>
        </div>

    </div>
</section>

<style>
    :global.cic-icon {
        display: none;
    }

    :global.arc-icon {
        display: none;
    }

    section {
        position: relative;
        overflow: hidden;
        padding-bottom: var(--unit-3);
        margin-bottom: calc(-1 * var(--unit-3));
    }

    h2 {
        font-size: var(--h1);
        margin-bottom: var(--unit-3);
    }

    .benefits-inner {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .benefits-titles {
        display: grid;
        grid-auto-columns: max-content;
        grid-auto-flow: column;
        overflow-x: auto;
        --webkit-overflow-scrolling: touch;
        padding-bottom: var(--unit);
    }

    .tab.active {
        background-color: var(--color-accent);
    }

    .btn {
        font-size: var(--p3);
        padding: .7rem 1.2rem;
        margin-top: 0;
        margin-right: .7rem;
        background-color: var(--color-bg);
        display: inline-block;
        font-weight: 400;
    }

    .content {
        border-radius: var(--radius);
        border: var(--border);
        font-size: var(--p);
        line-height: 1.3;
        color: var(--color-primary);
        padding: var(--unit-3);
        box-shadow: .7rem .7rem 0 var(--color-accent);
        height: 100%;
        background-color: var(--color-bg)
    }

    @media(min-width: 992px) {
        section {
            overflow: unset;
        }

        .benefits-inner {
            grid-template-columns: 2fr 3fr;
        }

        .benefits-titles {
            display: block;
            overflow-x: unset;
            padding-bottom: 0;
        }

        .btn {
            margin-bottom: var(--unit);
        }

        :global.cic-icon {
            display: block;
        }

        :global.arc-icon {
            display: block;
        }
    }

</style>
