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
