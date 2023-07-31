<script>
	import { theme, toggleTheme } from '$lib/utils/colorScheme.js'
</script>

<button class={'color-scheme-toogle ' + ($theme === 'dark' ? 'is-dark' : 'is-light')} on:click={toggleTheme} aria-label="Toggle theme">
    <span></span>
</button>

<style>
    .btn {
        padding: 10px;
        border-radius: 999px;
    }


    .color-scheme-toogle {
        background-color: unset;
        border: none;
        cursor: pointer;
        position: relative;
        z-index: 2;
    }

    .color-scheme-toogle span {
        height: 32px;
        width: 32px;
        border-radius: 999px;
        background-color: yellow;
        display: block;
        position: relative;
        border: 2px solid #292929;
        /* overflow: hidden; */
    }

    .color-scheme-toogle span::after {
        content: "";
        position: absolute;
        left: 12px;
        top: -7px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: var(--color-bg);
        transition: width .35s, height .35s;
    }


    .color-scheme-toogle.is-dark span::after {
        content: "";
        position: absolute;
        left: 12px;
        top: -7px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: var(--color-bg);
    }
</style>
