<script>
import { data, addEntry } from '../stores/data.js';
let input = '';

function submit() {
	if (!input) {
		return
	}
	addEntry(input);
	input = ''
}

</script>

<div class="flex items-center gap-2">
	<input on:keydown={ e => e.key === 'Enter' ? submit() : null } type="text" class="w-full p-0.5" bind:value="{input}">
	<button on:click={submit} class="bg-black text-white hover:bg-gray-700 text-center h-full aspect-square">+</button>
</div>
