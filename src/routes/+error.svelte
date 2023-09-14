<script>
	import { page } from '$app/stores'
</script>

<div class="error">
    {#if $page.status == 404}
        <h1 class="error-title">{$page.status}</h1>
        <div class="error-links">
            <a href="/" class="btn">Главная</a>
            <a href="/blog" class="btn">Блог</a>
            <a href="/works" class="btn">Портфолио</a>
        </div>
        <div class="tw-wind">
            <div class="tw-bounce">
                <img class="tw" src="/img/tumbleweed.png" alt="404"/>
            </div>
        </div>

    {:else}
	    <h1>{$page.status}: Здесь ничего нет</h1>
    {/if}
</div>

<style>
	.error {
		height: 100%;
		display: grid;
		place-content: center;
        padding: 2rem 0;
        overflow: hidden;
	}

    .error-title {
        text-align: center;
        font-size: 10rem;
    }

    .error-links {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--unit-3);
    }

    .tw {
        transition: 2s;
        animation-name: rotation;
        animation-duration: 6000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        text-align: center;
        margin: auto;
        max-width: 7rem;
    }

    .tw-bounce {
        animation-name: bounce;
        animation-duration: 4000ms;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        transform-origin: bottom;
    }

    .tw-wind {
        animation-name: wind;
        animation-duration: 20000ms;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        transform-origin: bottom;
        width: 54vw;
        margin-top: -25rem;
        height: fit-content;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }

    @keyframes bounce {
        0%,100% {
            transform: translateY(20px);
        }
        50% {
            transform: translateY(-50px);
        }
    }

    @keyframes wind {
        0%,100% {
            transform: translateX(100%);
        }
        50% {
            transform: translateX(-100%);
        }
    }

    @media(min-width: 992px) {
        .error-links {
            grid-template-columns: repeat(3, auto);
        }

        .tw-wind {
            margin-top: -11rem;
        }
    }
</style>
