---
title: Размещение статичного сайта Svelte на Yandex Cloud. Часть 1. Отказ от удобства
date: "2023-10-25"
description: "Начинаю практически полезную серию статей о том, как я размещал этот сайт в Облаке Яндекса. Первая часть про выбор и решение"
tags: [svelte, yandeks-oblako, sveltekit]
reading: 3
published: true
---

Свои самоучебные проекты на Next.js, а также первый вариант этого сайта я размещал на Vercel и Cloudflare Pages. Отличные удобные и бесплатные  платформы для легких сайтов с почти отсутствующим трафиком. Механизм работы с ними чрезвычайно прост: вы создаете там проект, подключаете к нему репозиторий с кодом на Гитхабе, делаете минимум настроек, а затем он разворачивается в Облаке. И всякий раз, когда вы будете пушить свой проект на Гитхаб, он будет разворачиваться на сервере и представать перед вами в обновленном виде. Очень удобно. Пользуйся сколько влезет бесплатно, пока сайт не начнет требовать больше ресурсов.

В России сервисов с таким функционалом нет. Теоретически на каком-нибудь VDS можно развернуть что-то похожее, подключить к Гиту, настроить автоматизацию, помучиться в общем, но эти страдания явно не для рядового пользователя. А сегодня, в связи со сложившимися обстоятельствами, необходимость развернуть свой проект в России встала крайне остро.

Вчера ты просто не мог оплатить российской картой зарубежный сервис. Сегодня ты не можешь подключить к какому-нибудь Vercel домен с российской доменной зоной. Завтра тебя обяжут любой проект, даже такой малюсенький как этот сайт, размещать на российских серверах. А послезавтра, все что не хостится из России будет заблокировано Роскомнадзором. При этом не нужно забывать и о законе, обязывающем хранить данные пользователей на Родине. А что там данные, что не данные - попробуй разберись. В общем, я решил, что нужно размещаться в России, и найти что-то такое, что хоть как-то будет похоже Vercel и Cloudflare.

## Муки выбора

Понимая, что конечный вид моего сайта - это набор статичных файлов, можно было бы не заморачиваться. Оплатить обыкновенный виртуальный хостинг, закинуть туда файлы, подвязать домен и радоваться. Но первым делом я подумал, что сайт на таком современном стеке, который хостится с php-шареда - это очень странно и даже если бы мне удалось все настроить как надо, ну, честно, не комильфо.

Вариант с VDS отпал, так как возиться с конфигурацией, все настраивать через консоль долго, чревато ошибками, да и дороговато. Плюс нужно учесть один немаловажный факт - я очень плохо владею навыком настройки VDS. Ну, как плохо... вообще не владею. Я могу работать по инструкциям, но когда их нет (а их для Svelte нет, либо они очень сложны), то и суда нет.

Хостинг статичных сайтов подразумевает банальное место для хранения данных, причем весьма в небольшом объеме (если, конечно, не хостить оттуда фотки с «зеркалок»). Серверная часть вам не нужна, защита от атак хакеров на хранилище не нужна, обрабатывать запросы пользователей в большинстве случаев тоже не нужно. Однако просто разместить сайт на каком-нибудь Google Drive нельзя, так как нам нужна возможность удобной подвязки своего домена, установка SSL-сертификата и тому подобное. Но в мире уже давно существует подобный Облачным дискам вариант хранения сайтов, только со всеми вышеперечисленными функциями.

## Облачный Яндекс

По запросу «хостинг статичных сайтов» Яндекс выдает свое детище - Yandex Cloud. Этот хостинг осуществляется при помощи бакета[^1], созданного в Объектном хранилище[^2] или Object Storage. Прочитав бегло мануалы, прошерстив конкурентов Яндекса и сообразив, что принципиальных проблем расположение моей статики на Облаке Яндекса мне не доставит, я решил приступить к работе.

[^1]: Бакет - логическая сущность в Объектном хранилище, его часть, помогающая организовать хранение объектов.
[^2]: Yandex Object Storage — это универсальное масштабируемое решение для хранения данных. Оно подходит как для высоконагруженных сервисов, которым требуется надежный и быстрый доступ к данным, так и для проектов с невысокими требованиями к инфраструктуре хранения, вроде статичных сайтов.

Яндекс использует S3-совместимое хранилище. S3, он же Amazon Simple Storage Service - это технология безопасного хранения данных, автоматически расширяемое хранилище, имеющее свое API, графический интерфейс и так далее. Подробнее можно прочитать на [сайте](https://cloud.yandex.ru/services/storage). Эта часть Yandex Cloud за последнее время стала удобнее, появились новые возможности, что конечно обрадовало меня.

Чуть выше я написал, что надеялся развернуться без проблем, но ошибся. Проблемы были, и их было не мало. Иной раз я даже думал, что Vercel не такой уж иностранный сервис, а у Cloudflare вообще в России располагается часть их CDN, так что это наш родной скрепный Cloudflare. Однако нерешаемых проблем практически нет, и эта статья, а также все статьи из этой серии как раз об этом. Если бы проблемы не были решены, то сейчас бы этого сайта не было.

Ниже подготовил для вас краткий список преимуществ и недостатков Yandex Cloud, которые я выявил при публикации на нем сайта на Svelte.

**Плюсы:**

- Это российский сервис, вся документация и интерфейс на русском языке. Данные хранятся в защищённом виде в соответствии с требованиями 152-ФЗ, GDPR и других стандартов.
- Облако Яндекса позволяет к размещенному в Объектном хранилище сайту подключить домен, выпустить бесплатный SSL-сертификат, настроить видимость и доступы.
- Есть грант для начала работы. На сентябрь 2023 года его размер - 4000 рублей, которые можно будет тратить в течение 60 дней. Изначальная цена не очень высокая сама по себе. Зайт можно захостить рублей за 100 в месяц.
- Гибкость, отказоустойчивость, совместимость с локальными графическими s3-клиентами.
- Удобство интерфейса, имеется приложение для мобильного, работает техподдержка и подобные приятные

**Минусы:**

- Если нет опыта, то придется потратить время на чтение документации и общение с техподдержкой, так как элементарное действие - например, подключение к Облаку файлового менеджера на своем компьютере - требует нетривильаных действий.
- Поддержка хоть и есть, но не стоит расчитывать, что она все сделает за вас. Хотя есть возможность подключиться к платной поддержке, возможно они будут помогать увлеченно.
- Нет интеграции с Гитхабом, Гитлабом и другими похожими сервисами хранения кода.
- Нельзя кидать папки в хранилище через встроенный интерфейс. Вы можете закинуть туда только файлы, и создать папки отдельно, что вообще не удобно. S3-клиенты в помощь.
- Объектное хранилище по сути не создано для SPA (одностраничных приложений) из-за чего особняком стоит проблема обновления всех страниц, кроме главной, выдающего ошибку 404.

## Можно всех посмотреть?

Радуемся плюсам и решаем проблемы. Такой девиз моей работы с Яндекс Клауд был последние недели перед тем, как я запустил этот сайт. Стоит отметить, что кроме этой площадки в России существует еще ряд подобных  - облака от mail.ru/VK, от мобильных операторов, от Selectel, бывшее облако Сбера и т. д. Я посмотрел почти всех и везде нашел больше недостатков, чем преимуществ по сравнению с облаком Яндекса. Где-то затруднено подключение домена, а чтобы подключить SSL нужно предоставить сертификат техподдержке. Где-то просто нельзя начать работать, потому что сначала нужно написать администраторам письмо, чтобы они позволили тебе развернуться на их Облаке. В общем, Яндекс остался один в поле воин для моего SPA-образного статичного сайта, и следующие статьи я расскажу вам о том, как там разворачивал его, как решал проблемы, и как упрощал себе жизнь. Не теряйтесь!