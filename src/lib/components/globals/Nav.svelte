<script>
    import { page } from '$app/stores'

    const navs = [
        {
            title: "Блог",
            href: "/blog"
        },
        {
            title: "Обо мне",
            href: "/about"
        },
        {
            title: "Контакты",
            href: "/contact"
        },
    ]

    //$: routeId = $page.route.id;
    $: url = $page.url.href;

    let menuShow = false;


</script>

<nav class:show="{menuShow}">
    <ul>
        {#each navs as {title, href}}
            <li>
                <a {href} on:click="{() => menuShow = !menuShow}" class:active={url.includes(href)} {title}>{title}</a>
            </li>
        {/each}
    </ul>
</nav>

<button class="menu-toggle" class:menu-active="{menuShow}"
on:click="{() => menuShow = !menuShow}">
    <span></span>
</button>

<style>
    nav {
        position: absolute;
        top: -100%;
        background: var(--color-bg);
        width: 100%;
        left: 0;
        transition: var(--transition);
    }

    nav.show {
        top: 70px;
        padding: 20px;
        border: 2px solid var(--color-primary);
        border-left: none;
        border-right: none;
        background: var(--color-bg);
        z-index: 1;
    }

    ul {
        margin: 0;
        list-style-type: none;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        padding: 0;
        text-align: center;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .active {
        background: linear-gradient(to right,var(--color-blue) 0%,var(--color-blue) 98%);
        background-size: 100% 7px;
        background-repeat: no-repeat;
        background-position: left 85%;
    }

    .menu-toggle {
        order: 3;
        border-radius: 15px 0 15px 15px;
        border: 2px solid var(--color-primary);
        box-shadow: 1px 1px 0 var(--color-primary), 2px 2px 0 var(--color-primary), 3px 3px 0 var(--color-primary);
        background: var(--color-blue);
        padding: 13px;
        cursor: pointer;
        transition: box-shadow .25s cubic-bezier(.645,.045,.355,1),transform .25s cubic-bezier(.645,.045,.355,1);
        text-decoration: none;
        color: var(--color-primary);
        display: block;
        width: fit-content;
        line-height: 1;
        font-weight: 700;
        margin-left: 10px;
        position: relative;
        z-index: 2;
    }

    .menu-toggle:hover {
        box-shadow: 1px 1px 0 var(--color-primary), 2px 2px 0 var(--color-primary);
        transform: translate(1px, 1px);
    }

    .menu-toggle span {
        width: 22px;
        height: 4px;
        display: block;
        background: none;
        /* transition: .2s; */
        position: relative;
        border-radius: 10px
    }

    .menu-toggle span:before{
        content: "";
        position: absolute;
        top: -4px;
        left: 0;
        width: 22px;
        height: 4px;
        display: block;
        background: var(--color-primary);
        transition: .2s;
        border-radius: 10px
    }

    .menu-toggle span:after {
        content: "";
        width: 22px;
        height: 4px;
        display: block;
        background: var(--color-primary);
        position: absolute;
        bottom: -4px;
        left: 0;
        transition: .2s;
        border-radius: 10px
    }

    .menu-toggle.menu-active span{
        background: unset;
    }

    .menu-toggle.menu-active span:before{
        transform: rotate(45deg);
        top: 0;
    }

    .menu-toggle.menu-active span:after{
        transform: rotate(-45deg);
        bottom: 0;
    }

    @media screen and (min-width: 992px) {
        .menu-toggle {
            display: none;
        }

        nav {
            position: static;
            top: unset;
            background: unset;
            width: unset;
            left: unset;
            transition: unset;
            border: none;
        }

        nav.show {
            border: none;
            padding: 0;
        }

        ul {
            flex-direction: row;
        }

    }



  </style>
