<script>
    import { onMount, onDestroy } from 'svelte';

    export let message = 'Мы используем куки для улучшения вашего опыта';
    export let buttonText = 'Принять';
    export let expiryDays = 90;

    let showBanner = false;

    const handleBannerButtonClick = () => {
        const consentExpiration = new Date();
        consentExpiration.setDate(consentExpiration.getDate() + expiryDays);
        localStorage.setItem('cookieConsent', JSON.stringify({
            consent: 'true',
            expiration: consentExpiration.toISOString()
        }));

        showBanner = false;
    };

    onMount(() => {
        const consentData = JSON.parse(localStorage.getItem('cookieConsent'));
        if (!consentData || new Date() > new Date(consentData.expiration)) {
            showBanner = true;
        }
    });

    onDestroy(() => {
        // Чистим все слушатели и таймеры при уничтожении компонента (например, при переходе на другую страницу)
    });
</script>

{#if showBanner}
    <div class="cookie-consent">
        <div class="cookie-consent-message">{message}</div>
        <button class="cookie-consent-button btn" on:click={handleBannerButtonClick}>{buttonText}</button>
    </div>
{/if}

<style>
    .cookie-consent {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 30px);
        background-color: var(--color-fg);
        color: #f7f7f7;
        border-radius: var(--radius);
        border: var(--border);
        border-color: #f7f7f7;
        padding: var(--unit) var(--unit-3);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .cookie-consent-message {
        line-height: 1.2;
    }

    .cookie-consent-button {
        padding: 4px 12px;
        cursor: pointer;
        font-size: var(--p2);
        border-radius: var(--radius);
        font-weight: 400;
        margin-top: 0;
        margin-left: var(--unit-3);
        color: #f7f7f7;
        border-color: #f7f7f7;
    }

    @media(min-width: 992px) {
        .cookie-consent {
            width: auto;
        }
    }
</style>
