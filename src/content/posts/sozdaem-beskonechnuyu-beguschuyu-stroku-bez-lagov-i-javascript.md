---
title: Создаем бесконечную бегущую строку без лагов и JavaScript
date: "2023-09-25"
description: "Анимированная строка с текстом на чистом CSS"
tags: [pro-animatsii, css, html]
reading: 6
published: false

---

На главной странице этого сайта под самым первым блоком есть бегущая строка. Она бесконечная и в ней я перечисляю технологии, которыми более или менее владею. Конечно информативности у такого блока мало, но для красоты вполне себе сойдет. Такой элемент я впервые увидел на сайте площадки Gumroad, но там он явно работал с помощью JavaScript, а я решил поискать решения, которые могли бы создать бегущую строку без скриптов, на чистом CSS.

## Хорошо забытое старое

Всегда рекомендую всем перед тем как начать что-то выдумывать, писать скрипты, городить анимации, поискать решение попроще и понативнее. Собственно в случае с бегущей строкой такое решение сразу нашлось. В HTML [существует тег](https://developer.mozilla.org/ru/docs/Web/HTML/Element/marquee) `<marquee>`, который создает то, что нам нужно. Почти.

Во-первых, в моем случае мы имеем непрекращающийся поток слов, начинающийся с "html" и заканчивающийся "php". То есть после "php" идет "html", и так далее без конца по кругу. С помощью `<marquee>` такого не сделать. Во-вторых, слова, анимированные этим тегом двигаются как-то странно, как будто не плавно. Даже на современных устройствах с хорошими характеристиками экранов, дергания текста заметны невооруженным глазом. Хотя может я придираюсь. И, в-третьих, как итог, данный тег не рекомендуется использовать в работе, согласно тому же MDN, хотя он все еще работает в браузерах.

Значит ищем другие решения. И, если мы условились не использовать JavaScript, то должны обратиться к анимациям на CSS. Как вы понимаете, анимировать текст, чтобы он проезжал по экрану справа-налево не сложно. Для этого можно использовать следующий код

```html (Бегущая строка)
<section>
    <div>Привет! Я бегущая строка</div>
</section>

<style>
    div {
        font-size: 16px;
        animation: marquee 15s infinite linear;
        font-size: sans-serif;
    }

    @keyframes marquee {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>
```

И в результате получим следующее:

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/Leokolt/embed/OJrXeqX?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Leokolt/pen/OJrXeqX">
  Untitled</a> by Leo (<a href="https://codepen.io/Leokolt">@Leokolt</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Нажмите 'rerun', если вы ничего не видите в окне с Codepen. Да, текст уехал, но вроде мы уже получаем плавность и возможность контролировать нужные нам параметры бегущей строки. Например, мы уже задали в анимации бесконечность(свойство 'infinite') и время ее работы. Вот только зацикленности никакой. А она нужна.

## Кадры решают все

На ум приходит идея создать еще один элемент с текстом, полностью соответствующий оригиналу и в `@keyframes` заставить каждый из элементов следовать за впередиидущим элементом. Вот как это выглядит в коде:

```html (Бегущая строка)
<section>
    <div>Привет! Я бегущая строка </div>
    <div>Привет! Я бегущая строка </div>
</section>

<style>
    section {
       display: flex;
       overflow-x: hidden;
    }

    div {
      font-size: 70px;
      animation: marquee 15s infinite linear;
      font-size: sans-serif;
      line-height: 1.3;
      padding: 24px 0;
      white-space: nowrap;
      display: flex;
    }

   @keyframes marquee {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>
```
А вот как в деле:

<iframe height="300" style="width: 100%;" scrolling="no" title="Бегущая строка №2" src="https://codepen.io/Leokolt/embed/BavzggQ?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Leokolt/pen/BavzggQ">
  Бегущая строка №2</a> by Leo (<a href="https://codepen.io/Leokolt">@Leokolt</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Как видно. Все работает почти так, как нужно. Кроме того, что когда время на анимацию заканчивается, текст отпрыгивает в начало, что, конечно, очень заметно. И это нехорошо. Давайте тогда попробуем не создавать одинаковые элементы, а будем использовать всего один элемент с текстом, но ему в псевдоэлемент CSS пропишем тот же текст. Вот так:

```html (Бегущая строка)
<section>
    <div>Привет! Я бегущая строка </div>
</section>

<style>
    section {
       display: flex;
       overflow-x: hidden;
    }

    div {
      font-size: 120px;
      animation: marquee 10s infinite linear;
      font-size: sans-serif;
      line-height: 1.3;
      padding: 24px 0;
      white-space: nowrap;
      display: inline-block;
    }

    div:after {
        content: 'Привет! Я бегущая строка ';
    }

   @keyframes marquee {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>
```

В результате получим вполне себе приемлемый вариант. Правда в этом коде есть пара нюансов, которые нужно соблюсти, чтобы все работало. Изначально нужно задать такой размер шрифта или длину самого текста, чтобы он полностью НЕ влезал по ширине экрана. В примере ниже, размер шрифта аж 120 пикселей(с запасом), если сильно его уменьшить, то строка будет прерываться, а эффект бесконечности работать не будет. Также нужно не забыть задать родительскому контейнеру `overflow-x: hidden`, чтобы макет сайта не съезжал. Самому тексту не помешает свойство `white-space: nowrap;`, которое запретит перенос слов на новую строку. Все эти правила нужно использовать и для всех следующих наших экспериментов с бегущей строкой.

<iframe height="300" style="width: 100%;" scrolling="no" title="Бегущая строка №3" src="https://codepen.io/Leokolt/embed/xxmOvVN?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Leokolt/pen/xxmOvVN">
  Бегущая строка №3</a> by Leo (<a href="https://codepen.io/Leokolt">@Leokolt</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Подход с псевдоэлементом разгружает верстку, но может накладывать ограничения на вид текста в бегущей строке и источник его появления. Например, вам будет сложно повторить бегущую строку, которая расположена на этом сайте на главной странице. Там у меня каждое слово обернуто в свой span и каждому span задан псевдоэлемент, в виде адаптированной под CSS "svg-звездочки", чтобы они находились между словами. А если вы получаете данные для строки динамически, из базы данных, например, то решение с указанием контента для этого блока в css-псевдоэлементе вообще не приемлемо. Кроме того, если внимательно присмотреться к нашему "бегунку", можно увидеть некоторое подглючивание, легкое смещение текста вне анимации в момент, когда начало текста, будь то основного или в псевдоэлементе, подходит к левому краю экрана. Так, конечно, никуда не годится.

## Все поехало, потекло

Решение есть. Для этого нужно сделать шаг назад и вернутся к двум одинаковым блокам с текстом. Все, что нам нужно - это создать два набора ключевых кадров анимации для блоков с текстом и указать разное время задержки старта анимации в отрицательном диапазоне.


```html (Бегущая строка)
<section>
    <div class="div1">Привет! Я бегущая строка </div>
    <div class="div2">Привет! Я бегущая строка </div>
</section>

<style>
    section {
       display: flex;
       overflow-x: hidden;
    }

    div {
      font-size: 70px;
      font-size: sans-serif;
      line-height: 1.3;
      padding: 24px 0;
      white-space: nowrap;
      display: inline-block;
    }

    .div1 {
        animation: marquee1 20s infinite linear;
        animation-delay: -20s;
    }

    .div2 {
        animation: marquee2 20s infinite linear;
        animation-delay: -10s;
    }


    div:after {
        content: 'Привет! Я бегущая строка ';
    }

@keyframes marquee1 {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    @keyframes marquee2 {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-200%);
        }
    }
</style>
```

В данном примере первый и второй блоки с текстом будут двигаться по 20 секунд, но первый начнет движение на те же 20 секунд раньше, а второй на 10 секунд раньше. Кроме того в кадрах анимации, первый блок начнет смещаться по оси X не с нулевой отметки, а со 100%, а закончит на отметке -100%. Второй блок при этом начнет смещение с отметки 0, а закончит аж на отметке -200%. И вот тогда мы получим работоспособный код бесконечной анимации бегущей строки, без лагов, подпрыгиваний и использования JavaScript.

<iframe height="300" style="width: 100%;" scrolling="no" title="Бегущая строка №4" src="https://codepen.io/Leokolt/embed/RwERXVG?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Leokolt/pen/RwERXVG">
  Бегущая строка №4</a> by Leo (<a href="https://codepen.io/Leokolt">@Leokolt</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Вы, конечно, можете поэкспериментировать над размером текста, его длиной, фоном, временем работы анимации и так далее. Например, на своем сайте я пустил строку немного под углом. Ну, так же красивее, нет что ли? ;) Все методы, описанные в этой статье, я пробовал лично, на нескольких своих проектах. Где подсмотрел итоговое решение, уже и не вспомню, а может быть я сам до него дошел. Если вам понравилась эта статья, поделитесь ею с друзьями, хотя это уже не модно. Также вы можете помочь мне не забросить этот блог, если кинете любой донат. Я буду рад. Спасибо.
