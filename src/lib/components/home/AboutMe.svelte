<script>
    import { calculateTime } from "$lib/utils/timeInterval";
    import { plural } from "$lib/utils/pluralWord";

</script>

<section>
    <div class="wrapper">
        <div class="inner">
            <div class="nums">
                <span>Более {plural(calculateTime("09/01/2018"), 'года', 'лет', 'лет')} в разработке</span> веб-сайтов, больше {plural(100, 'проекта', 'проектов', 'проектов')}, выполненных на различном стеке, не меньше {plural(300, 'довольного клиента', 'довольных клиентов', 'довольных клиентов')}
            </div>

            <div class="rotate">
                <img src="/img/golova.webp" width="50" height="50" alt="golova">
                <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
                  <defs>
                    <path id="circle" d="M 100, 100
                            m -75, 0
                            a 75, 75 0 1, 0 150, 0
                            a 75, 75 0 1, 0 -150, 0
                            ">
                    </path>
                  </defs>
                  <text width="400">
                    <textPath alignment-baseline="top" xlink:href="#circle" class="text">
                       Время заказать красиый и быстрый сайт &nbsp;&nbsp;*
                    </textPath>
                  </text>
                </svg>
            </div>

            <div class="bio">
                <p>
                    Меня зовут Леонид Колтан. Я - фрилансер с 2018 года. Работаю с популярными CMS и чистым кодом, c Javascript и JS-фреймворками. Учился на гуманитария и стал технарем.
                </p>
                <p>
                    Мне {plural(calculateTime("07/03/1987"), 'год', 'года', 'лет')} и я не с пеленок в  IT, но на сегодня в моем портфолио не мало различных проектов, постоянные клиенты и тысячи строк кода.
                </p>
            </div>

        </div>

    </div>
</section>

<style>

    section {
        margin-top: 120px;
    }

    .inner {
        display: grid;
        gap: 30px;
        grid-template-columns: 1fr;
    }

    .nums {
        font-size: var(--h2);
        line-height: 1.4;
        text-transform: uppercase;
        /* flex: 1 1 calc(60% - 25px); */
    }


    .bio p {
        font-size: var(--p);
    }

    .bio p + p {
        margin-top: 20px;
    }


    .text {
      font-weight: 400;
      letter-spacing: 1.6px;
      font-size: var(--p);
      fill: var(--color-primary);
    }

    #rotatingText {
      animation-name: rotate-circle;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes rotate-circle {
      to {
        transform: rotate(1turn);
      }
    }

    .rotate {
      display: grid;
      align-items: center;
      justify-items: center;
      flex: none;
    }

    .rotate img {
      position: absolute;
      width: 90px;
      height: auto;
    }

    img {
        width: 200px;
        width: 100%;
        height: auto;
    }

    @media(min-width: 992px) {
        .inner {
            gap: 30px;
            grid-template-columns: 6fr 2fr 3fr;
            align-items: center;
        }
    }

</style>
