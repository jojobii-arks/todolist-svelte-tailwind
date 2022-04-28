<script>
	import { viewModal } from '../components/ModalData';
	import { data, addEntry, removeEntry } from '../stores/data'
	export let todo;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let checked = false;

</script>

<li class="flex justify-between bg-slate-300 even:bg-slate-200 p-2">
	<div class="flex items-center gap-2">
		<input type="checkbox" bind:checked={checked}>
		<p class="{checked ? 'line-through' : '' }">
			{todo.entry}
		</p>
	</div>
	<div class="flex gap-2">
		<button on:click={() => dispatch('edit', todo.id)} class="bg-gray-700 hover:bg-gray-500 text-white px-3 rounded-full">
			edit
		</button>
		<button on:click={() => removeEntry(todo.id)} class="bg-gray-700 hover:bg-gray-500 text-white px-5 rounded-full">
			delete
		</button>
	</div>
</li>
