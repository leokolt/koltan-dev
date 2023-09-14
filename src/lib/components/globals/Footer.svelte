<script>
    import Links from "$lib/components/home/Links.svelte";
</script>

<style>
    footer {
        margin-top: calc(4 * var(--unit-3));
        background: var(--color-fg);
        color: #f7f7f7;
    }

    .footer-inner {
        padding: var(--unit-3) 0;
    }

    .footer-content {
        display: grid;
        grid-template-columns: 1fr;
        gap: calc(2 * var(--unit-3));
    }

    .footer-content a {
        color: var(--color-accent);
        text-decoration: none;
        margin-bottom: var(--unit-2);
        display: block;
        transition: var(--transition);
        line-height: 1;
    }

    .footer-content a:hover {
        color: #f7f7f7;
    }

    .footer-copyright {
        text-align: center;
        margin-top: var(--unit-2);
    }

    @media(min-width: 992px) {
        .footer-content {
            grid-template-columns: 2fr 1fr 1fr;
        }
    }
</style>

<footer>
    <Links skew='top'/>
    <div class="wrapper">
        <div class="footer-inner">
            <div class="footer-content">
                <div>Этот сайт сделан при помощи последних технологий, расположен на облачном хостинге и существует в современном мире. Если какие-либо функции этого сайта у вас не работают, попробуйте обновить браузер или устройство, с которого вы его просматриваете</div>
                <div>
                    <a href="/privacy-policy" target="_blank">Политика конфиденциальности</a>
                    <a href="/donate" target="_blank">Поддержка автора</a>
                    <a href="/about" target="_blank">Обо мне</a>
                    <a href="/contact" target="_blank">Контакты</a>
                </div>
                <div>
                    <p>Мой Гитхаб</p>
                    <a href="https://github.com/leokolt" target="_blank">@leokolt</a>
                    <p>Телеграм-бот обратной связи</p>
                    <a href="https://t.me/KoltanRuFeedBackBot" target="_blank">@KoltanRuFeedBackBot</a>
                    <p>Телеграм-канал блога</p>
                    <a href="https://t.me/koltanblog" target="_blank">@koltanblog</a>
                    <p>RSS-канал блога</p>
                    <a href="/rss.xml" target="_blank">RSS</a>
                </div>
            </div>
            <div class="footer-copyright">
                © {new Date().getFullYear()}. Все права защищены
            </div>
        </div>

    </div>
</footer>
