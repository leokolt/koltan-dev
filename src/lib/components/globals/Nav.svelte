<script>
    import { page } from '$app/stores'

    const navs = [
        {
            title: "Блог",
            href: "/blog"
        },
        {
            title: "Работы",
            href: "/works"
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

<style lang="postcss">
    nav {
        position: absolute;
        background: var(--color-bg);
        width: 70%;
        right: -10px;
        top: 70px;
        transition: var(--transition);
        transform: scale(0);
        transform-origin: top right;
    }

    nav.show {
        top: 70px;
        padding: 20px;
        border: 3px solid var(--color-primary);
        background: var(--color-bg);
        z-index: 1;
        border-radius: var(--radius) 0 var(--radius) var(--radius);
        transform: scale(1);
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
        /* text-decoration: underline wavy var(--color-reserve) 2px; */
        /* -webkit-text-decoration: underline wavy var(--color-reserve) 2px; */
        text-decoration-style: wavy;
        -webkit-text-decoration-style: wavy;
        text-underline-offset: 1px;
        -webkit-text-underline-offset: 1px;
        text-decoration-line: underline;
        -webkit-text-decoration-line: underline;
        text-decoration-thickness: 2px;
        -webkit-text-decoration-thickness: 2px;
        text-decoration-color: var(--color-reserve);
        -webkit-text-decoration-color: var(--color-reserve);
    }

    .menu-toggle {
        order: 3;
        border-radius: 999px;
        border: 2px solid var(--color-primary);
        background: var(--color-blue);
        cursor: pointer;
        transition: all 400ms cubic-bezier(.5,2.5,.7,.7);
        text-decoration: none;
        color: var(--color-primary);
        display: block;
        width: 32px;
        height: 32px;
        line-height: 1;
        font-weight: 700;
        margin-left: var(--unit-3);
        position: relative;
        z-index: 2;
        box-shadow: 0px 0px 0px var(--color-accent);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu-toggle:hover {
        box-shadow: 2px 2px 0px var(--color-accent);
     }


    .menu-toggle span {
        width: 16px;
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
        width: 16px;
        height: 4px;
        display: block;
        background: var(--color-primary);
        transition: .2s;
        border-radius: 10px
    }

    .menu-toggle span:after {
        content: "";
        width: 16px;
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
            transform: unset;
            border-radius: unset;
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
