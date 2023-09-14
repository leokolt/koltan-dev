---
title: Стили элементов в статьях
date: "2022-12-14"
description: Всем привет Меня зовут Леонид, и я - классный парнишка
tags:
  - numbers
  - odd
reading: 3
published: true
update: "2022-12-18"
---

Hello, I am _Post One._

**Nice to meet you!**

Всем привет Меня зовут Леонид, я классный парнишка и [мощный парень](https://webjeda.com/blog/sveltekit-loading-spinner). Я хочу помочь вам разобраться со всякими неприятностями.

<!-- <script>
import Links from '$lib/components/md/Links.svelte'
<Links url="/" title="Почему Svelte?" excerpt="ВОт такие дела" />
</script> -->

<script>
    import Link from '$lib/components/md/Link.svelte'
    import Alert from '$lib/components/md/Alert.svelte'
    import Spoiler from '$lib/components/md/Spoiler.svelte'
    import Empty from '$lib/components/md/Empty.svelte'
</script>

<Link url="style-guide" title="Создаем бесконечную бегущую строку без лагов и JavaScript" excerpt="Маленький туториал по созданию бегущей строки, которая бесконечная и еще сделана только на HTML и CSS" />

<Alert bg="accent" text="Будьте внимательны! Любая ошибка в следующем коде приведет к тому, что ваш проект крякнет"/>

<Alert bg="second" emoji="☄️" text="Будьте внимательны! Любая ошибка в следующем коде приведет к тому, что ваш проект крякнет"/>

<Alert bg="reserve" title="Прошу внимания!" emoji="☄️" text="Будьте внимательны! Любая ошибка в следующем коде приведет к тому, что ваш проект крякнет"/>

<Alert bg="accent" title="Прошу внимания!" text="Будьте внимательны! Любая ошибка в следующем коде приведет к тому, что ваш проект крякнет"/>

<Spoiler summary="Если коротко, то">

Вот вам яркий пример современных тенденций — сложившаяся структура организации способствует подготовке и реализации форм воздействия. Картельные сговоры не допускают ситуации, при которой тщательные исследования конкурентов объявлены нарушающими общечеловеческие нормы этики и морали.

</Spoiler>

<Spoiler bg="accent" summary="Все потому, что...">

Вот вам яркий пример современных тенденций — сложившаяся структура организации способствует подготовке и реализации форм воздействия. Картельные сговоры не допускают ситуации, при которой тщательные исследования конкурентов объявлены нарушающими общечеловеческие нормы этики и морали.

</Spoiler>

> Это великолепная цитата. Готовы узнать что будет дальше?

> # Заголовок
> Первый параграф
>
> Второй параграф
>
> > Вложенная цитата
> > > Цитата третьего уровня
>
> Продолжение основной цитаты

- [x] Отмеченный пункт
- [ ] Будет сделано
- [ ] Неотмеченный пункт

<Empty bg='second' border={false}>

**Важно знать, что**
* Это великолепная цитата. Готовы узнать что будет дальше? Или пока трусите, или все атки узнаем пока не поздно?
* Это великолепная цитата. Готовы узнать что будет дальше?
* Это великолепная цитата. Готовы узнать что будет дальше?

</Empty>

**Важно знать, что**
* Это великолепная цитата. Готовы узнать что будет дальше? Или пока трусите, или все атки узнаем пока не поздно?
* Это великолепная цитата. Готовы узнать что будет дальше?
* Это великолепная цитата. Готовы узнать что будет дальше?

|Столбец 1|Столбец 2|Столбец 3|
|:-|:-:|-:|
|Равнение по левому краю|Равнение по центру|Равнение по правому краю|
|Запись|Запись|Запись|

```html (src/routes/+page.svelte) {3-5}
<script>
function sum(a, b) {
  return a + b
}

let actual = sum(2, 2)
let expected = 4

if (actual !== expected) {
	throw new Error(`${actual} is not equal to ${expected}`)
}
</script>

<button
	class="card"
	class:selected={isSelected}
	class:flip={isSelectedOrMatch}
	disabled={isSelectedOrMatch}
	on:click={() => selectCard(cardIndex)}
>
	<div class="back" class:match>
		{card}
	</div>
</button>

<style>
	.card {
		height: 140px;
		width: 140px;
		font-size: 4rem;
		background-color: var(--bg-2);
		transition: rotate 0.3s ease-out;
		transform-style: preserve-3d;

		&.selected {
			border: 4px solid var(--border);
		}

		&.flip {
			rotate: y 180deg;
			pointer-events: none;
		}

		& .back {
			position: absolute;
			inset: 0;
			display: grid;
			place-content: center;
			backface-visibility: hidden;
			rotate: y 180deg;
		}

		& .match {
			transition: opacity 0.3s ease-out;
			opacity: 0.4;
		}
	}
</style>
```
