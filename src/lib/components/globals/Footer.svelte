<script>
    import Links from "../home/Links.svelte";

</script>
<footer>
    <Links skew='top'/>
    <div class="wrapper">
        <div class="footer__inner">
            © {new Date().getFullYear()}. Все права защищены
        </div>

    </div>
</footer>

<style>
    footer {
        margin-top: calc(4 * var(--unit-3));
        background: var(--color-fg);
        color: #f7f7f7;
    }

    .footer__inner {
        padding: var(--unit-2) 0;
    }
</style>
