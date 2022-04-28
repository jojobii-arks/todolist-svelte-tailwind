import { writable } from "svelte/store";


export let modalIsOpen = writable(false);

export const viewModal = (bool) => {
	modalIsOpen.update(modalIsOpen => {
		modalIsOpen = bool
		return modalIsOpen;
	})
}

export let editing = writable({});
