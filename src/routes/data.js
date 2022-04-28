import { writable } from "svelte/store";

export let data =  writable([]);

export const addEntry = function (entryText) {
	data.update(data => {
		data.push(entryText);
		return data;
	});
};
