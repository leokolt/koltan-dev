<script>
    import Nav from "./Nav.svelte";
    import Toggle from "./Toggle.svelte";

</script>

<header>
    <div class="wrapper">
        <div class="header__inner">
            <div class="header__left">
                <a href="/">
                    <img src="/logo.svg" alt="logo" />
                </a>
            </div>
            <div class="header__right">
                <Nav />
                <Toggle />
            </div>
        </div>

    </div>


</header>

<style>
    header {
        padding: 10px 0;

    }

    .header__inner {
        display: flex;
        align-items: center;
    }

    .header__right {
        margin-left: auto;
        display: flex;
        align-items: center;
    }

    :global(nav) {
        margin-right: 25px;
    }

    :global(.toggle__icon) {
        width: 30px;
        height: auto;
    }

    a {
        display: block;
        max-width: 50px;
    }

    img {
        width: 50px;
        position: relative;
        z-index: 2;
    }

    @media(min-width: 992px) {
        header {
            padding: 20px 0;
        }
    }





</style>
