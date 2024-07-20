<script>
	import Github from '$lib/components/icons/Github.svelte';
	import FancyEj from './FancyEJ.svelte';
	let innerWidth;
</script>

<svelte:window bind:innerWidth />

<div class="links">
	<FancyEj />
	<a href="https://github.com/emikjackson/ear-trainer-3000" rel="noopener noreferrer">
		<div class="visually-hidden">Project Github Repository</div>
		<Github width={innerWidth < 600 ? 26 : 32} />
	</a>
</div>

<style>
	.links {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	@media (max-width: 600px) {
		.links {
			gap: 8px;
		}
	}
</style>
