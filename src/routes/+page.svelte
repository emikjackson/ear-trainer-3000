<script>
	import Answers from '$lib/components/Answers.svelte';
	import NoteTesterMachine from '$lib/components/NoteTesterMachine.svelte';
	import Sidebar from '../lib/components/Sidebar.svelte';
	import MobileHeader from '../lib/components/MobileHeader.svelte';
	import { settingsModalOpen } from '$lib/store.js';
	import SettingsModal from '../lib/components/SettingsModal.svelte';

	let innerWidth;
	$: onMobile = innerWidth < 900;
</script>

<svelte:window bind:innerWidth />

{#if $settingsModalOpen}
	<SettingsModal />
{/if}

<div class="outer-wrapper">
	<Sidebar />
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
		padding-top: 40px;
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
