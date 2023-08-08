<script>
    const skills = [
        {
            icon: "html.svg",
            title: "Красиво верстать",
            desc: "Красиво верстаю по дизайн-макетам и без на современных HTML и CSS"
        },
        {
            icon: "wp.svg",
            title: "Работать с CMS",
            desc: "Красиво верстаю по дизайн-макетам и без на современных HTML и CSS"
        },
        {
            icon: "react.svg",
            title: "Создавать на React",
            desc: "Красиво верстаю по дизайн-макетам и без на современных HTML и CSS"
        },
        {
            icon: "js.svg",
            title: "Кодить на Javascript",
            desc: "Красиво верстаю по дизайн-макетам и без на современных HTML и CSS"
        },
        {
            icon: "rocket.svg",
            title: "Дорабатывать чужое",
            desc: "Красиво верстаю по дизайн-макетам и без на современных HTML и CSS"
        },
        {
            icon: "chat.svg",
            title: "Поддерживать и развивать",
            desc: "Красиво верстаю по дизайн-макетам и без на современных HTML и CSS"
        },
    ]
</script>

<section>
    <div class="wrapper">
        <h2>Что я умею</h2>
        <div class="skills-inner">
            {#each skills as {icon, title, desc}}
                <div class="skillbox is-dark">
                    <img src="/img/{icon}" alt="{title}" />
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            {/each}
        </div>

    </div>

</section>

<style>
    section {
        margin-top: 80px;
    }

    h2 {
        font-size: var(--h1);
        text-align: center;
        margin-bottom: 30px;
    }

    .skills-inner {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .skillbox {
        flex: 1 1 calc((100% / 3) - 60px);
        border-radius: 15px;
        border: 2px solid var(--color-primary);
        box-shadow: 1px 1px 0 var(--color-primary), 2px 2px 0 var(--color-primary), 3px 3px 0 var(--color-primary);
        text-decoration: none;
        color: var(--color-primary);
        padding: 30px 20px;
        background-color: #fff;
    }

    img {
        margin-bottom: 30px;
        height: 120px;
        width: auto;
    }

    h3 {
        font-size: var(--h4);
        line-height: 1;
    }

    p {
        margin-top: 30px;
        font-size: var(--p);
    }

    @media(min-width: 992px) {
        .skills-inner {
            flex-direction: row;
        }
    }
</style>
