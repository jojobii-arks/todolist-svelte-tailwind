<script>
  import Modal from '../components/Modal.svelte';
	import { viewModal, editing } from '../components/ModalData';
  import Entry from '../components/Entry.svelte';
  import Form from '../components/Form.svelte';
	import { data } from '../stores/data'

	function startEditing(entryId) {
		editing.set($data.find(e => e.id === entryId));
		viewModal(true);
	};

</script>


<Modal />

<div class="h-screen flex justify-center items-center">
	<div class="bg-gray-50 rounded-xl p-6 grid grid-flow-row w-[90%] max-w-xl gap-4">
		<h1 class="text-4xl font-bold text-center">Todo List</h1>
		<ul class="grid grid-flow-row gap-2">
			{#each $data as todo}
				<Entry {todo} on:edit={e => { startEditing(e.detail) }} />
			{/each}
		</ul>
		<Form />
	</div>
</div>
