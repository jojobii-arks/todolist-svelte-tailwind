<script>
  import Form from './Form.svelte';
	import { data, addEntry } from './data'
	console.log($data, addEntry);
</script>

<div class="h-screen grid justify-center items-center bg-rose-200">

	<div class="bg-gray-50 rounded-xl p-6 grid grid-flow-row w-96 gap-4">
		<h1 class="text-4xl font-bold text-center">Todo List</h1>
		<Form />
	</div>

</div>
