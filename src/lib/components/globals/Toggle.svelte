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
        overflow: hidden;
        border-radius: 999px;
    }

    .color-scheme-toogle span {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 999px;
        background-color: var(--color-accent);
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
        background: #292929;
        transition: width .35s, height .35s;
    }


    .color-scheme-toogle.is-dark span::after {
        content: "";
        position: absolute;
        left: 10px;
        top: -9px;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        background: #292929;
    }
</style>
