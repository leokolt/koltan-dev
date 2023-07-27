<script>

    import Round from '$lib/components/icons/Round.svelte'
    import Square from '$lib/components/icons/Square.svelte'
    import Wave from '$lib/components/icons/Wave.svelte'
    import Dots from '$lib/components/icons/Dots.svelte'
    import Half from '$lib/components/icons/Half.svelte'

    let ref;
    let ref2;
    let ref3;
    let ref4;
    let ref5;

    const mouseHandler = (e) => {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        ref.style.cssText = 'transform: translate(-' + x * 25 + 'px, -' + y * 25 + 'px); transition:.35s';
        ref2.style.cssText = 'transform: translate(' + x * 20 + 'px, ' + y * 20 + 'px); transition:.35s';
        ref3.style.cssText = 'transform: translate(-' + x * 20 + 'px, ' + y * 15 + 'px); transition:.35s';
        ref4.style.cssText = 'transform: translate(' + x * 10 + 'px, -' + y * 15 + 'px); transition:.35s';
        ref5.style.cssText = 'transform: translate(' + x * 15 + 'px, -' + y * 5 + 'px); transition:.35s';
    }


</script>

<section role="banner" class="" on:mousemove={mouseHandler}>
    <div class="wrapper">

        <div class="flex">
            <div>
                <h1>Привет👋 Меня зовут Леонид, <br>
                    и я - <span>разработчик</span></h1>
            </div>

            <div class="justify-center">
                <img src="/img/hero.svg" bind:this={ref} alt="hero"/>
            </div>
        </div>

        <div class="absolute-left">
            <div bind:this={ref2}>
                <Wave/>
            </div>
        </div>

        <div class="absolute-center">
            <div bind:this={ref3}>
                <Square/>
            </div>
        </div>

        <div class="absolute-right">
            <div bind:this={ref4}>
                <Round/>
            </div>
        </div>

        <div class="absolute-top">
            <div bind:this={ref5}>
                <Half/>
            </div>
        </div>

        <div class="absolute-none">
            <div>
                <Dots/>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        position: relative;
        /* overflow-x: hidden; */
    }

    h1 {
        font-size: 55px;
        line-height: 1;
    }

    h1 span {
        font-style: italic;
        color: var(--color-purple);
    }

    img {
        max-width: 350px;
    }

    :global(.hero-shape) {
        width: 100px;
        transition: .35s;
    }

    .absolute-right, .absolute-left, .absolute-center, .absolute-top {
        position: absolute;
        width: 100px;
        transition: .35s;
    }

    .absolute-none {
        position: absolute;
        right: 20px;
        width: 600px;
        height: 200px;
        bottom: 80px;
        z-index: -1;
    }

    .absolute-right {
        top: 0;
        right: 10%;
    }

    .absolute-center {
        top: 40%;
        right: 40%;
    }

    .absolute-left {
        bottom: 10%;
        left: 0;
    }

    .absolute-top {
        top: 10%;
        left: 10%;
    }


   /* :global(.hero-shape.wave) {
        right: 0;
        top: 0;
    }

    :global(.hero-shape.square) {
        left: 40%;
        top: 40%;
    }

    :global(.hero-shape.round) {
        left: 0;
        top: 10%;
    } */
</style>
