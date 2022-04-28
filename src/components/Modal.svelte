<script>
	import { modalIsOpen, viewModal, editing } from '../components/ModalData';
	import { data, editEntry } from '../stores/data';


	function confirm() {
		editEntry($editing.id, value);
		viewModal(false);
	}

	let value;

	function updatePlaceholder() {
		value = $editing.entry;
	}

	$: updatePlaceholder($editing);

</script>

<div on:mousedown={() => viewModal(false)} class="absolute bg-black bg-opacity-75 w-screen h-screen flex justify-center items-start pt-16 {$modalIsOpen ? '' : 'hidden'}">
	<div on:mousedown|stopPropagation class="bg-white p-6 w-[50%] max-w-md grid grid-flow-row gap-3">
		<h2 class="text-center font-bold text-2xl">edit task</h2>
		<h3>{$editing.entry}</h3>
		<input on:keydown={ e => e.key === 'Enter' ? confirm() : null } bind:value type="text" class="text-xs p-1 w-full">
		<div class="flex justify-between">
			<button on:click={confirm}>confirm</button>
			<button on:click={() => viewModal(false)}>cancel</button>
		</div>
	</div>
</div>

<style>
	button {
		@apply bg-slate-900 hover:bg-slate-800 text-white p-2 rounded-full;
	}
</style>
