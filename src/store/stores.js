import { writable } from 'svelte/store'

export const formUser = writable({
	name: "村上奈緒美",
	text: "例：飲みにいきませんか？",
	email: "xxxx@gmail.com"
})
