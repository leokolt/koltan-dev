<script>
    import ContactForm from "../chunks/ContactForm.svelte";
    import Modal from "../globals/Modal.svelte";
    let showModal = false;
</script>
<section>
    <svg xmlns="http://www.w3.org/2000/svg" class="star" xml:space="preserve" viewBox="0 0 300 300"><path fill="#ed6f35" d="m182.7 64.8 35.4 71.8 79.2 11.5L240 204l13.5 78.9-70.8-37.3-70.9 37.3 13.5-78.9L68 148.1l79.2-11.5z"/><path fill="none" stroke="#231f20" stroke-miterlimit="10" stroke-width="18" d="m137.7 37.9 35.4 71.8 79.2 11.5-57.3 55.9 13.5 78.9-70.8-37.3L66.8 256l13.5-78.9L23 121.2l79.2-11.5z"/></svg>
    <div class="wrapper">
        <div class="callback-inner">
            <div class="callback-info">
                Если Вам нужно что-либо из веб-разработки, но дальше читать сайт не охота, жмите на эту большую штуковину
            </div>
            <div class="callback-btn">
                <button class="round" on:click={() => (showModal = true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="svgin" width="800" height="800" viewBox="0 0 20 20"><path fill-rule="evenodd" d="m0 18.602 1.393 1.395L18 3.349V14h2V0H5.907l-.03 2h10.757z"/></svg>
                    <svg id="rotatingText" viewBox="0 0 200 200" width="350" height="350" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path id="circle" d="
                        M 100, 100
                        m -85, 0
                        a 85, 85 0 1, 0 170, 0
                        a 85, 85 0 1, 0 -170, 0
                    ">
                        </path>
                      </defs>
                      <text width="400">
                        <textPath alignment-baseline="top" xlink:href="#circle" class="text">
                           * Напишите мне * Напишите мне
                        </textPath>
                      </text>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>

<Modal bind:showModal>
    <ContactForm />
</Modal>

<style>
    section {
        background: var(--color-accent);
        margin-top: 130px;
        position: relative;
        padding: calc(2.5 * var(--unit-3)) 0;
    }

    section:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: var(--color-accent);
        height: 50px;
        transform: translateY(-100%);
        transform-origin: left;
        transform: translateY(-100%) skewY(-178deg);
        z-index: -1;
    }

    .star {
        position: absolute;
        width: 90px;
        top: 40px;
        left: 50px;
        transform: rotate(45deg);
    }

    .callback-inner {
        display: grid;
        align-items: center;
        gap: var(--unit-3);
        grid-auto-flow: row;
    }

    .callback-info {
        color: #292929;
        font-size: var(--h1);
        text-transform: uppercase;
        font-weight: 900;
        line-height: 1.2;
        padding-right: 50px;
    }

    .callback-btn {
        flex: none;
    }

    .round {
        display: grid;
        align-items: center;
        justify-items: center;
        flex: none;
        transition: var(--transition-cubic);
        width: fit-content;
        border-radius: 999px;
        cursor: pointer;
    }

    .round:hover {
        transform: rotateZ(15deg);
    }

    .round .svgin {
        position: absolute;
        width: 60px;
        height: auto;
    }

    .round .svgin path {
        fill: var(--color-primary)
    }

    svg#rotatingText {
        border: 3px solid var(--color-primary);
        border-radius: 999px;
        background: var(--color-bg);
        padding: 0;
        width: 200px;
        height: 200px;
    }

      .text {
        font-weight: 400;
        letter-spacing: 4.4px;
        font-size: 20px;
        fill: var(--color-primary);
        font-family: 'Work Sans';
      }

      @media(min-width: 992px) {
        .callback-inner {
            grid-auto-flow: column;
        }

        svg#rotatingText {
            width: auto;
            height: auto;
        }

        .round .svgin {
            width: 100px;
        }
      }

</style>
