<script>
    import ContactForm from "../globals/ContactForm.svelte";
    import Modal from "../globals/Modal.svelte";
    let showModal = false;
</script>

<section>
    <div class="wrapper">
        <div class="steps-inner">
            <div class="steps-button">
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
            <div class="steps-content">
                <h2>Как мы будем с вами работать</h2>
                <div class="steps-content-items">
                    <div class="steps-content-item">
                        <span>1</span>
                        <div>Напишите мне на почту, в месенджеры или через контактную форму и опишите примерный фронт работ. Или просто дайте знать о себе, я напишу вам сам когда и куда нужно</div>
                    </div>
                    <div class="steps-content-item">
                        <span>2</span>
                        <div>Мы с вами договоримся о цене, сроках, виде оплаты, нюансах работы, техническом задании, возможностях для связи и обо всем, о чем можно договориться</div>
                    </div>
                    <div class="steps-content-item">
                        <span>3</span>
                        <div>Я сдам работу, вы проверите, сообщите о доработках и исправлениях, а уже после правок, можно будет переходить к оплате, если мы с вами не договорились о другом порядке расчетов</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

<Modal bind:showModal>
    <ContactForm />
</Modal>

<style>
    h2 {
        font-size: var(--h1);
        margin-bottom: var(--unit-3);
    }
    .steps-inner {
        display: grid;
        align-items: center;
        gap: var(--unit-3);
        grid-auto-flow: row;
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
        position: relative;
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
        fill: #292929;
    }

    svg#rotatingText {
        border: 3px solid var(--color-primary);
        border-radius: 999px;
        background: var(--color-accent);
        padding: 0;
        width: 200px;
        height: 200px;
    }

    .text {
        font-weight: 400;
        letter-spacing: 4.4px;
        font-size: 20px;
        fill: #292929;
    }

    .steps-button {
        order: 2;
    }

    .steps-content-items {
        position: relative;
    }

    .steps-content-items:before {
        content: '';
        background: linear-gradient(  to bottom,  var(--color-accent),  var(--color-accent) 50%,  var(--color-bg) 50%,  var(--color-bg));
        background-size: 100% 20px;
        display: block;
        width: 3px;
        height: 65%;
        position: absolute;
        left: var(--unit-3);
        z-index: -1;
        top: 15px;
        }

    .steps-content-item {
        display: flex;
        align-items: flex-start;
        gap: var(--unit-2);
    }

    .steps-content-item + .steps-content-item {
        margin-top: var(--unit-3);
    }

    .steps-content-item span {
        border: var(--border);
        border-radius: var(--radius);
        height: calc(2 * var(--unit-3));
        width: calc(2 * var(--unit-3));
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        font-size: var(--p);
        font-weight: 900;
        background-color: var(--color-bg);
    }

    @media(min-width: 992px) {
        .steps-inner {
            grid-auto-flow: column;
        }

        svg#rotatingText {
            width: auto;
            height: auto;
        }

        .round .svgin {
            width: 100px;
        }
        .steps-button {
            order: unset;
        }
        .steps-content-item span {
            font-size: var(--h4);
        }
        .steps-content-item {
            align-items: flex-start;
        }

        .steps-content-items:before {
            height: 80%;
        }
    }
</style>
