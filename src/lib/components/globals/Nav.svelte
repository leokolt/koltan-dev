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
</script>

<nav>
    <ul>
        {#each navs as {title, href}}
            <li>
                <a {href} class:active={url.includes(href)} {title}>{title}</a>
            </li>
        {/each}
    </ul>
  </nav>

  <style>
     ul {
      margin: 0;
      list-style-type: none;
      display: flex;
      gap: 1rem;
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
  </style>
