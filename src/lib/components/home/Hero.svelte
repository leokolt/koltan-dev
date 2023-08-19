<script>
    /*imports*/
    //import { onMount } from 'svelte';
    // import { fade  } from 'svelte/transition';
    // import Button from '../chunks/Button.svelte';

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

    /*change profs word*
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
	});*/
</script>

<section role="banner" on:mousemove={mouseHandler}>
    <svg bind:this={ref} class="blob-wp" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Слой_1" x="0" y="0" version="1.1" viewBox="0 0 240 512"><path d="M47.8 256.7c0 108.6 82.5 198.3 188.2 209.7V47C130.4 58.4 47.8 148.1 47.8 256.7z" style="fill:none" /><path d="M47.8 256.7C47.8 148.1 130.4 58.4 236 47V6c-25.9 2.3-51.1 8.6-75.2 18.8-30 12.7-56.9 30.8-80 53.9s-41.3 50-53.9 80c-13.1 31-19.8 64-19.8 98s6.7 66.9 19.8 98c12.7 30 30.8 56.9 53.9 80 23.1 23.1 50 41.3 80 53.9 24.1 10.2 49.3 16.5 75.2 18.8v-41C130.4 455 47.8 365.3 47.8 256.7z" style="fill:#f7c90d" /><path d="M100.5 256.7c0 78.2 59.4 142.8 135.5 151v-302c-76.1 8.2-135.5 72.8-135.5 151z" style="fill:none"/><path d="M100.5 256.7c0-78.2 59.4-142.8 135.5-151V76.2c-18.7 1.7-36.8 6.2-54.1 13.5-21.6 9.1-41 22.2-57.6 38.8-16.6 16.6-29.7 36-38.8 57.6-9.5 22.3-14.2 46.1-14.2 70.5 0 24.5 4.8 48.2 14.2 70.5 9.1 21.6 22.2 41 38.8 57.6 16.6 16.6 36 29.7 57.6 38.8 17.3 7.3 35.5 11.9 54.1 13.5v-29.5c-76.1-8-135.5-72.6-135.5-150.8z" style="fill:#f7c90d" /></svg>
    <svg bind:this={ref2} class="blob-js" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Слой_1" x="0" y="0" style="enable-background:new 0 0 512 512" version="1.1" viewBox="0 0 512 512"><style>.st1{fill:none;stroke:#292929;stroke-width:40;stroke-miterlimit:10}</style><path d="M440 466 288 351 136 236l175.6-74.1 175.6-74.1-23.6 189.1z" style="fill:#ED6F35"/><path d="M50 209.7 435.7 46.9l-51.9 415.3z" style="fill:none;stroke:#292929;stroke-width:20;stroke-miterlimit:20" /><path d="m342.2 363.6-93-70.4-92.9-70.3 107.3-45.3L371 132.2l-14.4 115.7z" style="fill:none;stroke:#292929;stroke-width:20;stroke-miterlimit:20"/></svg>
    <svg bind:this={ref3} class="blob-svelte" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 376 512"><path fill="#64BAAA" d="M177.1 234c0 89.5-72.6 162.1-162.1 162.1V72c89.5 0 162.1 72.5 162.1 162z"/><circle cx="157.1" cy="95.7" r="81.7" fill="#292929"/><circle cx="222.7" cy="367.3" r="131.7" fill="none" stroke="#292929" stroke-miterlimit="10" stroke-width="25"/></svg>
    <div class="wrapper">
        <div class="hero-inner">
            <div class="hero-content">
                <h1>Привет. Меня зовут Леонид 👋 <br>Я - <span class="mark">фрилансер</span>, <span class="line">верстальщик</span> и <span class="brackets">программист</span></h1>
            </div>
        </div>
    </div>
</section>



<style>
    section {
        position: relative;
    }
    .hero-inner {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .hero-content {
        padding: 80px 0;
        position: relative;
    }

    section {
        position: relative;
        margin-top: var(--unit-3);
    }

    h1 {
        font-size: var(--h2);
        line-height: 1.2;
    }

    h1 .mark {
        font-weight: 900;
        line-height: 1.2;
        background: var(--color-accent)
    }

    h1 .line {
        text-decoration: underline wavy var(--color-reserve) 8px;
        text-underline-offset: 20px;
        font-weight: 900;
    }

    h1 .brackets {
        font-family: monospace;
        font-weight: 900;
        letter-spacing: 10px;
    }

    h1 .brackets:before {
        content: '{';
        color: var(--color-second);
    }

    h1 .brackets:after {
        content: '}';
        color: var(--color-second);
    }


    svg {
        position: absolute;
        height: auto;
    }

    .blob-wp {
        bottom: 0;
        right: 30%;
        width: 64px;
    }

    .blob-svelte {
        top: 0;
        left: 0;
        width: 84px;
    }

    .blob-js {
        top: 30%;
        right: 0;
        width: 94px;
    }


    @media(min-width: 992px) {
        h1 {
            font-size: calc(1.5 * var(--h1));
            line-height: 1;
        }

        section {
            margin-top: 0;
        }

        .hero-inner {
            flex-direction: row;
        }


    }

</style>
