<script>
    export let url
    export let title
    export let excerpt
</script>

<a href="/blog/{url}" class="btn post-link">
    <h4>{title}</h4>
    <p>{excerpt}</p>
    <img src="/logo.svg" alt="logo" class=""><span>/blog/{url}</span>
</a>

<style>
    .post-link {
        display: block;
        border: var(--border);
        border-radius: var(--radius);
        text-decoration: none;
        color: var(--color-primary);
        padding: var(--unit-3);
        width: 100%;
        text-align: left;
        position: relative;
        background-color: var(--color-bg)
    }

    .post-link:before {
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' id='Слой_1' x='0' y='0' version='1.1' viewBox='0 0 231.4 512'%3E%3Cstyle%3E.st0%7Bfill:none%7D.st1%7Bfill:%23f7c90d%7D%3C/style%3E%3Cpath d='M188.9 255.7C188.9 146.6 106.1 56.6 0 45.1v421.1c106.1-11.4 188.9-101.5 188.9-210.5z' class='st0'/%3E%3Cpath d='M188.9 255.7C188.9 364.8 106 454.8 0 466.2v41.1c26-2.3 51.3-8.6 75.5-18.8 30.1-12.7 57.1-30.9 80.3-54.1s41.4-50.2 54.1-80.3c13.2-31.2 19.9-64.3 19.9-98.4 0-34.1-6.7-67.2-19.9-98.4-12.7-30.1-30.9-57.1-54.1-80.3s-50.2-41.4-80.3-54.1C51.3 12.6 26 6.3 0 4v41.1c106.1 11.5 188.9 101.5 188.9 210.6z' class='st1'/%3E%3Cpath d='M136 255.7c0-78.5-59.7-143.4-136-151.6v303.2c76.4-8.3 136-73.1 136-151.6z' class='st0'/%3E%3Cpath d='M136 255.7C136 334.2 76.4 399 0 407.3v29.6c18.7-1.7 37-6.2 54.4-13.6 21.7-9.2 41.1-22.3 57.8-39 16.7-16.7 29.8-36.2 39-57.8 9.5-22.4 14.3-46.3 14.3-70.8 0-24.6-4.8-48.4-14.3-70.8-9.2-21.7-22.3-41.1-39-57.8S76 97.2 54.4 88C37 80.7 18.7 76.1 0 74.5v29.6c76.4 8.2 136 73.1 136 151.6z' class='st1'/%3E%3C/svg%3E");
        width: calc(4 * var(--unit-3));
        height: calc(4 * var(--unit-3));
        background-repeat: no-repeat;
        position: absolute;
        right: -6rem;
        bottom: 1rem;
        z-index: -1;
        display: none;
    }

    .post-link:hover {
        text-decoration: none;
        color: var(--color-primary);
    }

    h4 {
        font-size: var(--h5);
        margin-bottom: var(--unit);
    }

    p {
        font-size: var(--p2);
        line-height: 1.2;
        margin-bottom: var(--unit-2);
    }

    img {
        max-width: var(--unit-2);
        display: none;
        margin-right: var(--unit-2);
    }

    span {
        font-size: var(--p3);
        vertical-align: text-top;
        color: var(--color-reserve);
        display: none;
    }

    @media(min-width: 992px) {
        a:before {
            display: block;
        }

        img {
            display: inline-block;
        }
        span {
            display: inline;
        }
    }
</style>
