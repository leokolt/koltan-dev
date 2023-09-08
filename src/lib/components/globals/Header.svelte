<script>
    import Nav from "./Nav.svelte";
    import Toggle from "./Toggle.svelte";


    let lastScrollPosition = 0 //last scroll position
    let showHeader = true //boolean to show or hide nav bar

    const handleScroll = () => {
        var currentScrollposition = window.scrollY || document.documentElement.scrollTop; //Get current scroll position
            if (currentScrollposition > lastScrollPosition) {
                showHeader = false
            } else {
                showHeader = true
            }
                lastScrollPosition = currentScrollposition;
            }



</script>

<svelte:window on:scroll={handleScroll} />

<header class={showHeader === true && lastScrollPosition > 0 ? "show" : showHeader === true && lastScrollPosition <= 0 ? "" : 'hide'}>
    <div class="wrapper">
        <div class="header__inner">
            <div class="header__left">
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Слой_1" x="0" y="0" version="1.1" viewBox="0 0 1000 1000"><path fill="#f7c90d" d="M257 992c-62.8 0-121.8-24.4-166.2-68.8C46.4 878.8 22 819.8 22 757V247c0-62.8 24.4-121.8 68.8-166.2C135.2 36.4 194.2 12 257 12s121.8 24.4 166.2 68.8C467.6 125.2 492 184.2 492 247v510c0 62.8-24.4 121.8-68.8 166.2C378.8 967.6 319.8 992 257 992z"/><path d="M257 17c31.1 0 61.2 6.1 89.5 18.1 27.4 11.6 52 28.2 73.1 49.3s37.7 45.7 49.3 73.1c12 28.3 18.1 58.5 18.1 89.5v510c0 31.1-6.1 61.2-18.1 89.5-11.6 27.4-28.2 52-49.3 73.1-21.1 21.1-45.7 37.7-73.1 49.3-28.3 12-58.5 18.1-89.5 18.1-31.1 0-61.2-6.1-89.5-18.1-27.4-11.6-52-28.2-73.1-49.3-21.1-21.1-37.7-45.7-49.3-73.1C33.1 818.2 27 788.1 27 757V247c0-31.1 6.1-61.2 18.1-89.5 11.6-27.4 28.2-52 49.3-73.1 21.1-21.1 45.7-37.7 73.1-49.3C195.8 23.1 225.9 17 257 17m0-10C124.5 7 17 114.5 17 247v510c0 132.5 107.5 240 240 240s240-107.5 240-240V247C497 114.5 389.5 7 257 7z" fill="transparent"/><path class="path1" fill="#ed6f35" d="M750 484c-62.8 0-121.8-24.4-166.2-68.8C539.4 370.8 515 311.8 515 249s24.4-121.8 68.8-166.2C628.2 38.4 687.2 14 750 14s121.8 24.4 166.2 68.8C960.6 127.2 985 186.2 985 249s-24.4 121.8-68.8 166.2C871.8 459.6 812.8 484 750 484z"/><path d="M750 19c31.1 0 61.2 6.1 89.5 18.1 27.4 11.6 52 28.2 73.1 49.3 21.1 21.1 37.7 45.7 49.3 73.1 12 28.3 18.1 58.5 18.1 89.5 0 31.1-6.1 61.2-18.1 89.5-11.6 27.4-28.2 52-49.3 73.1s-45.7 37.7-73.1 49.3C811.2 472.9 781 479 750 479c-31.1 0-61.2-6.1-89.5-18.1-27.4-11.6-52-28.2-73.1-49.3-21.1-21.1-37.7-45.7-49.3-73.1-12-28.3-18.1-58.5-18.1-89.5 0-31.1 6.1-61.2 18.1-89.5 11.6-27.4 28.2-52 49.3-73.1 21.1-21.1 45.7-37.7 73.1-49.3C688.8 25.1 718.9 19 750 19m0-10C617.5 9 510 116.5 510 249s107.5 240 240 240 240-107.5 240-240S882.5 9 750 9z" fill="transparent"/><path class="path2" fill="#64baaa" d="M752 991c-62.8 0-121.8-24.4-166.2-68.8C541.4 877.8 517 818.8 517 756s24.4-121.8 68.8-166.2C630.2 545.4 689.2 521 752 521s121.8 24.4 166.2 68.8C962.6 634.2 987 693.2 987 756s-24.4 121.8-68.8 166.2C873.8 966.6 814.8 991 752 991z"/><path d="M752 526c31.1 0 61.2 6.1 89.5 18.1 27.4 11.6 52 28.2 73.1 49.3 21.1 21.1 37.7 45.7 49.3 73.1 12 28.3 18.1 58.5 18.1 89.5 0 31.1-6.1 61.2-18.1 89.5-11.6 27.4-28.2 52-49.3 73.1-21.1 21.1-45.7 37.7-73.1 49.3-28.3 12-58.5 18.1-89.5 18.1-31.1 0-61.2-6.1-89.5-18.1-27.4-11.6-52-28.2-73.1-49.3-21.1-21.1-37.7-45.7-49.3-73.1-12-28.3-18.1-58.5-18.1-89.5 0-31.1 6.1-61.2 18.1-89.5 11.6-27.4 28.2-52 49.3-73.1 21.1-21.1 45.7-37.7 73.1-49.3 28.3-12 58.4-18.1 89.5-18.1m0-10c-132.5 0-240 107.5-240 240s107.5 240 240 240 240-107.5 240-240-107.5-240-240-240z" fill="transparent"/></svg>
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
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--color-bg);
        transition: var(--transition);
        z-index: 99;
        border-bottom: 2px solid transparent;
        transform: unset;
    }


    header.hide {
        transform: translateY(-100%);
    }

    header.show {
        border-color: var(--color-primary);
        transform: translateY(0);
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
        max-width: 80px;
    }

    svg {
        width: 50px;
        position: relative;
        z-index: 2;
        transition: var(--transition-cubic);
        overflow: visible;
    }

    svg .path1, svg .path2 {
        transition: var(--transition-cubic);
    }

    svg:hover .path1 {
        transform: matrix(1.2,0,-0.5,1.2,-10,-10);
    }

    svg:hover .path2 {
        transform: matrix(1.2,0,0.5,1.2,-500,-200)
    }


    @media(min-width: 992px) {
        header {
            padding: 20px 0;
        }
    }





</style>
