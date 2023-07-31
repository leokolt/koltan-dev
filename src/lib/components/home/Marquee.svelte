<section>
    <div class="scroller">
        <span>HTML</span>
        <span>JS</span>
        <span>Jquery</span>
        <span>CSS</span>
        <span>WordPress</span>
        <span>Tilda</span>
        <span>SCSS</span>
        <span>ReactJS</span>
        <span>Svelte</span>
        <span>Gatsby</span>
        <span>NextJS</span>
        <span>php</span>
    </div>
    <div class="scroller-last">
        <span>HTML</span>
        <span>JS</span>
        <span>Jquery</span>
        <span>CSS</span>
        <span>WordPress</span>
        <span>Tilda</span>
        <span>SCSS</span>
        <span>ReactJS</span>
        <span>Svelte</span>
        <span>Gatsby</span>
        <span>NextJS</span>
        <span>php</span>
    </div>
</section>

<style>
    section {
        padding: 24px 0;
        overflow: hidden;
        display: flex;
        color: #fff;
        background: #000;
        margin-top: 80px;
    }

    .scroller {
        line-height: 1.3;
        white-space: nowrap;
        animation: scrollLine 30s infinite linear;
        animation-delay: -30s;
        font-size: var(--h2);
    }

    .scroller-last {
        animation: scrollLine2 30s infinite linear;
        animation-delay: -15s;
        white-space: nowrap;
        font-size: var(--h2);
        line-height: 1.3;
    }

    .scroller span:before, .scroller-last span:before {
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'%3E%3Cg stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 .5v13M1.5 3.5l11 7M1.5 10.5l11-7'/%3E%3C/g%3E%3C/svg%3E");
        width: 32px;
        height: 32px;
        display: inline-block;
        margin: 0 15px;
    }

    @keyframes scrollLine {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    @keyframes scrollLine2 {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-200%);
        }
    }
</style>
