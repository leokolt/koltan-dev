import { writable } from 'svelte/store'
import { browser } from '$app/environment'

//type Theme = 'light' | 'dark'

// we set the theme in `app.html` to prevent flashing
const userTheme = browser && ( localStorage.getItem('color-scheme') || window.matchMedia('(prefers-color-scheme: dark)'.matches));

// create the store
export const theme = writable(userTheme ?? 'dark')

// update the theme
export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

		document.documentElement.setAttribute('color-scheme', newTheme)
		localStorage.setItem('color-scheme', newTheme)

		return newTheme
	})
}

// set the theme
export function setTheme(newTheme) {
	theme.set(newTheme)
}
