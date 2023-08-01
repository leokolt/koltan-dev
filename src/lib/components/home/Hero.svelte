<script>
    /*imports*/
    import { onMount } from 'svelte';
    import { fade  } from 'svelte/transition';
    import Button from '../chunks/Button.svelte';


    /*move element on hover window*/
    let ref;

    const mouseHandler = (e) => {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        ref.style.cssText = 'transform: translate(-' + x * 25 + 'px, -' + y * 25 + 'px); transition:.35s';
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
            <div>
                <h1>Привет👋 Меня зовут Леонид, и я -
                    {#key profIndex}
                        <span class="box" in:fade >{profs[profIndex]}</span>
                    {/key}
                </h1>
                <Button href="/" title="И что дальше?" round="bottom-left" bg="yellow" margin="50px 0 0 0"/>
            </div>
            <div class="hero-image dots">
                <img src="/img/hero.svg" bind:this={ref} alt="hero"/>
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

    .hero-image {
        justify-content: center;
        display: none;
    }

    .hero-inner > * {
        flex: 1;
    }

    section {
        position: relative;
        margin-top: 30px;
    }

    h1 {
        font-size: 30px;
        line-height: 1;
        font-weight: 900;
    }

    h1 span {
        font-style: italic;
        /* color: var(--color-purple); */
        white-space: nowrap;
        display: inline-block;
        line-height: 1;
        margin-top: 10px;
        font-weight: 900;
    }

    img {
        max-width: 350px;
    }

    .dots {
        background-size: 85%;
        background-repeat: no-repeat;
        background-clip: content-box;
        background-position: right 250px;
        background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5'  stroke-width='1' stroke='none' fill='hsla(0, 0%, 63%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
    }

    .box {
        width: fit-content;
        padding: 0 25px 10px 25px;
        transform: rotateZ(-2deg);
        background: var(--color-purple);
        border-radius: 12px 12px 0 12px;
    }

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
