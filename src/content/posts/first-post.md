---
title: Post One
date: 2022-12-14
tags:
  - numbers
  - odd
draft: true
published: true
---

Hello, I am _Post One._

**Nice to meet you!**


```js:src/lib/javascripts {1,3-4} showLineNumbers
    onMount(() => {
        carouselItemRef = document.querySelector('.carousel > *');

          // Добавляем обработчики событий прокрутки карусели, чтобы следить за ее концами
        carouselRef.addEventListener('scroll', updateCarouselEnds);
        window.addEventListener('resize', updateCarouselEnds);

        // Обновляем состояние, когда компонент отрисован впервые
        updateCarouselEnds();
    });

```
