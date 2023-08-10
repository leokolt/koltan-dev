<script>
    /*imports*/
    import { onMount } from 'svelte';
    import { fade  } from 'svelte/transition';
    import Button from '../chunks/Button.svelte';

    /*move element on hover window*/
    let ref;
    let ref2;
    let ref3;

    const mouseHandler = (e) => {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        ref.style.cssText = 'transform: translate(-' + x * 25 + 'px, -' + y * 25 + 'px); transition:.35s';
        ref2.style.cssText = 'transform: translate(-' + x * 15 + 'px, ' + y * 20 + 'px); transition:.35s';
        ref3.style.cssText = 'transform: translate(' + x * 20 + 'px, -' + y * 15 + 'px); transition:.35s';
    }

    /*change profs word*/
	let profs = ['разработчик', 'фронтендер', 'вордпрессер', 'классный парень', 'джаваскриптер', 'немножко прогер', 'умею петь', 'отлично готовлю', 'кодер', 'фрилансер'];

    // Returns random number for next index.
    const randomSelection = () => {
			return Math.round(Math.random() * (profs.length - 1));
	};

	// 	Set `profIndex` to a random value. This will change as it updates.
	let profIndex = randomSelection();

	// 	Change interval (milliseconds) here.
	const INTERVAL_MS = 5000;

	// Start the event on mount.  Each interval, the `profIndex` value will update.
	onMount(() => {
		const interval = setInterval(() => {
			// Set `profIndex` to a new value each interval.
			profIndex = randomSelection();
		}, INTERVAL_MS);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<section role="banner" on:mousemove={mouseHandler}>
    <div class="wrapper">
        <div class="hero-inner">
            <!-- <div>
                <h1>Привет👋 Меня зовут Леонид, и я -
                    {#key profIndex}
                        <span class="box" in:fade >{profs[profIndex]}</span>
                    {/key}
                </h1>
                <Button href="/" title="И что дальше?" round="bottom-left" bg="yellow" margin="50px 0 0 0"/>
            </div> -->
            <div class="hero-content">
                <h1 class="hero__hey">Привет! Меня зовут Леонид 👋</h1>
                <h2>Я - фрилансер, <span>занимаюсь версткой и программированием,</span> работаю с <span class="red">Wordpress</span> и <span class="red">JS-фреймворками</span>, а также пишу статьи </h2>
            </div>
            <div class="hero-image">
                <svg bind:this={ref} class="blob-wp" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 112 81" viewBox="0 0 112 81"><path d="M95.6 16c12.2 12.8 18.3 37.6 9 50.2C95.4 78.8 71 79.3 51 76.7c-20-2.6-35.5-8.2-43-19.8C.6 45.4 1.3 27.8 9 17.5 16.8 7.2 31.7 4.2 48.3 3.2 64.9 2.1 83.4 3.1 95.6 16z" style="fill:#ffd101"/><path d="M36.8 29.7c-4.1 9.4-2.1 19.9 4.1 27.2l2.1-36c-2.5 2.4-4.7 5.3-6.2 8.8zm40.3 16c1.3-2.9 1.1-5.4.9-7.4-.4-2.5-.8-4.6.1-6.6.9-2.2 3.5-3.5 5.8-2.5.1 0 .2.1.3.2-2.6-5.7-7.2-10.5-13.3-13.2-8.3-3.6-17.4-2.5-24.5 2.1.6.3 1.1.5 1.5.7 2.5 1.1 6.5 2.4 6.5 2.4 1.3.5.7 2.4-.7 2 0 0-1.3-.4-2.8-1L48.4 52l11.9-13.3.7-11.8c-1.2-.6-2.4-1.3-2.4-1.3-1.2-.6-.2-2.5 1-1.9 0 0 3.8 2 6.1 3 2.5 1.1 6.5 2.4 6.5 2.4 1.3.5.7 2.4-.7 2 0 0-1.4-.4-2.8-1l-2.5 29.3 5.8-6.9c2.6-2.5 4.3-4.8 5.1-6.8zm-17-3.5L44 59.9c1.9 1.5 4 2.9 6.3 3.9 2.8 1.2 5.6 1.9 8.5 2.1v-.4l1.3-23.3zm26.3-4.6c-.2.8-.5 1.6-.9 2.5-1 2.4-2.7 4.9-5.5 7.7L63.6 65.7c8.8-1.1 16.9-6.7 20.7-15.4 1.8-4.2 2.5-8.5 2.1-12.7z" style="fill:#f7f7f7"/></svg>
                <svg bind:this={ref2} class="blob-js" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Слой_1" x="0" y="0" style="enable-background:new 0 0 139.5 106.5" version="1.1" viewBox="0 0 139.5 106.5"><style>.st1{fill:#f7f7f7}</style><path d="M115 15.3c11.9 8.2 22.7 21.2 22.4 33.9-.3 12.7-11.7 25.2-23.6 36.2S89.4 106 78.7 104.3C68 102.6 59 89.6 43.1 78.6 27.3 67.5 4.7 58.5 1.6 46.4S14.9 19 30.7 10.9c15.8-8.2 31.1-9.3 45.2-8.2C90 3.8 103 7.1 115 15.3z" style="fill:#e44041"/><path d="M67.2 59c-1.1 1.9-3.2 3.5-6.1 4.3-4 1.1-7 .1-9.4-1.9-.7-.6-.7-1.7-.1-2.4s1.2-1.3 1.9-2c.6-.6 1.6-.7 2.2-.1 1.4 1.2 3.6 1.7 5.4.1 1.4-1.3.5-3.8-.2-6.6L56 32.8V32.5l4.4-1.2c.9-.2 1.8.3 2 1.2L66 45.8c1.5 5.4 3.2 9.8 1.2 13.2zM92.5 46.3c1 5.1-2.3 9-7.9 10.5-4.7 1.3-8.5.4-11.4-1.9-.8-.6-.9-1.7-.2-2.5l1.9-1.9c.6-.6 1.4-.6 2.1-.2 1.8 1.2 4.1 1.9 6.7.9 2-.7 3.9-3.1 1.9-5.2-1-1-2.7-1.2-4.3-1.5-5-.7-10.8-1.1-12.2-8.2-.5-2.4.2-4.3 1.2-5.9 1.1-1.6 2.8-2.9 5.3-3.7 3.8-1.2 6.6-.4 8.9 1.2.8.6.9 1.7.3 2.4-.6.6-1.1 1.3-1.7 1.9-.5.6-1.4.7-2.1.3-1.4-.9-3.5-1.1-5 .1-.9.7-1.4 2.3-.4 3.7.8 1.3 2.9 1.5 4.7 1.8 5.1.7 10.8 1.2 12.2 8.2z" class="st1"/><path d="M258.5 130.5h-.5" style="fill:none"/></svg>
                <svg bind:this={ref3} class="blob-svelte" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 145 123.7" viewBox="0 0 145 123.7"><path d="M127.9 14.8c13.2 13.5 16.2 36.8 13.9 57.9s-9.9 39.8-23.1 46.6c-13.2 6.8-31.9 1.6-47.7-1.5-15.7-3-28.5-3.8-42.5-10.6-14-6.7-29.4-19.5-26.1-28.9 3.3-9.5 25.1-15.7 39.2-29.2 14-13.4 20.2-34.1 35-42.7s38.1-5.1 51.3 8.4z" style="fill:#62c0a5"/><path d="M110.6 42.3c2.8 4.2 3 8.8 1.6 12.3-2.6-2.5-5.7-4.2-9-5.1 0-.7-.1-1.5-.6-2.1-1.1-1.6-3.3-2.1-4.9-1l-7.9 5.1L78 59.3c-1.6 1.1-2.1 3.3-1 4.9 1.1 1.6 3.3 2.1 4.9 1l11.9-7.7c4.5-2.9 11.8-1.4 16 5.1 4.2 6.4 2.7 13.7-1.8 16.6L84.1 94.7c-4.5 2.9-11.8 1.4-16-5.1-2.8-4.2-3-8.8-1.6-12.3 2.6 2.5 5.7 4.2 9 5.1 0 .7.1 1.5.6 2.1 1.1 1.6 3.3 2.1 4.9 1l19.8-12.8c1.6-1.1 2.1-3.3 1-4.9-1.1-1.6-3.3-2.1-4.9-1L85 74.4c-4.5 2.9-11.8 1.4-16-5.1-4.2-6.4-2.7-13.7 1.8-16.6l23.7-15.4c4.6-3 11.9-1.4 16.1 5zm6.2 18.6c4.5-6.2 4.3-15.3-.3-22.4-5.7-8.8-17.1-12.8-25.7-7.2L67.1 46.7C59.2 51.8 57.7 62.4 62 71c-4.5 6.2-4.3 15.3.3 22.4 5.7 8.8 17.1 12.8 25.7 7.2l23.7-15.4c7.9-5.2 9.4-15.8 5.1-24.3z" style="fill:#f7f7f7"/></svg>
                <img src="/img/portretq.svg"  alt="hero" loading="eager"/>
            </div>
        </div>
    </div>
</section>



<style>
    .hero-inner {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .hero-content {
        flex: 1 1 55%;
    }

    .hero-image {
        flex: 1 1 45%;
        justify-content: center;
        position: relative;
    }

    section {
        position: relative;
        margin-top: 30px;
    }

    /* h1 {
        font-size: 30px;
        line-height: 1;
        font-weight: 900;
    } */

    .hero__hey {
        font-size: var(--p);
        /* font-weight: 300; */
        margin-bottom: 15px;
    }

    h2 {
        font-size: var(--h3);
        line-height: 1.2;
    }

    h2 span {
        color: var(--color-purple);
        font-weight: 900;
        line-height: 1.2;
    }

    .red {
        color: var(--color-red)
    }

    /* h1 span {
        font-style: italic;
        /* color: var(--color-purple);
        white-space: nowrap;
        display: inline-block;
        line-height: 1;
        margin-top: 10px;
        font-weight: 900;
    } */

    img {
        max-width: 350px;
    }

    svg {
        position: absolute;
        width: 64px;
        height: auto;
    }

    .blob-wp {
        bottom: 0;
        right: 30%;
    }

    .blob-svelte {
        top: 0;
        left: 0;
    }

    .blob-js {
        top: 30%;
        right: 0;
    }

    /* .dots {
        background-size: 85%;
        background-repeat: no-repeat;
        background-clip: content-box;
        background-position: right 250px;
        background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='hsla(0, 0%, 63%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
    } */

    /* .box {
        width: fit-content;
        padding: 0 25px 10px 25px;
        transform: rotateZ(-2deg);
        background: var(--color-purple);
        border-radius: 12px 12px 0 12px;
    } */

    @media(min-width: 992px) {
        h1 {
            font-size: 55px;
            line-height: 1;
        }

        section {
            margin-top: 0;
        }

        .hero-inner {
            flex-direction: row;
        }

        .hero-image {
            display: flex;
        }
    }

</style>
