<script>
    import { page } from '$app/stores'

    export let url = $page.url
    export let title = ''
    export let text = ''

    let done

    const shareDetails = { url, title, text }

    const handleSharing = async () => {
        if (navigator.share) {
            try {
            await navigator
                .share(shareDetails)
                .then(() =>
                console.log("Готово")
                )
            } catch (error) {
            console.log(`Ничего не получилось, потому что ${error}`);
            }
        } else {
            // fallback code
            console.log(
            "Эта функция не поддерживается этим браузером..."
            )
        }
    }

    const copyLink = () => {
        window.navigator.clipboard.writeText(url)

        done = true

        setTimeout(() => {
            done = false
        }, 3000)
    }

</script>

<div class="shares">
        <a class="btn" href='https://t.me/share/url?url={url}&text={title}' target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 48 48"><path fill="#000" d="M41.42 7.309s3.885-1.515 3.56 2.164c-.107 1.515-1.078 6.818-1.834 12.553l-2.59 16.99s-.216 2.489-2.159 2.922c-1.942.432-4.856-1.515-5.396-1.948-.432-.325-8.094-5.195-10.792-7.575-.756-.65-1.62-1.948.108-3.463L33.648 18.13c1.295-1.298 2.59-4.328-2.806-.649l-15.11 10.28s-1.727 1.083-4.964.109l-7.016-2.165s-2.59-1.623 1.835-3.246c10.793-5.086 24.068-10.28 35.831-15.15Z"/></svg>
        </a>

    <button class="btn" on:click={handleSharing}>
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 28 28"><path fill="#212121" fillRule="nonzero" d="M23.75 5A2.25 2.25 0 0 1 26 7.25v13.5A2.25 2.25 0 0 1 23.75 23H4.25A2.25 2.25 0 0 1 2 20.75V7.25A2.25 2.25 0 0 1 4.25 5ZM13.998 8.62a.75.75 0 0 0-.531.22l-3.25 3.255a.75.75 0 0 0 1.061 1.06l1.97-1.973v7.445a.75.75 0 0 0 1.5 0v-7.446l1.974 1.974a.75.75 0 0 0 1.06-1.06L14.529 8.84a.75.75 0 0 0-.53-.22Z"/></svg>
    </button>

    <button class="btn share-copy" on:click={copyLink} class:done={done === true}>
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24"><path fill="#292D32" d="M16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"/><path fill="#292D32" d="M17.1 2h-4.2C9.817 2 8.37 3.094 8.07 5.739c-.064.553.395 1.011.952 1.011H11.1c4.2 0 6.15 1.95 6.15 6.15v2.078c0 .557.457 1.015 1.01.952C20.907 15.63 22 14.183 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24"><path fill="#292D32" d="M17.1 2h-4.2C9.817 2 8.37 3.094 8.07 5.739c-.064.553.395 1.011.952 1.011H11.1c4.2 0 6.15 1.95 6.15 6.15v2.078c0 .557.457 1.015 1.01.952C20.907 15.63 22 14.183 22 11.1V6.9C22 3.4 20.6 2 17.1 2Z"/><path fill="#292D32" d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9v4.2C2 20.6 3.4 22 6.9 22h4.2c3.5 0 4.9-1.4 4.9-4.9v-4.2C16 9.4 14.6 8 11.1 8Zm1.19 5.65-3.71 3.71a.71.71 0 0 1-.51.21.71.71 0 0 1-.51-.21L5.7 15.5a.712.712 0 0 1 0-1.01c.28-.28.73-.28 1.01 0l1.35 1.35 3.21-3.21c.28-.28.73-.28 1.01 0s.29.74.01 1.02Z"/></svg>
    </button>
</div>

<style>
    .shares {
        display: flex;
        gap: var(--unit-2);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn {
        margin: 0;
        padding: var(--unit);
    }

    svg {
        width: calc(1 * var(--unit-3));
        height: auto;
    }

    svg path {
        fill: var(--color-primary);
    }

    .share-copy svg:last-child, .share-copy.done svg:first-child {
        display: none;
    }

    .share-copy.done svg:last-child, .share-copy svg:first-child {
        display: block;
    }
</style>
