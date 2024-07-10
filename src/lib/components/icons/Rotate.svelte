<script>
	import { browser } from '$app/environment';
	import { notes } from '$lib/store.js';
	import { onMount } from 'svelte';
	export let width = 32;
	export let fill = '';
	let isMounted = false;
	let animDegrees = 0;

	onMount(() => (isMounted = true));

	const rotateTheIcon = () => {
		if (browser && isMounted) {
			const icon = document.getElementById('rotate-icon');
			animDegrees += 360;
			icon.style.transform = `rotate(${animDegrees}deg)`;
		}
	};

	// When notes change, do a lil icon rotation!
	$: rotateTheIcon($notes);
</script>

<svg
	id="rotate-icon"
	aria-hidden="true"
	focusable="false"
	{width}
	height={width}
	viewBox="0 0 24 24"
	><g
		fill="none"
		stroke={fill || 'currentColor'}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		><path d="M17.7 7.7A7.1 7.1 0 0 0 5 10.8" /><path
			d="M18 4v4h-4m-7.7 8.3A7.1 7.1 0 0 0 19 13.2"
		/><path d="M6 20v-4h4" /></g
	></svg
>

<style>
	svg {
		-webkit-transition: transform 1.5s ease;
		-moz-transition: transform 1.5s ease;
		-o-transition: transform 1.5s ease;
		-ms-transition: transform 1.5s ease;
		transition: transform 1.5s ease;
	}
</style>
