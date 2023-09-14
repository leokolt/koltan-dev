<script>
    export let publishDate = undefined
    export let updateDate = undefined
    // Определим начальную дату
    const startDate = new Date(publishDate); // Здесь нужно указать свою начальную дату 23 - 01 - 20

    const startDateUpdate = new Date(updateDate); // Здесь нужно указать свою начальную дату 23 - 01 - 20

    // Добавим 190 дней к начальной дате
    const targetDate = new Date(startDate.getTime() + (190 * 24 * 60 * 60 * 1000));

    const targetDateUpdate = new Date(startDateUpdate.getTime() + (190 * 24 * 60 * 60 * 1000));

    // Получим текущую дату
    const currentDate = new Date();
</script>

<style>
    .post-notice {
        background: var(--color-second);
        padding: var(--unit-2) var(--unit-3);
        border-radius: var(--radius);
        line-height: 1.3;
        color: #f7f7f7;
        font-size: var(--p2);
    }

    .post-notice a {
        text-decoration: underline wavy 2px var(--color-accent);
        color: var(--color-accent);
        transition: var(--transition);
    }

    .post-notice a:hover {
        text-decoration-thickness: 0px;
        -webkit-text-decoration-thickness: 0px;
    }

</style>

{#if currentDate > targetDateUpdate || currentDate > targetDate}
    <div class="post-notice">
        Обратите внимание, что данная статья была опубликована или обновлена в последний раз более полугода назад и некоторые данные в ней могли устареть. Если вы используете код из этой статьи в своем проекте и он не работает, <a href="/contact" target="_blank">напишите</a> мне об этом или сообщите <a href="https://t.me/KoltanRuFeedBackBot" target="_blank">боту</a>
    </div>
{/if}
