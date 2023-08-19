<script>
    import { fade, fly } from 'svelte/transition';
    import CircleInCircle from '../icons/CircleInCircle.svelte';
    import Arc from '../icons/Arc.svelte';

    $: activeTab = activeTab ?? 0;

    const benefits = [
        {
            title: 'Работаю без посредников',
            content: 'Противоположная точка зрения подразумевает, что базовые сценарии поведения пользователей формируют глобальную экономическую сеть и при этом — описаны максимально подробно. Лишь непосредственные участники технического прогресса лишь добавляют фракционных разногласий и ограничены исключительно образом мышления. Господа, новая модель организационной деятельности однозначно фиксирует необходимость прогресса профессионального сообщества.'
        },
        {
            title: 'Работаю сам',
            content: 'Противоположная точка зрения подразумевает, что базовые сценарии поведения пользователей формируют глобальную экономическую сеть и при этом — описаны максимально подробно. Лишь непосредственные участники технического прогресса лишь добавляют фракционных разногласий и ограничены исключительно образом мышления. Господа, новая модель организационной деятельности однозначно фиксирует необходимость прогресса профессионального сообщества.'
        },
        {
            title: 'Имею большой опыт',
            content: 'Противоположная точка зрения подразумевает, что базовые сценарии поведения пользователей формируют глобальную экономическую сеть и при этом — описаны максимально подробно. Лишь непосредственные участники технического прогресса лишь добавляют фракционных разногласий и ограничены исключительно образом мышления. Господа, новая модель организационной деятельности однозначно фиксирует необходимость прогресса профессионального сообщества.'
        },
        {
            title: 'Шарю в дизайне',
            content: 'Противоположная точка зрения подразумевает, что базовые сценарии поведения пользователей формируют глобальную экономическую сеть и при этом — описаны максимально подробно. Лишь непосредственные участники технического прогресса лишь добавляют фракционных разногласий и ограничены исключительно образом мышления. Господа, новая модель организационной деятельности однозначно фиксирует необходимость прогресса профессионального сообщества.'
        },
        {
            title: 'Работаю быстро',
            content: 'Противоположная точка зрения подразумевает, что базовые сценарии поведения пользователей формируют глобальную экономическую сеть и при этом — описаны максимально подробно. Лишь непосредственные участники технического прогресса лишь добавляют фракционных разногласий и ограничены исключительно образом мышления. Господа, новая модель организационной деятельности однозначно фиксирует необходимость прогресса профессионального сообщества.'
        },
        {
            title: 'Счета и чеки',
            content: 'Противоположная точка зрения подразумевает, что базовые сценарии поведения пользователей формируют глобальную экономическую сеть и при этом — описаны максимально подробно. Лишь непосредственные участники технического прогресса лишь добавляют фракционных разногласий и ограничены исключительно образом мышления. Господа, новая модель организационной деятельности однозначно фиксирует необходимость прогресса профессионального сообщества.'
        },
        {
            title: 'Могу работать без предоплаты',
            content: 'Противоположная точка зрения подразумевает, что базовые сценарии поведения пользователей формируют глобальную экономическую сеть и при этом — описаны максимально подробно. Лишь непосредственные участники технического прогресса лишь добавляют фракционных разногласий и ограничены исключительно образом мышления. Господа, новая модель организационной деятельности однозначно фиксирует необходимость прогресса профессионального сообщества.'
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
        margin-bottom: 30px;
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
        padding: 10px 20px;
        margin-top: 0;
        margin-right: 10px;
        background-color: var(--color-bg);
        display: inline-block;
    }

    .content {
        border-radius: var(--radius);
        border: var(--border);
        font-size: var(--p);
        line-height: 1.3;
        color: var(--color-primary);
        padding: var(--unit-3);
        box-shadow: 10px 10px 0 var(--color-accent);
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
