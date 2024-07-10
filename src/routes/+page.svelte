<script>
	import Answers from '$lib/components/Answers.svelte';
	import NoteTesterMachine from '$lib/components/NoteTesterMachine.svelte';
	import QuizSidebar from '$lib/components/QuizSidebar.svelte';
	import MobileHeader from '../lib/components/MobileHeader.svelte';

	let innerWidth;
	$: onMobile = innerWidth < 900;
</script>

<svelte:window bind:innerWidth />

<div class="outer-wrapper">
	<QuizSidebar />
	<div class="main-wrapper">
		{#if onMobile}
			<MobileHeader />
		{/if}
		<NoteTesterMachine />
		<Answers />
	</div>
</div>

<style>
	.outer-wrapper {
		display: flex;
	}
	.main-wrapper {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		padding: 20px;
		padding-bottom: 0px;
		box-sizing: border-box;
		flex: 1;
	}
	@media (max-width: 600px) {
		.main-wrapper {
			padding: 6px;
			padding-bottom: 0px;
		}
	}
</style>
