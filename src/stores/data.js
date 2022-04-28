import { writable } from "svelte/store";

export let data =  writable([]);
let nextId = 1;

export const addEntry = function (entryText) {
	data.update(data => {
		data.push({
			entry: entryText,
			id: nextId++
		});
		return data;
	});
};

export const removeEntry = function (targetId) {
	data.update(data => {
		data.splice(data.findIndex((e) => e.id === targetId), 1);
		return data;
	});
}

export const editEntry = function (targetId, entryText) {
	data.update(data => {
		let indexOfTarget = data.findIndex((e) => e.id === targetId);
		data[indexOfTarget].entry = entryText;
		return data;
	});
}
