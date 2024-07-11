<script>
	import Github from '$lib/components/icons/Github.svelte';
	let innerWidth;
</script>

<svelte:window bind:innerWidth />

<div class="links">
	<a
		href="https://github.com/emikjackson/ear-trainer-3000"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="visually-hidden">Project Github Repository</div>
		<Github width={innerWidth < 600 ? 26 : 32} />
	</a>
</div>
